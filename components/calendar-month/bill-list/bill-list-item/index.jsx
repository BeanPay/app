import { useState } from 'react';
import styles from './BillListItem.module.css'
import classNames from 'classnames'
import PopupMenu from '../../../../design-system/popup-menu'
import { faExternalLinkAlt, faReceipt } from '@fortawesome/free-solid-svg-icons'

export default function BillListItem({ className, category, bill }) {
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

  const [active, setActive] = useState(false);
  return (
    <li
      onClick={() => {
        if(!active) setActive(true);
      }}
      className={classNames(
        className,
        categoryClass,
        styles.billListItem,
        { [styles.active]: active },
      )}
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
