import styles from './AddNewBill.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function AddNewBill({ onClick }) {
  return (
    <div className={styles.addNewBill} onClick={onClick}>
      <div className={styles.textWrapper}>
        <h3>Add New Bill</h3>
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  )
}
