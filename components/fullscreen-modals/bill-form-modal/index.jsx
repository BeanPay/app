import BillForm from './bill-form';
import FullscreenModal from '../../../design-system/fullscreen-modal'

function NewBillFormModal({ isOpen, onClose, billCreated, updateState }) {
  return (
    <FullscreenModal title="New Bill" isOpen={isOpen} onClose={onClose}>
      <BillForm
        newBill={true}
        onSubmitted={onClose}
        updateState={updateState}
        initialValues={{
          billName: "",
          paymentURL: "",
          frequency: "monthly",
          firstDueDate: "",
          estimatedTotalDue: "",
        }}
      />
    </FullscreenModal>
  )
}

function UpdateBillFormModal({ bill, isOpen, onClose, updateState }) {
  return (
    <FullscreenModal title={bill.name} isOpen={isOpen} onClose={onClose}>
      <BillForm
        newBill={false}
        onSubmitted={onClose}
        updateState={updateState}
        initialValues={{
          billID: bill.id,
          billName: bill.name,
          paymentURL: bill.payment_url,
          frequency: bill.frequency,
          firstDueDate: bill.first_due_date.slice(0, 10),
          estimatedTotalDue: bill.estimated_total_due,
        }}
      />
    </FullscreenModal>
  )
}

export {
  NewBillFormModal,
  UpdateBillFormModal,
}
