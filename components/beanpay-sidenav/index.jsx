import Sidenav from '../../design-system/sidenav'
import { faMoneyBill, faCog } from '@fortawesome/free-solid-svg-icons'

export default function BeanPaySidenav({activePath}) {
  return (
    <Sidenav
      activePath={activePath}
      logo="/logos/horizontal-lockup.svg"
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
