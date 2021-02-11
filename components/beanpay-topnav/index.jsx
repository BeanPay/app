import TopNav from '../../design-system/topnav'
import { faCalendar, faSmile, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'

export default function BeanpayTopnav(){

  return(
    <div className="Helloworld">
      <TopNav
        logo='../../logos/horizontal-lockup.svg'
        userImg='../../img/user_account.svg'
        mainNavItems={[
          {
            icon: faCalendar,
            name: 'Bill Calendar',
            onClick: () => {
              window.location.href = '/'
            }
          },
          {
            icon: faMoneyCheckAlt,
            name: 'Manage Bills',
            onClick: () => {
              window.location.href = '/manage-bills'
            }
          },
          {
            icon: faSmile,
            name: 'Test Page',
            onClick: () => {
              window.location.href = '/test-page'
            }
          }
        ]}
        userNavItems={[
          {
            icon: faCalendar,
            name: 'Edit Profile',
            onClick: () => {
              window.location.href = '/hello'
            }
          },
          {
            icon: faCalendar,
            name: 'Logout',
            onClick: () => {
              window.location.href = '/smello'
            }
          }
        ]}
      />
    </div>
  )
}
