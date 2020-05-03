import styles from './BillSettingsPanel.module.css'
import { useState } from 'react';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import DashboardPanel from '../../../design-system/dashboard-panel'
import withOrdinalSuffix from '../../../util/with-ordinal-suffix'
import { UpdateBillFormModal } from '../../../components/fullscreen-modals/bill-form-modal';

export default function BillSettingsPanel({ bill }) {
  const [editBillModalOpen, setEditBillModalOpen] = useState(false);
  return (
    <>
      <DashboardPanel
        className={styles.billSettingsPanel}
        title={bill.name}
        description={`$${bill.estimatedTotalDue} due ${bill.frequency} on the ${withOrdinalSuffix(bill.dueDate)}`}
        menuItems={[
          {
            text: "Edit Bill",
            icon: faEdit,
            onClick: () => {setEditBillModalOpen(true)}
          },
          {
            text: "Delete Bill",
            icon: faTrash,
            onClick: () => console.log(`TODO: Delete Bill '${bill.name}'`)
          },
        ]}
        minRowWeight={33}
      />
      <UpdateBillFormModal
        bill={bill}
        isOpen={editBillModalOpen}
        onClose={() => setEditBillModalOpen(false)}
      />
    </>
  )
}
