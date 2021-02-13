import styles from './TopNav.module.css'
import SVG from 'react-inlinesvg'
import { useState } from 'react'
import classNames from 'classnames'
import PopupMenu from '../popup-menu'
import PopupMenuButton from './popup-menu-button'

export default function TopNav({logo, userImg, mainMenuItems, userMenuItems}){

  const [showMain, setShowMain] = useState(false)
  const [showUser, setShowUser] = useState(false)

  return(
    <nav className={styles.topNav} role="navigation">

      <div className={styles.container}>
        <PopupMenuButton
          className={styles.logo}
          logo={logo}
          clickEvent={ (e) => {setShowMain(e) }}
        />
        <PopupMenu
          className={classNames(styles.left, styles.menu, {
            [styles.hide]: !showMain,
          })}
          items={mainMenuItems}
          onClose={()=>{}}
        />
      </div>

      <div className={styles.container}>
        <PopupMenuButton
          className={styles.user}
          logo={userImg}
          clickEvent={(e)=>{setShowUser(e)}}
        />
        <PopupMenu
          className={classNames(styles.right, styles.menu, {
            [styles.hide]: !showUser,
          })}
          items={userMenuItems}
          onClose={()=>{}}
        />
      </div>

    </nav>
  )
}
