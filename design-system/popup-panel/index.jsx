import React, { useRef, useEffect } from 'react';
import styles from './PopupPanel.module.css'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function PopupPanel({title, onClose, style, popperAttributes, children}, popperRef) {
  // Here we create an event listener to track if we click
  // outside of this component so we can trigger the onClose
  // that was passed into this PopupPanel.
  //
  // Additionally, the one exception to this is that if a user clicks
  // within a modal.  When modals are open, we want to "pause" the state
  // of the application behind, so clicking in the modal we don't want
  // the close to trigger.
  const popupPanelRef = useRef(null);
  const modalRef = useRef(document.getElementById('modal-portal'));
  const handleClick = (event) => {
    if (
      popupPanelRef.current && !popupPanelRef.current.contains(event.target) &&
      modalRef.current && !modalRef.current.contains(event.target)
    ) {
      onClose();
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  // Render
  return (
    <dialog className={styles.popperPopup} {...popperAttributes} style={style} ref={popperRef}>
      <div ref={popupPanelRef} className={styles.popupPanel}>
        <div className={styles.header}>
          <h4>{title}</h4>
          <span className={styles.close} onClick={(e) => {
            e.preventDefault();
            onClose();
          }}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </dialog>
  )
}

export default React.forwardRef(PopupPanel)
