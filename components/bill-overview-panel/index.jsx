import styles from './BillOverviewPanel.module.css'
import DashboardPanel from '../../design-system/dashboard-panel'

export default function BillOverviewPanel() {
  return (
    <DashboardPanel
      className={styles.billOverviewPanel}
      title="Mortgage"
      description="$1050 due monthly on the 1st."
      minRowWeight={33}
    />
  )
}
