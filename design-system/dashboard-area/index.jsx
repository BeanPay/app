import styles from './DashboardArea.module.css';

export default function DashboardArea({ children }) {
  return (
    <div className={styles.dashboardArea}>
      { children }
    </div>
  )
}
