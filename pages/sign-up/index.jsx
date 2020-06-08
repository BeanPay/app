import { useState } from 'react';
import { useRouter } from 'next/router'
import apiClient from '../../util/api-client'
import Link from 'next/link'
import BaseLayout from '../../layouts/base-layout'
import LoginContainer from '../../components/login-container'
import { Formik } from "formik";
import { Form, Field, ErrorMessage } from '../../design-system/forms'
import Button from '../../design-system/button'

export default function SignUp() {
  const router = useRouter()
  const [submissionError, setSubmissionError] = useState(null);

  const submissionHandler = (values) => {
    setSubmissionError(null)
    if(values.password !== values.confirmPassword) {
      setSubmissionError("The password confirmation does not match")
      return null
    }
    // Register the user
    return apiClient.register(values.email, values.password)
      .then(response => {
        if (response.status_code !== 200) {
          if(response.status_code == 400) {
            throw new Error(response.error_details[0])
          }
          if(response.status_code == 409) {
            throw new Error("Email address already in use")
          }
          throw new Error("Something went wrong")
        }
        // Sign the user in for the first time
        return apiClient.login(values.email, values.password)
      })
      .then(response => {
        if (response.status_code !== 200) {
          throw new Error("Something went wrong.")
        }
        router.push("/")
      })
      .catch(error => {
        setSubmissionError(error.message)
      })
  }

  return (
    <BaseLayout pageTitle="Sign up" authExpected={false}>
      <LoginContainer
        title="Sign up"
        description="Never miss a bill again."
        footnote={(
          <p>Already have an account? <Link href="/sign-in"><a>Sign in</a></Link></p>
        )}
      >
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          onSubmit={submissionHandler}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field label="Email" type="email" required />
              <Field label="Password" type="password" required />
              <Field label="Confirm Password" type="password" required />
              {submissionError && <ErrorMessage message={submissionError} />}
              <Button type="submit" size="large" text="Create Account" color="green" disabled={isSubmitting}/>
            </Form>
          )}
        </Formik>
      </LoginContainer>
    </BaseLayout>
  )
}
