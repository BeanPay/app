import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import styles from './PopupMenuButton.module.css'
import classNames from 'classnames'

export default function PopupMenuButton({className, logo, isOpen, onClick}) {
  return (
    <div className={classNames(className, styles.popupMenuButton)} onClick={onClick}>
      <img src={logo} />
      <FontAwesomeIcon icon={isOpen?faCaretUp:faCaretDown} />
    </div>
  )
}
