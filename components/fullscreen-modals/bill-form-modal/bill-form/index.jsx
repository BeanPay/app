import styles from './BillForm.module.css';
import Button from '../../../../design-system/button';
import { Formik } from "formik";
import { Form, Field, SelectField } from '../../../../design-system/forms';
import apiClient from '../../../../util/api-client'

export default function BillForm({ initialValues, newBill, onSubmitted, updateState }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async values => {
        if(newBill) {
          return apiClient.authenticatedRequest(apiClient.createBill(
            values.billName,
            values.paymentURL,
            values.frequency,
            values.estimatedTotalDue,
            values.firstDueDate,
          ))
            .then((res) => {
              if(res.status_code === 200) {
                updateState.billCreated(res.result)
                onSubmitted()
              }
            })
        } else {
          return apiClient.authenticatedRequest(apiClient.updateBill(
            values.billID,
            values.billName,
            values.paymentURL,
            values.frequency,
            values.estimatedTotalDue,
            values.firstDueDate,
          ))
            .then((res) => {
              if(res.status_code === 200) {
                updateState.billUpdated(res.result)
                onSubmitted()
              }
            })
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.billForm}>
          <div className={styles.fieldGrid}>
            <Field label="Bill ID" type="hidden" required />
            <Field label="Bill Name" required />
            <Field label="Payment URL" type="url" required />
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
            <Button type="submit" size="large" text="Create Bill" color="green" disabled={isSubmitting}/>
          ) : (
            <Button type="submit" size="large" text="Update Bill" color="blue" disabled={isSubmitting} />
          ) }
        </Form>
      )}
    </Formik>
  )
}
