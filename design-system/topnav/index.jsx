import styles from './TopNav.module.css'
import { useState } from 'react'
import classNames from 'classnames'
import PopupMenu from '../popup-menu'
import PopupMenuButton from './popup-menu-button'

export default function TopNav({logo, userImg, mainMenuItems, userMenuItems}){

  const [showMain, setShowMain] = useState(false)
  const [showUser, setShowUser] = useState(false)

  return(
    <nav className={styles.topNav}>
      <div className={styles.container}>
        <PopupMenuButton
          className={styles.logoMenuButton}
          logo={logo}
          isOpen={showMain}
          onClick={() => {setShowMain(!showMain)}}
        />
        { showMain && (
          <PopupMenu
            className={classNames(styles.left, styles.popUpMenu)}
            items={mainMenuItems}
            onClose={() => {setShowMain(false)}}
          />
        )}
      </div>
      <div className={styles.container}>
        <PopupMenuButton
          className={styles.userMenuButton}
          logo={userImg}
          isOpen={showUser}
          onClick={() => {setShowUser(!showUser)}}
        />
        { showUser && (
          <PopupMenu
            className={classNames(styles.right, styles.popUpMenu)}
            items={userMenuItems}
            onClose={() => {setShowUser(false)}}
          />
        )}
      </div>
    </nav>
  )
}
