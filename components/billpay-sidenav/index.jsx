import Sidenav from '../../design-system/sidenav'
import HorizontalLockup from './horizontal-lockup.svg'
import { faHome, faMoneyBill, faCog } from '@fortawesome/free-solid-svg-icons'

export default function BillPaySidenav({activePage}) {
  return (
    <Sidenav
      logo={HorizontalLockup}
      navItems={[
        {
          icon: faMoneyBill,
          name: 'Monthly Bills',
          url: '/bills',
          active: activePage === 'bills'
        },
        {
          icon: faCog,
          name: 'Settings',
          url: '/settings',
          active: activePage === 'settings'
        },
      ]}
    />
  )
}
