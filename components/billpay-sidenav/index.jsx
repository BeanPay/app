import Sidenav from '../../design-system/sidenav'
import BillpayLogo from './billpay-logo.svg'
import { faHome, faMoneyBill, faCog } from '@fortawesome/free-solid-svg-icons'

export default function BillPaySidenav({activePage}) {
  return (
    <Sidenav
      logo={BillpayLogo}
      navItems={[
        {
          icon: faHome,
          name: 'Home',
          url: '/',
          active: activePage === 'home'
        },
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
