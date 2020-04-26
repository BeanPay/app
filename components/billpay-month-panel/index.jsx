import styles from './BillpayMonthPanel.module.css'
import DashboardPanel from '../../design-system/dashboard-panel'
import CalendarMonth from '../calendar-month'

export default function BillpayMonthPanel({month, year, bills}) {
  const monthName = new Date(year, month-1, 1).toLocaleString('default', { month: 'long' });
  return (
    <DashboardPanel className={styles.billpayMonthPanel} title={monthName} minRowWeight={50}>
      <CalendarMonth className={styles.calendar} month={month} year={year} bills={bills} />
    </DashboardPanel>
  )
}
