import styles from './Sidenav.module.css'
import NavList from '../nav-list'
import SVG from 'react-inlinesvg'

export default function Sidenav({logo, navItems}) {
  return (
    <div className={styles.sidenav}>
      <SVG className={styles.logo} src={logo} />
      <div className={styles.navWrapper}>
        <NavList navItems={navItems} />
      </div>
    </div>
  )
}
