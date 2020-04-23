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
          <p>Hello world :)</p>
        </PopupPanel>
      )}
    </>
  );
};
