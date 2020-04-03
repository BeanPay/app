import BasePageLayout from '../../layouts/base-page-layout'
import DashboardPanel from '../../design-system/dashboard-panel'
import BillpayMonth from '../../components/billpay-month'

export default function Bills() {
  return (
    <BasePageLayout pageSlug="bills">
      <DashboardPanel title="Monthly Bills" minRowWeight={100}>
        <BillpayMonth />
      </DashboardPanel>
    </BasePageLayout>
  );
}
