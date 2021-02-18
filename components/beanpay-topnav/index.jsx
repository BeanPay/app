import TopNav from '../../design-system/topnav'
import { faCalendar, faSmile, faSignOutAlt, faMoneyCheckAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import apiClient from '../../util/api-client'

export default function BeanpayTopnav(){
  const router = useRouter()

  return(
    <>
      <TopNav
        logo='../../logos/horizontal-lockup.svg'
        userImg='../../img/user_account.svg'
        mainMenuItems={[
          {
            icon: faCalendar,
            text: 'Bill Calendar',
            onClick: () => {
              router.push('/')
            }
          },
          {
            icon: faMoneyCheckAlt,
            text: 'Manage Bills',
            onClick: () => {
              router.push('/manage-bills')
            }
          }
        ]}
        userMenuItems={[
          {
            icon: faSignOutAlt,
            text: 'Logout',
            onClick: async () => {
              await apiClient.logout();
              router.push('/sign-in');
            }
          },
        ]}
      />
    </>
  )
}
