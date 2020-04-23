import moduleStyles from './PopperExample.module.css'
import PopupPanel from '../popup-panel'
import { usePopper } from 'react-popper';

export default function Example() {
  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'auto',
  });

  return (
    <>
      <button type="button" ref={setReferenceElement}>
        Reference element
      </button>

      <PopupPanel ref={setPopperElement} style={styles.popper} popperAttributes={attributes.popper} />
    </>
  );
};
