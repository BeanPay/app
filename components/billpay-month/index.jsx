import styles from './BillpayMonth.module.css'

export default function BillpayMonth() {
  const days = Array(30).fill({
    title: 'TODO',
  })
  return (
    <div className={styles.billpayMonth}>
      {days.map(day => (
        <div className={styles.day}></div>
      ))}
    </div>
  )
}
