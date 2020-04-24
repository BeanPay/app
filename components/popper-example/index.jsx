import BillpayList from '../billpay-list'
import moduleStyles from './PopperExample.module.css'
import PopupPanel from '../popup-panel'
import { usePopper } from 'react-popper';
import React, { useState } from 'react';

export default function Example() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'auto',
  });

  return (
    <>
      <button
        type="button"
        ref={setReferenceElement}
        onClick={() => {
          setPopupOpen(!popupOpen);
        }}
      >
        April 23rd
      </button>

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
  );
};
