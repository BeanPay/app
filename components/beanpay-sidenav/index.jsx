import Sidenav from '../../design-system/sidenav'
import { faHome, faCog } from '@fortawesome/free-solid-svg-icons'

export default function BeanPaySidenav({activePath}) {
  return (
    <Sidenav
      activePath={activePath}
      logo="/logos/horizontal-lockup.svg"
      navItems={[
        {
          icon: faHome,
          name: 'Home',
          url: '/',
        },
        {
          icon: faCog,
          name: 'Manage Bills',
          url: '/manage-bills',
        },
      ]}
    />
  )
}
