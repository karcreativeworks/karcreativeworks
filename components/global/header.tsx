import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import progress_styles from "styles/common/progress.module.scss";
import styles from "components/global/header.module.scss";

function Header({}) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.header}>
      <Link href="/">
        <a className={`${styles.logo_font} ${!menuOpen ? styles.active : ""}`}>
          <span className={styles.logo_icon} />
        </a>
      </Link>
      <div className={`${styles.buttons} ${menuOpen ? styles.active : ""}`}>
        <Link href="/about">
          <a
            className={`${styles.button_font} ${
              router.pathname === "/about" && styles.open
            }`}
          >
            Background
          </a>
        </Link>
        <Link href="/inspiration">
          <a
            className={`${styles.button_font} ${
              router.pathname === "/inspiration" && styles.open
            }`}
          >
            Inspiration
          </a>
        </Link>
        <a
          href={"mailto:subhakartikkireddy@gmail.com"}
          className={`${styles.button_font}`}
        >
          Get in Touch.
        </a>
        <a
          className={`${styles.button_font} ${
            router.pathname === "/start" && styles.open
          }`}
        >
          Learn More
        </a>
      </div>
      <div onClick={() => setMenuOpen(!menuOpen)} className={`mobile-only`}>
        <span
          className={`${styles.menu_icon} ${
            !menuOpen ? styles.menu : styles.close
          } icon`}
        />
      </div>
    </div>
  );
}

export default Header;