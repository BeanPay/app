import DashboardLayout from '../../layouts/dashboard-layout'
import DashboardPanel from '../../design-system/dashboard-panel'

import PopupMenu from '../../components/popup-menu'
import { faExternalLinkAlt, faReceipt } from '@fortawesome/free-solid-svg-icons'

export default function Settings() {
  return (
    <DashboardLayout pageTitle="Manage Bills">
      <DashboardPanel title="Some Settings" minRowWeight={100}>
        <PopupMenu
          items={[
            {
              text: "Pay Bill",
              onClick: () => console.log("Pay Bill Clicked"),
              icon: faExternalLinkAlt,
            },
            {
              text: "Mark as Paid",
              onClick: () => console.log("Mark as Paid Clicked"),
              icon: faReceipt,
            }
          ]}
        />
      </DashboardPanel>
    </DashboardLayout>
  );
}
