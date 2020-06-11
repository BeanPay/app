import styles from './CalendarMonthPanel.module.css'
import DashboardPanel from '../../design-system/dashboard-panel'
import CalendarMonth from './calendar-month'
import { useEffect, useState } from 'react';
import apiClient from '../../util/api-client'

export default function CalendarMonthPanel({month, year}) {
  const [bills, setBills] = useState(null);
  const [payments, setPayments] = useState(null);
  const monthName = new Date(year, month-1, 1).toLocaleString('default', { month: 'long' });

  // Fetch the bills & payments for this month
  useEffect(() => {
    const fromQuery = `${year}-${pad(month, 2)}-01`;
    const toQuery = `${month === 12 ? year + 1 : year}-${pad(month === 12 ? 1 : month + 1, 2)}-01`
    apiClient.authenticatedRequest(apiClient.getBills)
      .then((resp) => {
        if (resp.status_code == 200) {
          setBills(resp.result)
          return apiClient.authenticatedRequest(
            apiClient.getPayments(fromQuery, toQuery)
          )
        }
      })
      .then((resp) => {
        if (resp.status_code == 200) {
          setPayments(resp.result)
        }
      })
  }, [])

  // Render
  return (
    <DashboardPanel className={styles.calendarMonthPanel} title={monthName} minRowWeight={50}>
      { bills && payments &&
        <CalendarMonth
          className={styles.calendar}
          month={month}
          year={year}
          bills={flattenBills(filterBills(bills, month, year), payments, month, year)}
        />
      }
    </DashboardPanel>
  )
}

// Flattens our payments into our bills object
function flattenBills(bills, payments, month, year) {
  return bills.map((bill) => {
    var matchingPayment = null;
    payments.forEach(payment => {
      if(payment.bill_id === bill.id) {
        matchingPayment = payment
      }
    })
    return {
      id: bill.id,
      name: bill.name,
      payment_url: bill.payment_url,
      due_date: `${year}-${pad(month, 2)}-${bill.first_due_date.substring(8, 10)}`,
      estimated_total_due: bill.estimated_total_due,
      payment: matchingPayment,
    }
  })
}

// filterBills takes a list of bills and returns only the ones that
// are due during the specified month/year
function filterBills(bills, month, year) {
  const currentMonth = new Date(`${year}-${month}-1`);
  return bills.filter((bill) => {
    const firstDueMonth = new Date(`${bill.first_due_date.substring(0, 7)}-1`)
    var monthsDifference = (currentMonth.getFullYear()*12 + currentMonth.getMonth()) - (firstDueMonth.getFullYear()*12 + firstDueMonth.getMonth());
    if(monthsDifference < 0) {
      return false
    }
    switch (bill.frequency) {
      case 'monthly':
        return true;
      case 'quarterly':
        return monthsDifference % 3 === 0;
      case 'biannually':
        return monthsDifference % 6 === 0;
      case 'annually':
        return monthsDifference % 12 === 0;
    }
    return false
  })
}

// A small utility function to pad strings with 0's
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
