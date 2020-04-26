import React, { useRef, useEffect } from 'react';
import styles from './PopupMenu.module.css';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * The intended behavior of component is almost identical
 * to Menus as documented in Google's Material Design.
 * https://material.io/components/menus
 */
export default function PopupMenu({ className, items, onClose }) {
  const popupMenuRef = useRef(null);
  const handleClick = (event) => {
    if (popupMenuRef.current && !popupMenuRef.current.contains(event.target)) {
      onClose();
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <ul
      ref={popupMenuRef}
      className={classNames(styles.popupMenu, className)}
    >
      {items.map((item) => (
        <li onClick={() => {
          onClose();
          item.onClick();
        }}>
          <FontAwesomeIcon icon={item.icon} />
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  )
}
