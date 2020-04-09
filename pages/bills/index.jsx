import BasePageLayout from '../../layouts/base-page-layout'
import DashboardPanel from '../../design-system/dashboard-panel'
import BillpayMonth from '../../components/billpay-month'
import BillpayList from '../../components/billpay-list'
import BillpayMonthPanel from '../../components/billpay-month-panel'


export default function Bills() {
  return (
    <BasePageLayout pageSlug="bills">
      <BillpayMonthPanel
        month={3}
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

      <DashboardPanel title="April Bills" minRowWeight={50}>
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
        <BillpayList />
      </DashboardPanel>
    </BasePageLayout>
  );
}
