import classNames from 'classnames'
import styles from './BillpayCalendarMonth.module.css'
import BillpayCalendarDay from '../billpay-calendar-day'

export default function BillpayCalendarMonth({className, month, year, bills}) {
  const firstWeekOffset = new Date(year + "-" + month + "-01").getDay();
  const numDaysInMonth = new Date(year, month, 0).getDate();
  return (
    <div className={classNames(styles.billpayCalendarMonth, className)}>
      {/* Plant all of the offset divs */}
      {Array(firstWeekOffset).fill().map((v, i)=>(
        <BillpayCalendarDay key={i} day={0} />
      ))}

      {/* Place all of the proper days */}
      {Array(numDaysInMonth).fill().map((v,i)=>(
        <BillpayCalendarDay
          key={i+1}
          month={month}
          year={year}
          day={i+1}
          bills={bills.filter(bill => bill.dueDate == i+1)}
        />
      ))}
    </div>
  )
}
