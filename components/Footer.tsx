import styles from "../styles/components/Footer.module.css";
import { BiCopyright } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bottom}>
        <div className={styles.name}>Rishabh Singh</div>
        <div className={styles.copyRight}>
          <BiCopyright />
          <span> all rights reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
