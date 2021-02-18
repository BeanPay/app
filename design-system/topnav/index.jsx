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
          isOpen={showMain}
          onClick={(e) => {
            setShowMain(!showMain)
          }}
        />
        {showMain &&
          (<PopupMenu
            className={classNames(styles.left, styles.menu)}
            items={mainMenuItems}
            onClose={()=>{
              setTimeout(() =>{
                setShowMain(false);
              }, 10)
            }}
          />)
        }
      </div>

      <div className={styles.container}>
        <PopupMenuButton
          className={styles.user}
          logo={userImg}
          isOpen={showUser}
          onClick={(e) => {
            setShowUser(!showUser)
          }}
        />
        {showUser &&
          (<PopupMenu
            className={classNames(styles.right, styles.menu)}
            items={userMenuItems}
            onClose={()=>{
              setTimeout(() =>{
                setShowUser(false);
              }, 10)
            }}
          />)
        }
      </div>
    </nav>
  )
}
