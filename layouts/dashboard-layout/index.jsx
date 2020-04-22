import { useRouter } from 'next/router'
import classNames from 'classnames'
import styles from './DashboardLayout.module.css'
import BeanPaySidenav from '../../components/beanpay-sidenav'
import BaseLayout from '../base-layout'

export default function DashboardLayout({className, pageTitle, children}) {
  const router = useRouter()
  return (
    <BaseLayout pageTitle={pageTitle} className={classNames(styles.dashboardLayout, className)}>
      <BeanPaySidenav activePath={router.pathname} />
      <div className={styles.content}>
        {children}
      </div>
    </BaseLayout>
  )
}
