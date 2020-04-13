import styles from './BillpayMonthPanel.module.css'
import DashboardPanel from '../../design-system/dashboard-panel'
import BillpayCalendarMonth from '../billpay-calendar-month'
import BillpayList from '../billpay-list'

import BillpayCalendarDay from '../billpay-calendar-day'

export default function BillpayMonthPanel({month, year, bills}) {
  const monthName = new Date(year, month-1, 1).toLocaleString('default', { month: 'long' });
  return (
    <DashboardPanel className={styles.billpayMonthPanel} title={`${monthName} Bills`} minRowWeight={50}>
      <BillpayCalendarMonth className={styles.calendar} month={month} year={year} bills={bills} />
      <BillpayList className={styles.list} bills={bills} />
    </DashboardPanel>
  )
}
