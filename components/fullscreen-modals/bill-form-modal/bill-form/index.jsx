import styles from './BillForm.module.css';
import Button from '../../../../design-system/button';
import { Form, Field, SelectField } from '../../../../design-system/forms';

export default function BillForm({ initialValues, newBill }) {
  return (
    <Form
      initialValues={initialValues}
      className={styles.billForm}
      onSubmit={async values => {
        console.log(values);
      }}
    >
      <div className={styles.fieldGrid}>
        <Field label="Bill Name" required />
        <Field label="Bill pay URL" type="url" required />
        <SelectField
          className={styles.frequencyField}
          label="Frequency"
          options={[
            { label: "Monthly", value: "monthly" },
            { label: "Quarterly", value: "quarterly" },
            { label: "Biannually", value: "biannually" },
            { label: "Annually", value: "annually" },
          ]}
          required
        />
        <Field label="First Due Date" type="date" className={styles.firstDueDateField} required />
        <Field
          className={styles.estimatedTotalField}
          label="Estimated Total Due"
          type="number" min="0.00" step="0.01"
          required
        />
      </div>
      { newBill ? (
        <Button type="submit" size="large" text="Create Bill" color="green"/>
      ) : (
        <Button type="submit" size="large" text="Update Bill" color="blue"/>
      ) }
    </Form>
  )
}
