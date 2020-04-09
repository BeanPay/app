import styles from './BillpayList.module.css'
import Button from '../../design-system/button'

export default function BillpayList() {
  return (
    <div className={styles.billpayList}>
      <TabulatedBillList
        header="Overdue"
        items={[
          {
            name: "PSE&G",
            totalDue: "$130",
            dueDate: "Mar 15th",
            billpayURL: "https://nj.pseg.com/"
          },
          {
            name: "Chase Sapphire",
            totalDue: "$421",
            dueDate: "Mar 23rd",
            billpayURL: "https://www.chase.com/"
          }
        ]}
      />
      <TabulatedBillList
        header="Upcoming"
        items={[
          {
            name: "Rent",
            totalDue: "$1050",
            dueDate: "Mar 31st",
            billpayURL: "https://www.rentpayment.com/pay/login.html"
          }
        ]}
      />
    </div>
  )
}

function TabulatedBillList({header, items}) {
  return (
    <table className={styles.billpayTable}>
      <tr>
        <th>{header}</th>
      </tr>
      {items.map(item => (
        <tr>
          <td className={styles.name}>{item.name}</td>
          <td className={styles.totalDue}>{item.totalDue}</td>
          <td className={styles.dueDate}>{item.dueDate}</td>
          <td className={styles.buttons}>
            <Button color="yellow" text="Pay Bill" onClick={() => {
              window.open(item.billpayURL, "_blank");
            }}/>
            <Button color="green" text="Mark Paid" />
          </td>
        </tr>
      ))}
    </table>
  )
}
