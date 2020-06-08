import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import BaseLayout from '../../layouts/base-layout'
import LoginContainer from '../../components/login-container'
import { Formik } from "formik";
import { Form, Field, ErrorMessage } from '../../design-system/forms'
import Button from '../../design-system/button'
import apiClient from '../../util/api-client'

export default function SignIn() {
  const router = useRouter()
  const [submissionError, setSubmissionError] = useState(null);

  // Kick the user to the app if they are already logged in
  useEffect(() => {
    if(apiClient.isAuthenticated()) {
      router.push("/")
    } else {
      apiClient.refreshAuth()
        .then(response => {
          if (response.status_code == 200) {
            router.push("/")
          }
        })
    }
  });

  return (
    <BaseLayout pageTitle="Sign in">
      <LoginContainer
        title="Welcome back"
        description="Sign in to continue."
        footnote={(
          <p>Don&apos;t have an account? <Link href="/sign-up"><a>Sign up</a></Link></p>
        )}
      >
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            setSubmissionError(null)
            return apiClient.login(values.email, values.password)
              .then(response => {
                // Failed Login Attempt
                if (response.status_code !== 200) {
                  setSubmissionError("Invalid Email and Password Combination.")
                  return
                }

                // Successful Login
                router.push("/")
              })
          }}
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
