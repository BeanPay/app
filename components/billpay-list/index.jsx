import styles from './BillpayList.module.css'
import Button from '../../design-system/button'
import withOrdinalSuffix from '../../util/with-ordinal-suffix'

export default function BillpayList({bills}) {
  const today = new Date().getDate();
  const overdueBills = bills.filter(bill => !bill.paid && bill.dueDate < today);
  const upcomingBills = bills.filter(bill => !bill.paid && bill.dueDate >= today);
  const paidBills = bills.filter(bill => bill.paid);
  return (
    <div className={styles.billpayList}>
      {overdueBills.length > 0 && (
        <TabulatedBillList header="Overdue" bills={overdueBills} />
      )}
      {upcomingBills.length > 0 && (
        <TabulatedBillList header="Upcoming" bills={upcomingBills} />
      )}
      {paidBills.length > 0 && (
        <TabulatedBillList header="Paid" bills={paidBills} />
      )}
    </div>
  )
}

function TabulatedBillList({header, bills}) {
  return (
    <table className={styles.billpayTable}>
      <thead>
        <tr>
          <th>{header}</th>
        </tr>
      </thead>
      <tbody>
        {bills.map(bill => (
          <tr key={bill.name}>
            <td className={styles.name}>{bill.name}</td>
            <td className={styles.totalDue}>{`$${bill.totalDue}`}</td>
            <td className={styles.dueDate}>{withOrdinalSuffix(bill.dueDate)}</td>
            <td className={styles.buttons}>
              {bill.paid ? (
                <Button color="orange" text="Mark Unpaid" />
              ) : (
                <>
                  <Button color="yellow" text="Pay Bill" onClick={() => {
                    window.open(bill.billpayURL, "_blank");
                  }}/>
                  <Button color="green" text="Mark Paid" />
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
