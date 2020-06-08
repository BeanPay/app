import DashboardLayout from '../layouts/dashboard-layout'
import CalendarMonthPanel from '../components/calendar-month-panel'
import { monthlyBills } from '../fixtures/bills'

import { useEffect } from 'react';
import apiClient from '../util/api-client'

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

export default function Bills() {
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
          console.log("Bills", allBills)
          return apiClient.authenticatedRequest(
            apiClient.getPayments(fromQuery, toQuery)
          )
        }
      })
      .then((resp) => {
        console.log("Payments", resp.result)
      })
  })

  return (
    <DashboardLayout pageTitle="Bills">
      <CalendarMonthPanel
        month={6}
        year={2020}
        bills={monthlyBills}
      />
      <CalendarMonthPanel
        month={7}
        year={2020}
        bills={monthlyBills}
      />
    </DashboardLayout>
  );
}
