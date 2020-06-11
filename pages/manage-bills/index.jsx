import DashboardLayout from '../../layouts/dashboard-layout'
import DashboardSectionHeader from '../../design-system/dashboard-section-header'
import BillSettingsList from '../../components/bill-settings-list'

export default function Settings() {
  return (
    <DashboardLayout pageTitle="Manage Bills">
      <DashboardSectionHeader title="Manage Bills" />
      <BillSettingsList />
    </DashboardLayout>
  );
}
