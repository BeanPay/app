import classNames from 'classnames'
import styles from './DashboardPanel.module.css'

export default function DashboardPanel({title, children, minRowWeight}) {
  var minRowWeightClass = styles.fullWidth;
  switch (minRowWeight) {
    case 100:
      minRowWeightClass = styles.fullWidth;
      break;
    case 50:
      minRowWeightClass = styles.halfWidth;
      break;
    case 33:
      minRowWeightClass = styles.thirdWidth;
      break;
    case 25:
      minRowWeightClass = styles.quarterWidth;
      break;
  }
  return (
    <div className={classNames(styles.dashboardPanel, minRowWeightClass)}>
      <div className={styles.header}>
        <h3>{title}</h3>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
