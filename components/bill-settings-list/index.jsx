import { useState } from 'react';
import BillSettingsPanel from './bill-settings-panel';
import AddNewBill from './add-new-bill';
import { NewBillFormModal } from '../../components/fullscreen-modals/bill-form-modal';

export default function BillSettingsList({ bills }) {
  const [newBillModalOpen, setNewBillModalOpen] = useState(false);
  return (
    <>
      {bills.map(bill => (
        <BillSettingsPanel key={bill.id} bill={bill} />
      ))}
      <AddNewBill onClick={() => setNewBillModalOpen(true)}/>

      <NewBillFormModal
        isOpen={newBillModalOpen}
        onClose={() => setNewBillModalOpen(false)}
      />
    </>
  )
}
