import { useState } from 'react';
import classNames from 'classnames'
import styles from './BillList.module.css'
import PopupMenu from '../../design-system/popup-menu'
import { faExternalLinkAlt, faReceipt } from '@fortawesome/free-solid-svg-icons'

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
    <div className={styles.billListCategory}>
      <h5>{category}</h5>
      <ul className={categoryClass}>
        {bills.map(bill => (
          <BillListItem
            bill={bill}
          />
        ))}
      </ul>
    </div>
  )
}

function BillListItem({ bill }) {
  const [active, setActive] = useState(false);
  return (
    <li
      onClick={() => {
        if(!active) setActive(true);
      }}
      className={classNames({
        [styles.active]: active
      })}
    >
      <p>{bill.name}</p>
      <p>{`$${bill.totalDue}`}</p>
      { active && (
        <PopupMenu
          onClose={() => {
            /* Put an artifically small delay here to ensure that
             * when the PopupPanel's click listener fires off that this
             * is actually still part of the DOM so the PopupPanel doesn't
             * close itself.
             *
             * This feels pretty hacky, but I actually cannot think of a better
             * way to handle this without complicating the PopupPanel interface.
             * This works consistently at 1ms, at 30ms should be extra safe
             * and still unnoticeable.
             */
            setTimeout(() =>{
              setActive(false);
            }, 30);
          }}
          className={styles.popupMenu}
          items={bill.paid ?
            [
              {
                text: "Mark as Unpaid",
                onClick: () => console.log("Mark as Unpaid Clicked"),
                icon: faReceipt,
              },
            ] :
            [
              {
                text: "Pay Bill",
                onClick: () => {
                  window.open(bill.billpayURL, '_blank');
                },
                icon: faExternalLinkAlt,
              },
              {
                text: "Mark as Paid",
                onClick: () => console.log("Mark as Paid Clicked"),
                icon: faReceipt,
              }
            ]
          }
        />
      )}
    </li>
  )
}
