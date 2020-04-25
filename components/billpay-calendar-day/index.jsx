import classNames from 'classnames'
import withOrdinalSuffix from '../../util/with-ordinal-suffix'
import CheckIcon from './check.svg'
import SVG from 'react-inlinesvg'
import dayStyles from './BillpayCalendarDay.module.css'
import BillpayList from '../billpay-list'
import PopupPanel from '../popup-panel'
import { usePopper } from 'react-popper';
import React, { useState } from 'react';

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

  // Popper Config for Modal
  const [popupOpen, setPopupOpen] = useState(false);
  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'auto',
  });

  // Render
  return (
    <>
      <div
        ref={setReferenceElement}
        onClick={() => {
          setPopupOpen(!popupOpen);
        }}
        className={classNames(
          dayStyles.billpayCalendarDay,
          {
            [dayStyles.offset]: isOffset,
            [dayStyles.isToday]: isToday,
            [dayStyles.isPast]: isPast,
            [dayStyles.billDue]: billStatus === 'due'
          }
        )}
      >
        <span className={dayStyles.date}>{withOrdinalSuffix(day)}</span>
        {totalDue > 0 ?
          <span className={dayStyles.totalDue}>${totalDue}</span>
          : null}
        <div className={dayStyles.icons}>
          {billStatus == 'paid' ?  <SVG src={CheckIcon} /> : null }
        </div>
      </div>

      { popupOpen && (
        <PopupPanel
          title="April 23rd"
          ref={setPopperElement}
          style={styles.popper}
          popperAttributes={attributes.popper}
          onClose={() => {
            setPopupOpen(false);
          }}
        >
          <BillpayList
            isPast={true}
            bills={[
              {
                name: 'Rent',
                billpayURL: 'https://www.rentpayment.com/pay/login.html',
                dueDate: 1,
                totalDue: 1050,
                paid: true,
              },
              {
                name: 'Waste Management',
                billpayURL: 'https://www.wm.com/us/en/mywm/my-payment/verify',
                dueDate: 5,
                totalDue: 24,
                paid: false,
              },
              {
                name: 'PSE&G',
                billpayURL: 'https://nj.pseg.com/',
                dueDate: 15,
                totalDue: 130,
                paid: false,
              },
            ]}
          />
        </PopupPanel>
      )}
    </>
  )
}
