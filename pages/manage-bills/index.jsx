import DashboardLayout from '../../layouts/dashboard-layout'
import DashboardSectionHeader from '../../design-system/dashboard-section-header'
import BillSettingsPanel from '../../components/bill-settings-panel'

export default function Settings() {
  const myBill = {
    name: 'Rent',
    billpayURL: 'https://www.rentpayment.com/pay/login.html',
    dueDate: 1,
    frequency: 'monthly',
    totalDue: 1050,
    paid: true,
  };

  return (
    <DashboardLayout pageTitle="Manage Bills">
      <DashboardSectionHeader title="Manage Bills" />
      <BillSettingsPanel bill={myBill}/>
    </DashboardLayout>
  );
}
