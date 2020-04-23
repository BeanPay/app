import styles from './PopupPanel.module.css'

function PopupPanel({style, popperAttributes}, ref) {
  return (
    <div
      className={styles.popupPanel}
      {...popperAttributes}
      style={style}
      ref={ref}
    >
      <p>Hello Calendar Day Popup</p>
    </div>
  )
}

export default React.forwardRef(PopupPanel)
