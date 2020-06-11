import classNames from 'classnames'
import styles from './CalendarMonth.module.css'
import CalendarDay from './calendar-day'

export default function CalendarMonth({className, month, year, bills}) {
  const firstWeekOffset = new Date(year + "-" + month + "-01").getDay();
  const numDaysInMonth = new Date(year, month, 0).getDate();
  return (
    <div className={classNames(styles.calendarMonth, className)}>
      {/* Plant all of the offset divs */}
      {Array(firstWeekOffset).fill().map((v, i)=>(
        <CalendarDay key={i} day={0} />
      ))}

      {/* Place all of the proper days */}
      {Array(numDaysInMonth).fill().map((v,i)=>(
        <CalendarDay
          key={i+1}
          month={month}
          year={year}
          day={i+1}
          bills={bills.filter(bill => parseInt(bill.due_date.substring(8, 10)) == i+1)}
        />
      ))}
    </div>
  )
}
