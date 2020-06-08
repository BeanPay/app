import { Form as FormikForm } from "formik";
import classNames from 'classnames';
import styles from './Form.module.css';

/*
 * Form is a light wrapper around a Formik form, which simply imports a CSS module.
 */
export default function Form({className, children, ...restProps}) {
  return(
    <FormikForm
      className={classNames(styles.form, className)}
      {...restProps}
    >
      {children}
    </FormikForm>
  )
}
