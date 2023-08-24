import styles from './Switcher.module.css';
import { bool, string, oneOf } from 'prop-types';

function Switcher({
  on = false,
  onText = '',
  offText = '',
  label = '',
  size = 'sm', // sm, md, lg
  ...restProps
}) {
  return (
    <div className={styles.SwitcherWrapper}>
      <button
        type="button"
        className={`${styles.Switcher} ${styles[size]} ${
          on ? styles.on : ''
        }`.trim()}
        {...restProps}
      >
        <span className={styles.handle}>{on ? onText : offText}</span>
      </button>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

Switcher.propTypes = {
  on: bool,
  onText: string,
  offText: string,
  label: string,
  size: oneOf(['sm', 'md', 'lg']),
};

export default Switcher;
