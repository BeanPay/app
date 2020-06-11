import DashboardLayout from '../layouts/dashboard-layout'
import CalendarMonthPanel from '../components/calendar-month-panel'
import { monthlyBills } from '../fixtures/bills'
import { useEffect, useState } from 'react';
import apiClient from '../util/api-client'
import pad from '../util/pad'
import flattenMonthlyBills from '../util/flatten-monthly-bills'

export default function Bills() {
  const [firstPanelData, setFirstPanelData] = useState(null);
  const [secondPanelData, setSecondPanelData] = useState(null);

  useEffect(() => {
    // Determine the Current Date
    var currentMonth = new Date().getMonth() + 1;
    var currentYear = new Date().getFullYear();

    // Determine the query params to load the surrounding months data
    var from = new Date(`${currentYear}-${currentMonth}-1`);
    from.setMonth(from.getMonth() - 1)
    var fromQuery = `${from.getFullYear()}-${pad(from.getMonth() + 1, 2)}-01`
    var to = new Date(`${currentYear}-${currentMonth}-1`);
    to.setMonth(to.getMonth() + 2)
    var toQuery = `${to.getFullYear()}-${pad(to.getMonth() + 1, 2)}-01`

    // Load all Bills & Payments
    var allBills = null;
    var allPayments = null;
    apiClient.authenticatedRequest(apiClient.getBills)
      .then((resp) => {
        if (resp.status_code == 200) {
          allBills = resp.result;
          return apiClient.authenticatedRequest(
            apiClient.getPayments(fromQuery, toQuery)
          )
        }
      })
      .then((resp) => {
        if (resp.status_code == 200) {
          allPayments = resp.result

          // Determine the bills for the surrounding months
          var previousMonthBills = flattenMonthlyBills(
            allBills,
            allPayments,
            currentMonth === 1 ? 12 : currentMonth - 1,
            currentMonth === 1 ? currentYear - 1 : currentYear,
          )
          var currentMonthBills = flattenMonthlyBills(allBills, allPayments, currentMonth, currentYear)
          var nextMonthBills = flattenMonthlyBills(
            allBills,
            allPayments,
            currentMonth === 12 ? 1 : currentMonth + 1,
            currentMonth === 12 ? currentYear + 1 : currentYear,
          )

          var hasOverdueBills = false;
          previousMonthBills.forEach((bill) => {
            if(bill.payment === null) {
              hasOverdueBills = true;
            }
          })

          // If we have overdue bills from the previous month, show the
          // last month and the current month
          if(hasOverdueBills) {
            setFirstPanelData({
              month: currentMonth === 1 ? 12 : currentMonth - 1,
              year: currentMonth === 1 ? currentYear - 1 : currentYear,
              bills: previousMonthBills
            })
            setSecondPanelData({
              month: currentMonth,
              year: currentYear,
              bills: currentMonthBills
            })
          } else {
            // If we've paid all of our bills last month, show the
            // current month and next month.
            setFirstPanelData({
              month: currentMonth,
              year: currentYear,
              bills: currentMonthBills,
            })
            setSecondPanelData({
              month: currentMonth === 12 ? 1 : currentMonth + 1,
              year: currentMonth === 12 ? currentYear + 1 : currentYear,
              bills: nextMonthBills
            })
          }
        }
      })
  }, [])

  return (
    <DashboardLayout pageTitle="Bills">
      {firstPanelData && ( <CalendarMonthPanel {...firstPanelData} />)}
      {secondPanelData && ( <CalendarMonthPanel {...secondPanelData} />)}
    </DashboardLayout>
  );
}
