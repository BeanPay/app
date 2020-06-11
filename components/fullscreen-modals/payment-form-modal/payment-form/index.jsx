import styles from './PaymentForm.module.css';
import Button from '../../../../design-system/button';
import { Formik } from "formik";
import { Form, Field, SelectField } from '../../../../design-system/forms';
import apiClient from '../../../../util/api-client'

export default function PaymentForm({ bill, updateState }) {
  return (
    <Formik
      initialValues={{ totalAmountPaid: bill.estimated_total_due }}
      onSubmit={(values) => {
        apiClient.authenticatedRequest(apiClient.createPayment(bill.id, bill.due_date, values.totalAmountPaid))
          .then((resp) => {
            if(resp.status_code === 200) {
              updateState.paymentCreated(resp.result)
            }
          })
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field label="Total Amount Paid" type="number" min="0.00" step="0.01" required />
          <Button type="submit" size="large" text="Mark as Paid" color="green" disabled={isSubmitting}/>
        </Form>
      )}
    </Formik>
  );
}
