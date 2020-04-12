import classNames from 'classnames'
import styles from './BillpayMonth.module.css'
import SVG from 'react-inlinesvg'
import CheckIcon from './check.svg'
import withOrdinalSuffix from '../../util/with-ordinal-suffix'

export default function BillpayMonth({className, month, year, bills}) {
  // Determines the number of days to offset the first week to
  // ensure the 7 day week aligns with the proper days.
  const firstWeekOffset = new Date(year + "-" + month + "-01").getDay();

  // Determine the total number of days in a month
  const numDaysInMonth = new Date(year, month, 0).getDate();

  // Determine the first millisecond of today
  var today = new Date();
  today.setHours(0,0,0,0)
  today = today.getTime();

  // Generate the list of blank days
  var days = [];
  for(var i = 1; i <= numDaysInMonth; i++) {
    days.push({
      date: withOrdinalSuffix(i),
      totalDue: 0,
      billStatus: 'no-bills',
      isPast: new Date(year, month - 1, i).getTime() < today,
      isToday: new Date(year, month - 1, i).getTime() == today,
    })
  }

  // Go through all of the bills, and update the monthly data
  for (const bill of bills) {
    const day = days[bill.dueDate - 1];
    if(bill.paid != true) {
      day.totalDue += bill.totalDue;
      day.billStatus = 'due';
    } else {
      // paid
      if(day.billStatus !== 'due') {
        day.billStatus = 'paid'
      }
    }
  }

  return (
    <div className={classNames(styles.billpayMonth, className)}>
      {/* Plant all of the offset divs */}
      {Array(firstWeekOffset).fill().map((k,v)=>(
        <div key={month+v} className={classNames(styles.day, styles.offset)} />
      ))}

      {/* Place all of the proper days */}
      {days.map(day => (
        <div key={month+day.date} className={classNames({
          [styles.day]: true,
          [styles.isToday]: day.isToday,
          [styles.isPast]: day.isPast,
          [styles.billDue]: day.billStatus === 'due'
        })}>
          <span className={styles.date}>{day.date}</span>
          {day.totalDue > 0 ?
            <span className={styles.totalDue}>${day.totalDue}</span>
            : null}
          <div className={styles.icons}>
            {day.billStatus == 'paid' ?  <SVG src={CheckIcon} /> : null }
          </div>
        </div>
      ))}
    </div>
  )
}
