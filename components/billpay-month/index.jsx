import classNames from 'classnames'
import styles from './BillpayMonth.module.css'

function ordinalSuffixOf(i) {
  var j = i % 10, k = i % 100;
  if (j == 1 && k != 11) {
    return i + "st";
  }
  if (j == 2 && k != 12) {
    return i + "nd";
  }
  if (j == 3 && k != 13) {
    return i + "rd";
  }
  return i + "th";
}

export default function BillpayMonth({month, year, bills}) {
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
      date: ordinalSuffixOf(i),
      totalDue: 0,
      billStatus: 'no-bills',
      isPast: new Date(year, month - 1, i).getTime() < today,
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
    <div className={styles.billpayMonth}>
      {/* Plant all of the offset divs */}
      {Array(firstWeekOffset).fill().map(()=>(
        <div className={classNames(styles.day, styles.offset)} />
      ))}

      {/* Place all of the proper days */}
      {days.map(day => (
        <div className={classNames({
          [styles.day]: true,
          [styles.isPast]: day.isPast,
          [styles.billDue]: day.billStatus === 'due'
        })}>
          <span className={styles.date}>{day.date}</span>
          {day.totalDue > 0 ?
            <span className={styles.totalDue}>${day.totalDue}</span>
            : null}
        </div>
      ))}
    </div>
  )
}
