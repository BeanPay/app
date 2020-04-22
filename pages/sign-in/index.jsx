import Link from 'next/link'
import { useRouter } from 'next/router'
import { Formik, Field, Form } from "formik";
import BaseLayout from '../../layouts/base-layout'
import LoginContainer from '../../components/login-container'
import Button from '../../design-system/button'

export default function SignUp() {
  const router = useRouter()
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
          onSubmit={async values => {
            await new Promise(resolve => setTimeout(resolve, 500));
            router.push("/bills")
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
      </LoginContainer>
    </BaseLayout>
  )
}
