import Link from 'next/link'
import styles from './NavList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavList({navItems, activePath}) {
  return (
    <nav className={styles.navList}>
      <ul>
        {navItems.map(navItem => (
          <Link href={navItem.url} key={navItem.name}>
            <li className={activePath === navItem.url ? styles.active : null}>
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={navItem.icon} />
              </div>
              <span>{navItem.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}
