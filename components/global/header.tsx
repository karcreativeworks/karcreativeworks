import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import progress_styles from "styles/common/progress.module.scss";
import styles from "components/global/header.module.scss";
import { NextPageReturnProps } from "utils/types/types.pages";

function Header({ darkHeader }: Omit<NextPageReturnProps, "header">) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkText, setDarkText] = useState(darkHeader);

  return (
    <div className={styles.header}>
      <Link href="/">
        <a className={`${styles.logo_font} ${!menuOpen ? styles.active : ""}`}>
          <span className={`${styles.logo_icon} ${darkText && styles.dark}`} />
        </a>
      </Link>
      <div className={`${styles.buttons} ${menuOpen ? styles.active : ""}`}>
        <Link href="/about">
          <a
            className={`${styles.button_font} ${
              router.pathname === "/about" && styles.open
            } ${darkText && styles.dark}`}
          >
            Background
          </a>
        </Link>
        <Link href="/inspiration">
          <a
            className={`${styles.button_font} ${
              router.pathname === "/inspiration" && styles.open
            } ${darkText && styles.dark}`}
          >
            Inspiration
          </a>
        </Link>
        <a
          href={"mailto:subhakartikkireddy@gmail.com"}
          className={`${styles.button_font} ${darkText && styles.dark}`}
        >
          Get in Touch.
        </a>
        <Link href="/">
          <a
            className={`${styles.button_font} ${
              router.pathname === "/start" && styles.open
            } ${darkText && styles.dark}`}
          >
            Projects
          </a>
        </Link>
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