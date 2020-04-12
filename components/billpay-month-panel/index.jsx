import DashboardPanel from '../../design-system/dashboard-panel'
import BillpayMonth from '../billpay-month'
import BillpayList from '../billpay-list'

/*
 * Bill Object:
  {
    name: 'Rent',
    billpayURL: 'https://www.rentpayment.com/pay/login.html',
    dueDate: 1,
    totalDue: 1050,
    paid: true,
  }
*/
export default function BillpayMonthPanel({month, year, bills}) {
  const monthName = new Date(year, month-1, 1).toLocaleString('default', { month: 'long' });
  return (
    <DashboardPanel title={`${monthName} Bills`} minRowWeight={50}>
      <BillpayMonth month={month} year={year} bills={bills} />
      <BillpayList bills={bills} />
    </DashboardPanel>
  )
}
