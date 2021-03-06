import styles from './Label.module.css';
import classNames from 'classnames';

/**
 * A light wrapper around the standard HTML label with the
 * purpose of applying our Label.module styling.
 *
 * This is only intended to be used directly from our Field wrapper,
 * as it automatically supports this system's strict usage of Labels.
 */
export default function Label({children, className, required, ...restProps}) {
  return (
    <label
      className={classNames(
        className,
        styles.label,
        { [styles.required]: required }
      )}
      {...restProps}
    >
      {children}
    </label>
  )
}
