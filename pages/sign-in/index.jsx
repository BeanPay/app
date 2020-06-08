import { useState } from 'react';
import { useRouter } from 'next/router'
import apiClient from '../../util/api-client'
import Link from 'next/link'
import BaseLayout from '../../layouts/base-layout'
import LoginContainer from '../../components/login-container'
import { Formik } from "formik";
import { Form, Field, ErrorMessage } from '../../design-system/forms'
import Button from '../../design-system/button'

export default function SignIn() {
  const router = useRouter()
  const [submissionError, setSubmissionError] = useState(null);

  const submissionHandler = (values) => {
    setSubmissionError(null)
    return apiClient.login(values.email, values.password)
      .then(response => {
        if (response.status_code !== 200) {
          throw new Error("Invalid email and password combination")
        }
        router.push("/")
      })
      .catch(error => {
        setSubmissionError(error.message)
      })
  }

  return (
    <BaseLayout pageTitle="Sign in" authExpected={false}>
      <LoginContainer
        title="Welcome back"
        description="Sign in to continue."
        footnote={(
          <p>Don&apos;t have an account? <Link href="/sign-up"><a>Sign up</a></Link></p>
        )}
      >
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={submissionHandler}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field label="Email" type="email" required />
              <Field label="Password" type="password" required />
              {submissionError && <ErrorMessage message={submissionError} />}
              <Button type="submit" size="large" text="Sign in" color="green" disabled={isSubmitting}/>
            </Form>
          )}
        </Formik>
      </LoginContainer>
    </BaseLayout>
  )
}
