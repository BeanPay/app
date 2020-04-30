import classNames from 'classnames'
import styles from './Panel.module.css'

export default function Panel({className, title, description, children}) {
  return (
    <div className={classNames(styles.panel, className)}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {children && (
        <div className={styles.content}>
          {children}
        </div>
      )}
    </div>
  )
}
