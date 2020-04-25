import classNames from 'classnames'
import styles from './BillpayList.module.css'

export default function BillpayList({className, bills, isPast}) {
  const dueBills = bills.filter(bill => !bill.paid);
  const paidBills = bills.filter(bill => bill.paid);
  return (
    <div className={classNames(styles.billpayList, className)}>
      {dueBills.length > 0 && (
        <BillCategoryList category={isPast ? 'overdue' : 'unpaid'} bills={dueBills} />
      )}
      {paidBills.length > 0 && (
        <BillCategoryList category="paid" bills={paidBills} />
      )}
    </div>
  )
}

function BillCategoryList({category, bills}) {
  var categoryClass = null;
  switch(category) {
    case 'overdue':
      categoryClass = styles.overdue;
      break;
    case 'unpaid':
      categoryClass = styles.unpaid;
      break;
    case 'paid':
      categoryClass = styles.paid;
      break;
  }

  return (
    <div className={styles.billCategoryList}>
      <h5>{category}</h5>
      <ul className={categoryClass}>
        {bills.map(bill => (
          <li>
            <p>{bill.name}</p>
            <p>{`$${bill.totalDue}`}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
