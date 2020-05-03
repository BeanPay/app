import classNames from 'classnames';
import { Field as FormikField } from "formik";
import styles from './Field.module.css';
import Label from './label';

/*
 * Field is a light wrapper around a Formik field, which provides
 * some light sugar for ease of use.
 */
export default function Field({id, className, name, label, type="text", children, ...restProps }) {
  const fieldName = name ? name : camelize(label);
  const fieldID = id ? id : camelize(label + " Field");
  return (
    <div className={classNames(styles.fieldWrapper, className)}>
      <Label htmlFor={fieldID}>{label}</Label>
      <FormikField className={styles.field} id={fieldID} name={fieldName} type={type} {...restProps}>
        { children }
      </FormikField>
    </div>
  )
}

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}
