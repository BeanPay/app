import { useEffect, useState } from 'react';
import DashboardLayout from '../layouts/dashboard-layout'
import CalendarMonthPanel from '../components/calendar-month-panel'

export default function Bills() {
  const [currentMonth, setCurrentMonth] = useState(null);
  const [currentYear, setCurrentYear] = useState(null);
  useEffect(() => {
    setCurrentMonth(new Date().getMonth() + 1);
    setCurrentYear(new Date().getFullYear())
  }, [])
  return (
    <DashboardLayout pageTitle="Bills">
      { currentMonth && currentYear && (
        <>
          <CalendarMonthPanel
            month={currentMonth}
            year={currentYear}
          />
          <CalendarMonthPanel
            month={currentMonth === 12 ? 1 : currentMonth + 1}
            year={currentMonth === 12 ? currentYear + 1 : currentYear}
          />
        </>
      )}
    </DashboardLayout>
  );
}
