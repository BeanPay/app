import classNames from 'classnames'
import withOrdinalSuffix from '../../util/with-ordinal-suffix'
import CheckIcon from './check.svg'
import SVG from 'react-inlinesvg'
import styles from './BillpayCalendarDay.module.css'

export default function BillpayCalendarDay({month, year, day, bills}) {
  // Determine the dates relative reference to todays actual date
  var today = new Date();
  today.setHours(0,0,0,0)
  today = today.getTime();
  const isPast = new Date(year, month - 1, day).getTime() < today;
  const isToday = new Date(year, month - 1, day).getTime() == today;
  const isOffset = day === 0;

  // Determine if & what we owe
  var totalDue = 0;
  var billStatus = 'no-bills';
  if (bills != null) {
    for (const bill of bills) {
      if(bill.paid != true) {
        totalDue += bill.totalDue;
        billStatus = 'due';
      } else {
        if(billStatus !== 'due') {
          billStatus = 'paid'
        }
      }
    }
  }

  return (
    <div className={classNames(
      styles.billpayCalendarDay,
      {
        [styles.offset]: isOffset,
        [styles.isToday]: isToday,
        [styles.isPast]: isPast,
        [styles.billDue]: billStatus === 'due'
      }
    )}>
      <span className={styles.date}>{withOrdinalSuffix(day)}</span>
      {totalDue > 0 ?
        <span className={styles.totalDue}>${totalDue}</span>
        : null}
      <div className={styles.icons}>
        {billStatus == 'paid' ?  <SVG src={CheckIcon} /> : null }
      </div>
    </div>
  )
}
