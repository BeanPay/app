import { useState } from 'react';
import classNames from 'classnames'
import styles from './Panel.module.css'
import SVG from 'react-inlinesvg'
import PopupMenu from '../popup-menu'
import verticalEllipsis from './vertical-ellipsis.svg';

export default function Panel({className, title, description, menuItems, children}) {
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
      </div>
      {children && (
        <div className={styles.content}>
          {children}
        </div>
      )}
    </div>
  )
}
