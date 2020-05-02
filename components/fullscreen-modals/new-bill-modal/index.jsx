import FullscreenModal from '../../../design-system/fullscreen-modal'
import { Formik, Field, Form } from "formik";
import Button from '../../../design-system/button';

function NewBillForm() {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          router.push("/")
        }}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" />
          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" />
          <Button type="submit" size="large" text="Sign in" color="green"/>
        </Form>
      </Formik>
    </div>
  )
}

export default function NewBillModal({ isOpen, onClose }) {
  return (
    <FullscreenModal title="New Bill" isOpen={isOpen} onClose={onClose}>
      <NewBillForm />
    </FullscreenModal>
  )
}
