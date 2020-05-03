import classNames from 'classnames'
import styles from './BillList.module.css'
import BillListItem from './bill-list-item'

export default function BillList({className, bills, isPast}) {
  const dueBills = bills.filter(bill => !bill.paid);
  const paidBills = bills.filter(bill => bill.paid);
  return (
    <div className={classNames(styles.billList, className)}>
      {dueBills.length > 0 && (
        <BillListCategory category={isPast ? 'overdue' : 'unpaid'} bills={dueBills} />
      )}
      {paidBills.length > 0 && (
        <BillListCategory category="paid" bills={paidBills} />
      )}
    </div>
  )
}

function BillListCategory({category, bills}) {
  return (
    <div className={styles.billListCategory}>
      <h5>{category}</h5>
      <ul>
        {bills.map(bill => (
          <BillListItem key={bill.name} category={category} bill={bill} />
        ))}
      </ul>
    </div>
  )
}
