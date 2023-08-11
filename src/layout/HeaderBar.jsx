import styles from '@/styles/HeaderBar.module.css';
import Heading from "@/components/Heading";

function HeaderBar() {
  return (
    <header className={styles.container}>
      <Heading />
    </header>
  )
}

export default HeaderBar;