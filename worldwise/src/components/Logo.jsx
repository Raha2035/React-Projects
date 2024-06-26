import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/" className={styles.logoBox}>
      <img src="/icon.png" alt="WorldWise logo" className={styles.logo} />
      <span className={styles.brand}>WorldWise</span>
    </Link>
  );
}

export default Logo;
