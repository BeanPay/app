import DashboardLayout from '../../layouts/dashboard-layout'
import DashboardSectionHeader from '../../design-system/dashboard-section-header'
import BillOverviewPanel from '../../components/bill-overview-panel'

export default function Settings() {
  return (
    <DashboardLayout pageTitle="Manage Bills">
      <DashboardSectionHeader title="Manage Bills" />
      <BillOverviewPanel />
      <BillOverviewPanel />
      <BillOverviewPanel />
    </DashboardLayout>
  );
}
