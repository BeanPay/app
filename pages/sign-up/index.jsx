import styles from './SignupPage.module.css'
import Panel from '../../design-system/panel'
import Link from 'next/link'

export default function SignUp() {
  return (
    <div className={styles.signupPage}>
      <div className={styles.signupWrapper}>
        <img className={styles.logo} src="/logos/horizontal-lockup.svg" />
        <Panel
          className={styles.signupPanel}
          title="Sign up"
          description="Never miss a bill again."
        >
        </Panel>
        <p>Already have an account? <Link href="/sign-in">Sign in</Link></p>
      </div>
    </div>
  )
}
