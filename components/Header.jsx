import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/components/Header.module.css";
import { FaHamburger } from "react-icons/fa";

const Header = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div
      className={`${styles.container} flex items-end justify-between pt-5 pb-1 mx-4`}
    >
      <div className={`${styles.logo}`}>RISH</div>
      <div className={`${styles.nav} mr-6`}>
        <div className={styles.ham}>
          <FaHamburger onClick={() => setOpened(!opened)} />
        </div>
          <ul className={`${styles.navList} shadow-lg  ${opened ? ""  : styles.hide}`}>
            <li className={styles.navItem}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/">
                <a>Projects</a>
              </Link>
            </li>
            <li className={`${styles.navItem} `}>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Header;
