import DashboardLayout from '../../layouts/dashboard-layout'
import BillpayMonthPanel from '../../components/billpay-month-panel'

export default function Bills() {
  return (
    <DashboardLayout pageTitle="Bills">
      <BillpayMonthPanel
        month={4}
        year={2020}
        bills={[
          {
            name: 'Rent',
            billpayURL: 'https://www.rentpayment.com/pay/login.html',
            dueDate: 1,
            totalDue: 1050,
            paid: true,
          },
          {
            name: 'Waste Management',
            billpayURL: 'https://www.wm.com/us/en/mywm/my-payment/verify',
            dueDate: 5,
            totalDue: 24,
            paid: false,
          },
          {
            name: 'PSE&G',
            billpayURL: 'https://nj.pseg.com/',
            dueDate: 15,
            totalDue: 130,
            paid: false,
          },
          {
            name: 'Chase Sapphire',
            billpayURL: 'https://nj.pseg.com/',
            dueDate: 23,
            totalDue: 421,
            paid: false,
          },
          {
            name: 'Water Bill',
            billpayURL: 'https://wss.amwater.com/selfservice-web/login.do',
            dueDate: 27,
            totalDue: 37,
            paid: false,
          },
        ]}
      />
    </DashboardLayout>
  );
}
