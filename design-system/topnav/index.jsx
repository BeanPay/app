import NavDropdown from './nav-dropdown'
import styles from './TopNav.module.css'
import SVG from 'react-inlinesvg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import classNames from 'classnames'

export default function TopNav({logo, userImg, mainNavItems, userNavItems}){

  const [showMeMain, setShowMeMain] = useState(false)
  const [showMeUser, setShowMeUser] = useState(false)

  // TODO:Inline this
  const handleMainClick = (e) => {
    setShowMeMain(!showMeMain)
  }

  // TODO: Inline this
  const handleUserClick = (e) => {
    setShowMeUser(!showMeUser)
  }

  return(
    <nav className={styles.topNav} role="navigation">

      <div className={styles.menuWrapper} onClick={handleMainClick}>
        <div className={styles.buttonWrapper}>
          <SVG src={logo}></SVG>
          <FontAwesomeIcon icon={showMeMain?faCaretUp:faCaretDown} />
        </div>
        <NavDropdown
          className={classNames(styles.mainNavDropdown, {
            [styles.noNav]: !showMeMain,
          })}
          navItems={mainNavItems}
        />
      </div>

      <div className={styles.menuWrapper} onClick={handleUserClick}>
        <div className={styles.buttonWrapper}>
          <img src={userImg} />
          <FontAwesomeIcon icon={showMeUser?faCaretUp:faCaretDown} />
        </div>
        <NavDropdown
          className={classNames(styles.userNavDropdown, {
            [styles.noNav]: !showMeUser,
          })}
          navItems={userNavItems}
        />
      </div>

    </nav>
  )
}
