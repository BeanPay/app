import styles from './SelectField.module.css';
import classNames from 'classnames';
import Field from '../field'

/*
 * A sugary wrapper around the <Field type="select">
 *
 * Note: 'type' is not a valid prop to this component, we are simply eating it
 * so it doesn't show up in ...restProps.
 */
export default function SelectField({className, options, type, ...restProps}) {
  return (
    <Field
      as="select"
      className={classNames(styles.selectField, className)}
      {...restProps}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Field>
  )
}
