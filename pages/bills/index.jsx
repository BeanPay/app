import BasePageLayout from '../../layouts/base-page-layout'
import DashboardPanel from '../../design-system/dashboard-panel'
import BillpayMonth from '../../components/billpay-month'

export default function Bills() {
  return (
    <BasePageLayout pageSlug="bills">
      <DashboardPanel title="Monthly Bills" minRowWeight={100}>
        <BillpayMonth
          month={4}
          year={2020}
          bills={[
            {
              name: 'Some bill',
              dueDate: 1,
              totalDue: 1000,
              paid: false,
            },
            {
              name: 'Some bill',
              dueDate: 3,
              totalDue: 1000,
              paid: true,
            },
            {
              name: 'Some bill',
              dueDate: 18,
              totalDue: 1000,
              paid: true,
            },
            {
              name: 'Some bill',
              dueDate: 22,
              totalDue: 1000,
              paid: false,
            },
            {
              name: 'other bill',
              dueDate: 24,
              totalDue: 120,
              paid: false,
            }
          ]}
        />
      </DashboardPanel>
    </BasePageLayout>
  );
}
