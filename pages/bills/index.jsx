import BasePageLayout from '../../layouts/base-page-layout'
import DashboardPanel from '../../design-system/dashboard-panel'

export default function Bills() {
  return (
    <BasePageLayout pageSlug="bills">
      <DashboardPanel title="Monthly Bills" minRowWeight={100}>
        <h1>Hello Bills</h1>
      </DashboardPanel>
    </BasePageLayout>
  );
}
