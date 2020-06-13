import FullscreenModal from '../../../design-system/fullscreen-modal';
import PaymentForm from './payment-form';

export default function PaymentFormModal({ bill, isOpen, onClose, updateState }) {
  return (
    <FullscreenModal title={bill.name} isOpen={isOpen} onClose={onClose}>
      <PaymentForm bill={bill} updateState={updateState} />
    </FullscreenModal>
  )
}
