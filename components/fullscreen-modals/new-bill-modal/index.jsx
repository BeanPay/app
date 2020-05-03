import FullscreenModal from '../../../design-system/fullscreen-modal'
import Button from '../../../design-system/button';
import { Form, Field, SelectField } from '../../../design-system/forms';

function NewBillForm() {
  return (
    <Form
      initialValues={{ email: "", password: "" }}
      onSubmit={async values => {
        console.log(values);
      }}
    >
      <Field label="Email" type="email" />
      <Field label="Password" type="password" />

      <SelectField
        label="Bill Due Date"
        options={[
          { label: "1st", value: 1 },
          { label: "2nd", value: 2 },
          { label: "3rd", value: 3 },
        ]}
      />

      <Button type="submit" size="large" text="Sign in" color="green"/>
    </Form>
  )
}

export default function NewBillModal({ isOpen, onClose }) {
  return (
    <FullscreenModal title="New Bill" isOpen={isOpen} onClose={onClose}>
      <NewBillForm />
    </FullscreenModal>
  )
}
