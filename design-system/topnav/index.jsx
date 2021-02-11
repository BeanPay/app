import NavDropdown from './nav-dropdown'
import styles from './TopNav.module.css'
import SVG from 'react-inlinesvg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Panel from '../panel'
import classNames from 'classnames'

export default function TopNav({logo, userImg, mainNavItems, userNavItems}){

  const [showMeMain, setShowMeMain] = useState(false)
  const [showMeUser, setShowMeUser] = useState(false)

  const handleMainClick = (e) => {
    setShowMeMain(!showMeMain)
    console.log("Main nav is open: " + showMeMain)
  }

  const handleUserClick = (e) => { 
    setShowMeUser(!showMeUser)
    console.log("User Nav is open:  " + showMeUser)
  }


  return(
    <nav className={styles.topNav} role="navigation">
      <div className={styles.buttons}>
        <div className={styles.mainNavButton} onClick={handleMainClick}>
          <SVG src={logo}></SVG>
          <FontAwesomeIcon icon={showMeMain?faCaretUp:faCaretDown} />
        </div>
        <div className={styles.userNavButton} onClick={handleUserClick}>
          <img src={userImg} />
          <FontAwesomeIcon icon={showMeUser?faCaretUp:faCaretDown} />
        </div>
      </div>
      <NavDropdown
        className={classNames(styles.mainNavDropdown, {
          [styles.noNav]: !showMeMain,
        })}
        navItems={mainNavItems}
      />
      <NavDropdown
        className={classNames(styles.userNavDropdown, {
          [styles.noNav]: !showMeUser,
        })}
        navItems={userNavItems}
      />
    </nav>
  )
}
