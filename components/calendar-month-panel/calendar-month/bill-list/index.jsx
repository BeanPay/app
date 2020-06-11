import classNames from 'classnames'
import styles from './BillList.module.css'
import BillListItem from './bill-list-item'

export default function BillList({className, bills, isPast, updateState}) {
  const dueBills = bills.filter(bill => bill.payment == null);
  const paidBills = bills.filter(bill => bill.payment != null);
  return (
    <div className={classNames(styles.billList, className)}>
      {dueBills.length > 0 && (
        <BillListCategory category={isPast ? 'overdue' : 'unpaid'} bills={dueBills} updateState={updateState} />
      )}
      {paidBills.length > 0 && (
        <BillListCategory category="paid" bills={paidBills} updateState={updateState} />
      )}
    </div>
  )
}

function BillListCategory({category, bills, updateState}) {
  return (
    <div className={styles.billListCategory}>
      <h5>{category}</h5>
      <ul>
        {bills.map(bill => (
          <BillListItem key={bill.name} category={category} bill={bill} updateState={updateState} />
        ))}
      </ul>
    </div>
  )
}
