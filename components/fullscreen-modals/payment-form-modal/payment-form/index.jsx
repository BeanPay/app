import styles from './PaymentForm.module.css';
import Button from '../../../../design-system/button';
import { Formik } from "formik";
import { Form, Field, SelectField } from '../../../../design-system/forms';

export default function PaymentForm({ bill }) {
  return (
    <Formik
      initialValues={{ totalAmountPaid: bill.estimated_total_due }}
      onSubmit={(values) => {
        console.log(values)
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
