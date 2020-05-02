import { useState } from 'react';
import BillSettingsPanel from './bill-settings-panel';
import AddNewBill from './add-new-bill';
import FullscreenModal from '../../design-system/fullscreen-modal'

export default function BillSettingsList({ bills }) {
  const [newBillModalOpen, setNewBillModalOpen] = useState(false);
  return (
    <>
      {bills.map(bill => (
        <BillSettingsPanel key={bill.name} bill={bill} />
      ))}
      <AddNewBill onClick={() => setNewBillModalOpen(true)}/>

      <FullscreenModal
        title="New Bill"
        isOpen={newBillModalOpen}
        onClose={() => setNewBillModalOpen(false)}
      >
        <p>This is the new bill form.</p>
      </FullscreenModal>
    </>
  )
}
