import Sidenav from '../../design-system/sidenav'
import HorizontalLockup from './horizontal-lockup.svg'
import { faMoneyBill, faCog } from '@fortawesome/free-solid-svg-icons'

export default function BillPaySidenav({activePath}) {
  return (
    <Sidenav
      activePath={activePath}
      logo={HorizontalLockup}
      navItems={[
        {
          icon: faMoneyBill,
          name: 'Monthly Bills',
          url: '/bills',
        },
        {
          icon: faCog,
          name: 'Settings',
          url: '/settings',
        },
      ]}
    />
  )
}
