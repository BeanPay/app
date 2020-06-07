import classNames from 'classnames'
import styles from './Button.module.css'

export default function Button({size, color, text, ...restProps}) {
  // Determine Color
  var colorClass = styles.blue;
  switch (color) {
    case "yellow":
      colorClass = styles.yellow;
      break;

    case "orange":
      colorClass = styles.orange;
      break;

    case "green":
      colorClass = styles.green;
      break;

    case "blue":
      colorClass = styles.blue;
      break;
  }

  // Determine Size
  var sizeClass = styles.sizeSmall
  switch (size) {
    case "small":
      sizeClass = styles.sizeSmall;
      break;

    case "large":
      sizeClass = styles.sizeLarge;
      break;
  }

  // Render
  return (
    <button
      className={classNames(
        styles.button,
        colorClass,
        sizeClass
      )}
      {...restProps}
    >
      {text}
    </button>
  )
}
