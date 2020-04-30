import styles from './DashboardSectionHeader.module.css'

export default function DashboardSectionHeader({ title }) {
  return (
    <div className={styles.dashboardSectionHeader}>
      <h3>{title}</h3>
    </div>
  )
}
