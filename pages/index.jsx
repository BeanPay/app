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

          // Calculate each month's state
          setFirstPanelData({
            month: currentMonth,
            year: currentYear,
            bills: flattenMonthlyBills(allBills, allPayments, currentMonth, currentYear)
          })
          setSecondPanelData({
            month: currentMonth === 12 ? 1 : currentMonth + 1,
            year: currentMonth === 12 ? currentYear + 1 : currentYear,
            bills: flattenMonthlyBills(allBills, allPayments, currentMonth + 1, currentYear)
          })
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
