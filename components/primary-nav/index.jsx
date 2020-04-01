import styles from './PrimaryNav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMoneyBill, faCog } from '@fortawesome/free-solid-svg-icons'

function PrimaryNav({navItems}) {
  return (
    <nav className={styles.primaryNav}>
      <ul>
        {navItems.map(navItem => (
          <li>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={navItem.icon} />
            </div>
            <span>{navItem.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function BillPayNav() {
  return (
    <PrimaryNav
      navItems={[
        {
          name: 'Home',
          icon: faHome,
        },
        {
          name: 'Monthly Bills',
          icon: faMoneyBill,
        },
        {
          name: 'Configure Bills',
          icon: faCog,
        },
      ]}
    />
  )
}
