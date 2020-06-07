import DashboardLayout from '../layouts/dashboard-layout'
import CalendarMonthPanel from '../components/calendar-month-panel'
import { monthlyBills } from '../fixtures/bills'

export default function Bills() {
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
