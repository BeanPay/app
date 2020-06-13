import classNames from 'classnames'
import styles from './CalendarMonth.module.css'
import CalendarDay from './calendar-day'

export default function CalendarMonth({className, month, year, bills, updateState}) {
  const firstWeekOffset = new Date(year + "-" + pad(String(month), 2) + "-01")
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
          updateState={updateState}
        />
      ))}
    </div>
  )
}

// A small utility function to pad strings with 0's
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
