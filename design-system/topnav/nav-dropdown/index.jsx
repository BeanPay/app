import styles from './NavDropdown.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

export default function NavDropdown({ className, navItems }){

  return(
    <ul className={classNames(className, styles.navDropdown)}>
      {
        navItems.map((navItem) => {
          return(
            <li className={styles.navItem}  key={navItem.name} onClick={navItem.onClick}>
              <FontAwesomeIcon icon={navItem.icon} />
              <h4>{navItem.name}</h4>
            </li>
          )
        })
      }
    </ul>
  )
}
