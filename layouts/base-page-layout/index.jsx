import classNames from 'classnames'
import styles from './BasePageLayout.module.css'
import BillpaySidenav from '../../components/billpay-sidenav'

export default function BasePageLayout({className, pageSlug, children}) {
  return (
    <div className={classNames(styles.basePageLayout, className)}>
      <BillpaySidenav activePage={pageSlug} />
      <div className={styles.basePageContent}>
        {children}
      </div>
    </div>
  )
}
