const bills = [
  {
    name: 'Mortgage',
    billpayURL: 'https://www.rentpayment.com/pay/login.html',
    frequency: 'monthly',
    firstDueDate: '4/1/2020',
    dueDate: 1,
    estimatedTotalDue: 800,
  },
  {
    name: 'Rent',
    billpayURL: 'https://www.rentpayment.com/pay/login.html',
    frequency: 'monthly',
    firstDueDate: '4/1/2020',
    dueDate: 1,
    estimatedTotalDue: 1050,
  },
  {
    name: 'Waste Management',
    billpayURL: 'https://www.wm.com/us/en/mywm/my-payment/verify',
    frequency: 'monthly',
    firstDueDate: '4/5/2020',
    dueDate: 5,
    estimatedTotalDue: 24,
  },
  {
    name: 'PSE&G',
    billpayURL: 'https://nj.pseg.com/',
    frequency: 'monthly',
    firstDueDate: '4/15/2020',
    dueDate: 15,
    estimatedTotalDue: 130,
  },
  {
    name: 'Chase Sapphire',
    billpayURL: 'https://nj.pseg.com/',
    frequency: 'monthly',
    firstDueDate: '4/23/2020',
    dueDate: 23,
    estimatedTotalDue: 421,
  },
  {
    name: 'Water Bill',
    billpayURL: 'https://wss.amwater.com/selfservice-web/login.do',
    frequency: 'quarterly',
    firstDueDate: '4/27/2020',
    dueDate: 27,
    estimatedTotalDue: 37,
  },
]

const monthlyBills = [
  {
    name: 'Mortgage',
    billpayURL: 'https://www.rentpayment.com/pay/login.html',
    dueDate: 1,
    totalDue: 800,
    paid: true,
  },

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
]

export {
  bills,
  monthlyBills,
}
