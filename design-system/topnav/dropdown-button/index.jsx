/*
 * <DropdownButton
 *    logo={BeanPayLogo}
 *    onChange={ (opened) => { setShowMeMain(opened) }} />
 * */
export default function DropdownButton({ logo, onChange }) {
  [isOpen, setIsOpen] = useState(false);
  return (
    <div onClick={(e) => {
      onChange(!isOpen)
      setIsOpen(!isOpen)
    }}
    ></div>
  )
}
