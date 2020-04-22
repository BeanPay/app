import BaseLayout from '../../layouts/base-layout'
import LoginContainer from '../../components/login-container'
import Button from '../../design-system/button'
import { Formik, Field, Form } from "formik";
import Link from 'next/link'

export default function SignUp() {
  return (
    <BaseLayout pageTitle="Sign up">
      <LoginContainer
        title="Sign up"
        description="Never miss a bill again."
        footnote={(
          <p>Already have an account? <Link href="/sign-in"><a>Sign in</a></Link></p>
        )}
      >
        <Formik
          initialValues={{ email: "", password: "", passwordConfirm: "" }}
          onSubmit={async values => {
            await new Promise(resolve => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" />
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" type="password" />
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <Field id="passwordConfirm" name="passwordConfirm" type="password" />
            <Button type="submit" size="large" text="Create Account" color="green"/>
          </Form>
        </Formik>
      </LoginContainer>
    </BaseLayout>
  )
}

