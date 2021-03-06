import { usePopper } from 'react-popper';
import React, { useState } from 'react';
import classNames from 'classnames';
import SVG from 'react-inlinesvg';
import withOrdinalSuffix from '../../../../util/with-ordinal-suffix';
import CheckIcon from './check.svg';
import dayStyles from './CalendarDay.module.css';
import BillList from '../bill-list';
import PopupPanel from '../../../../design-system/popup-panel';

export default function CalendarDay({month, year, day, bills, updateState}) {
  // Determine the dates relative reference to todays actual date
  var today = new Date();
  today.setHours(0,0,0,0);
  today = today.getTime();
  const isPast = new Date(year, month - 1, day).getTime() < today;
  const isToday = new Date(year, month - 1, day).getTime() == today;
  const isOffset = day === 0;

  // Get the month name for the modal
  const monthName = new Date(year, month - 1, day).toLocaleString('default', { month: 'long' });

  // Determine if & what we owe
  var totalDue = 0;
  var billStatus = 'no-bills';
  if (bills != null) {
    for (const bill of bills) {
      if(bill.payment == null) {
        totalDue += bill.estimated_total_due;
        billStatus = 'due';
      } else {
        if(billStatus !== 'due') {
          billStatus = 'paid';
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
          dayStyles.calendarDay,
          {
            [dayStyles.active]: popupOpen,
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
          title={`${monthName} ${withOrdinalSuffix(day)}`}
          ref={setPopperElement}
          style={styles.popper}
          popperAttributes={attributes.popper}
          onClose={() => {
            setPopupOpen(false);
          }}
        >
          <BillList isPast={isPast} bills={bills} updateState={updateState} />
        </PopupPanel>
      )}
    </>
  )
}
