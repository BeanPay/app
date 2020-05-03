import { Formik, Form as FormikForm } from "formik";
import classNames from 'classnames';
import styles from './Form.module.css';

/*
 * Form is a light wrapper around a Formik form, which provides some sugar:
 * an import of the CSS Module, and a flattening of the Formik/Form components.
 */
export default function Form({className, children, ...restProps}) {
  return(
    <Formik {...restProps}>
      <FormikForm className={classNames(styles.form, className)}>
        {children}
      </FormikForm>
    </Formik>
  )
}
