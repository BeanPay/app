import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import BaseLayout from '../../layouts/base-layout'
import LoginContainer from '../../components/login-container'
import { Formik } from "formik";
import { Form, Field, ErrorMessage } from '../../design-system/forms'
import Button from '../../design-system/button'
import apiClient from '../../util/api-client'
import ensureLoggedOut from '../../hooks/ensure-logged-out'

export default function SignIn() {
  const router = useRouter()
  const [submissionError, setSubmissionError] = useState(null);
  useEffect(ensureLoggedOut(router))

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
                  setSubmissionError("Invalid email and password combination")
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
