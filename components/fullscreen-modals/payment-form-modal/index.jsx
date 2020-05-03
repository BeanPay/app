import styles from './PaymentFormModal.module.css';
import FullscreenModal from '../../../design-system/fullscreen-modal';
import PaymentForm from './payment-form';

export default function PaymentFormModal({ bill, isOpen, onClose }) {
  return (
    <FullscreenModal className={styles.paymentFormModal} title={bill.name} isOpen={isOpen} onClose={onClose}>
      <PaymentForm bill={bill} />
    </FullscreenModal>
  )
}
