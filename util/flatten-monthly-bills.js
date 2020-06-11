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

// filterBills takes a list of bills and returns only the ones that
// are due during the specified month/year
function filterBills(bills, month, year) {
  const currentMonth = new Date(`${year}-${month}-1`);
  return bills.filter((bill) => {
    const firstDueMonth = new Date(`${bill.first_due_date.substring(0, 7)}-1`)
    var monthsDifference = (currentMonth.getFullYear()*12 + currentMonth.getMonth()) - (firstDueMonth.getFullYear()*12 + firstDueMonth.getMonth());
    if(monthsDifference < 0) {
      return false
    }
    switch (bill.frequency) {
      case 'monthly':
        return true;
      case 'quarterly':
        return monthsDifference % 3 === 0;
      case 'biannually':
        return monthsDifference % 6 === 0;
      case 'annually':
        return monthsDifference % 12 === 0;
    }
    return false
  })
}
