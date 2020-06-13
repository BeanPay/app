import Sidenav from '../../design-system/sidenav'
import { faCalendar, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'

export default function BeanPaySidenav({activePath}) {
  return (
    <Sidenav
      activePath={activePath}
      logo="/logos/horizontal-lockup.svg"
      navItems={[
        {
          icon: faCalendar,
          name: 'Bill Calendar',
          url: '/',
        },
        {
          icon: faMoneyCheckAlt,
          name: 'Manage Bills',
          url: '/manage-bills',
        },
      ]}
    />
  )
}
