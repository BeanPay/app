import { useState } from 'react';
import classNames from 'classnames'
import styles from './Panel.module.css'
import SVG from 'react-inlinesvg'
import PopupMenu from '../popup-menu'
import verticalEllipsis from './vertical-ellipsis.svg';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Panel({className, title, description, menuItems, onClose, children}) {
  const [popupMenuActive, setPopupMenuActive] = useState(false);
  return (
    <div className={classNames(styles.panel, className)}>
      <div className={styles.header}>
        <div className={styles.info}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        { menuItems && menuItems.length > 0 && (
          <SVG src={verticalEllipsis} onClick={() => {
            if(!popupMenuActive) setPopupMenuActive(true);
          }}/>
        )}
        { popupMenuActive && (
          <PopupMenu
            className={styles.popupMenu}
            onClose={() => setPopupMenuActive(false) }
            items={menuItems}
          />
        )}
        { onClose && (
          <span className={styles.close} onClick={(e) => {
            e.preventDefault();
            onClose();
          }}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        )}
      </div>
      {children && (
        <div className={styles.content}>
          {children}
        </div>
      )}
    </div>
  )
}
