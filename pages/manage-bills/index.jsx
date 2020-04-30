import DashboardLayout from '../../layouts/dashboard-layout'
import DashboardPanel from '../../design-system/dashboard-panel'
import DashboardSectionHeader from '../../design-system/dashboard-section-header'

export default function Settings() {
  return (
    <DashboardLayout pageTitle="Manage Bills">
      <DashboardSectionHeader title="Manage Bills" />
      <DashboardPanel title="Some Settings" minRowWeight={50}>
        <h1>Hello settings</h1>
      </DashboardPanel>
    </DashboardLayout>
  );
}
