import { useEffect, useState } from 'react';
import apiClient from '../../util/api-client'
import BillSettingsPanel from './bill-settings-panel';
import AddNewBill from './add-new-bill';
import { NewBillFormModal } from '../../components/fullscreen-modals/bill-form-modal';

export default function BillSettingsList() {
  const [bills, setBills] = useState(null);
  const [newBillModalOpen, setNewBillModalOpen] = useState(false);

  // Some updateState functions to pass down to children
  const updateState = {
    billCreated: (bill) => setBills(bills.concat(bill)),
    billDeleted: (id) => setBills(bills.filter((bill) => bill.id != id)),
    billUpdated: (bill) => setBills(Object.assign([], bills, {[bills.findIndex(b => b.id === bill.id)]: bill}))
  }

  // Fetch the bills
  useEffect(() => {
    apiClient.authenticatedRequest(apiClient.getBills)
      .then((resp) => {
        if (resp.status_code == 200) {
          setBills(resp.result);
        }
      })
  }, [])

  // Render
  return (
    <>
      { bills &&
        <>
          {bills.map(bill => (
            <BillSettingsPanel updateState={updateState} key={bill.id} bill={bill} />
          ))}
          <AddNewBill onClick={() => setNewBillModalOpen(true)}/>
        </>
      }

      <NewBillFormModal
        isOpen={newBillModalOpen}
        updateState={updateState}
        onClose={() => setNewBillModalOpen(false)}
      />
    </>
  )
}
