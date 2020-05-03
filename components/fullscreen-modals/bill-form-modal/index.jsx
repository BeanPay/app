import BillForm from './bill-form';
import FullscreenModal from '../../../design-system/fullscreen-modal'

function NewBillFormModal({ isOpen, onClose }) {
  return (
    <FullscreenModal title="New Bill" isOpen={isOpen} onClose={onClose}>
      <BillForm
        newBill={true}
        initialValues={{
          billName: "",
          billPayURL: "",
          frequency: "monthly",
          firstDueDate: "",
          estimatedTotalDue: "",
        }}
      />
    </FullscreenModal>
  )
}

function UpdateBillFormModal({ bill, isOpen, onClose }) {
  return (
    <FullscreenModal title="New Bill" isOpen={isOpen} onClose={onClose}>
      <BillForm
        newBill={false}
        initialValues={{
          billName: "",
          billPayURL: "",
          frequency: "monthly",
          firstDueDate: "",
          estimatedTotalDue: "",
        }}
      />
    </FullscreenModal>
  )
}

export {
  NewBillFormModal,
  UpdateBillFormModal,
}
