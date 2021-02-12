import TopNav from '../../design-system/topnav'
import { faCalendar, faSmile, faSignOutAlt, faMoneyCheckAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

export default function BeanpayTopnav(){
  const router = useRouter()

  return(
    <>
      <TopNav
        logo='../../logos/horizontal-lockup.svg'
        userImg='../../img/user_account.svg'
        mainNavItems={[
          {
            icon: faCalendar,
            name: 'Bill Calendar',
            onClick: () => {
              router.push('/')
            }
          },
          {
            icon: faMoneyCheckAlt,
            name: 'Manage Bills',
            onClick: () => {
              router.push('/manage-bills')
            }
          }
        ]}
        userNavItems={[
          {
            icon: faUserEdit,
            name: 'Edit Profile',
            onClick: () => {
              {/* todo - open page/modal to edit the user's profile */}
            }
          },
          {
            icon: faSignOutAlt,
            name: 'Logout',
            onClick: () => {
              {/* todo - log the user out */}
            }
          },
        ]}
      />
    </>
  )
}
