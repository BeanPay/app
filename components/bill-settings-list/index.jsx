import { useState } from 'react';
import BillSettingsPanel from './bill-settings-panel';
import AddNewBill from './add-new-bill';
import NewBillModal from '../../components/fullscreen-modals/new-bill-modal';

export default function BillSettingsList({ bills }) {
  const [newBillModalOpen, setNewBillModalOpen] = useState(false);
  return (
    <>
      {bills.map(bill => (
        <BillSettingsPanel key={bill.name} bill={bill} />
      ))}
      <AddNewBill onClick={() => setNewBillModalOpen(true)}/>

      <NewBillModal
        isOpen={newBillModalOpen}
        onClose={() => setNewBillModalOpen(false)}
      />
    </>
  )
}
