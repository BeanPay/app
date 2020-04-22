import DashboardLayout from '../../layouts/dashboard-layout'
import DashboardPanel from '../../design-system/dashboard-panel'

export default function Settings() {
  return (
    <DashboardLayout pageTitle="Manage Bills">
      <DashboardPanel title="Some Settings" minRowWeight={100}>
        <h1>Wow.</h1>
      </DashboardPanel>
    </DashboardLayout>
  );
}
