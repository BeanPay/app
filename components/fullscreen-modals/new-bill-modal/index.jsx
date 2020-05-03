import styles from './NewBillModal.module.css';
import FullscreenModal from '../../../design-system/fullscreen-modal'
import Button from '../../../design-system/button';
import { Form, Field, SelectField } from '../../../design-system/forms';

function NewBillForm() {
  return (
    <Form
      initialValues={{
        billName: "",
        billPayURL: "",
        frequency: "monthly",
        firstDueDate: "",
        estimatedTotalDue: "",
      }}
      className={styles.newBillModalForm}
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
      <Button type="submit" size="large" text="Create Bill" color="green"/>
    </Form>
  )
}

export default function NewBillModal({ isOpen, onClose }) {
  return (
    <FullscreenModal className={styles.newBillModal} title="New Bill" isOpen={isOpen} onClose={onClose}>
      <NewBillForm />
    </FullscreenModal>
  )
}
