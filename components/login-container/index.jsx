import styles from './LoginContainer.module.css'
import Panel from '../../design-system/panel'

export default function LoginContainer({title, description, footnote, children}) {
  return (
    <div className={styles.loginContainer}>
      <img className={styles.logo} src="/logos/horizontal-lockup.svg" />
      <Panel className={styles.formPanel} title={title} description={description}>
        {children}
      </Panel>
      {footnote}
    </div>
  )
}
