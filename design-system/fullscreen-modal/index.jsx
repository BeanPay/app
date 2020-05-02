import React, { useRef, useEffect } from 'react';
import styles from './FullscreenModal.module.css';
import Panel from '../../design-system/panel'
import NextPortal from './NextPortal'

/*
 * FullscreenModalWithPortal is actually our default export, and externally we just
 * refer to this one as the FullscreenModal.
 *
 * We need to have a sub component here, for two reasons:
 *
 *  - We need the NextPortal to instantiate sooner rather than later so it can grab
 *    hold of the element via querySelectors. This can't be done just-in-time when
 *    we want to enable it, as the NextPortal coponent needs to mount first.
 *
 *  - We need the FullscreenModal to instantiate only when it is open, as we are
 *    applying an event listener that we don't want to be enabed until the modal itself
 *    is actually visible, else it will be registering clicks outside of the tracked
 *    dom element, which would then trigger a close before it even opens.
 */
export default function FullscreenModalWithPortal({ children, isOpen, ...restProps }) {
  return (
    <NextPortal selector="#modal-portal">
      { isOpen && (
        <FullscreenModal {...restProps}>
          {children}
        </FullscreenModal>
      )}
    </NextPortal>
  )
}

function FullscreenModal({ title, description, children, onClose }) {
  // Adds a document event listener to see if we click outside of the panelWrapper
  const panelWrapperRef = useRef(null);
  const handleClick = (event) => {
    if (panelWrapperRef.current && !panelWrapperRef.current.contains(event.target)) {
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
    <div className={styles.fullscreenModal}>
      <div
        ref={panelWrapperRef}
        className={styles.panelWrapper}
      >
        <Panel
          title={title}
          description={description}
          onClose={onClose}
        >
          {children}
        </Panel>
      </div>
    </div>
  )
}
