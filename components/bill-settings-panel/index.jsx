import styles from './BillSettingsPanel.module.css'
import DashboardPanel from '../../design-system/dashboard-panel'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import withOrdinalSuffix from '../../util/with-ordinal-suffix'

export default function BillSettingsPanel({ bill }) {
  return (
    <DashboardPanel
      className={styles.billSettingsPanel}
      title={bill.name}
      description={`$${bill.totalDue} due ${bill.frequency} on the ${withOrdinalSuffix(bill.dueDate)}`}
      menuItems={[
        {
          text: "Edit Bill",
          icon: faEdit,
          onClick: () => console.log(`TODO: Edit Bill '${bill.name}'`)
        },
        {
          text: "Delete Bill",
          icon: faTrash,
          onClick: () => console.log(`TODO: Delete Bill '${bill.name}'`)
        },
      ]}
      minRowWeight={33}
    />
  )
}
