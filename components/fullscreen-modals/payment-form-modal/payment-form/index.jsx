import styles from './PaymentForm.module.css';
import Button from '../../../../design-system/button';
import { Form, Field, SelectField } from '../../../../design-system/forms';

export default function PaymentForm({ bill }) {
  return (
    <Form
      className={styles.paymentForm}
      initialValues={{
        totalAmountPaid: bill.totalDue,
      }}
      onSubmit={async values => {
        console.log(values);
      }}
    >
      <Field label="Total Amount Paid" type="number" min="0.00" step="0.01" required />
      <Button type="submit" size="large" text="Mark as Paid" color="green"/>
    </Form>
  );
}
