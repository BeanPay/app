import classNames from 'classnames'
import styles from './Button.module.css'

export default function Button({color, text, onClick}) {
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
  return (
    <button className={classNames(styles.button, colorClass)} onClick={onClick}>
      {text}
    </button>
  )
}
