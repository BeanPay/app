export default function flattenMonthlyBills(bills, payments, month, year) {
  var monthPayments = payments.filter((payment) => {
    return month === parseInt(payment.due_date.substring(5, 7))
  })
  return filterBills(bills, month, year)
    .map((bill) => {
      var matchingPayment = null;
      monthPayments.forEach(payment => {
        if(payment.bill_id === bill.id) {
          matchingPayment = payment
        }
      })
      return {
        id: bill.id,
        name: bill.name,
        payment_url: bill.payment_url,
        due_date: parseInt(bill.first_due_date.substring(8, 10)),
        estimated_total_due: bill.estimated_total_due,
        payment: matchingPayment,
      }
    }
  )
}

// filterBills returns only the bills that will be due during a specific month
function filterBills(bills, month, year) {
  // TODO, just hardcoding this for now, but this will need to be implemented
  // when not every bill appears every month
  return bills
}
