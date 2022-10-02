/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "components/global/footer.module.scss";

function Footer({}) {
  return (
    <div className={styles.container}>
      <div className={styles.section_contact}>
        <h1 className={styles.title}>Get in touch.</h1>
        <h6 className={styles.subtitle}>
          Want to discuss a project,collaborate or say hello? <br />
          <a className="" href="mailto:subhakartikkireddy@gmail.com">
            Drop me a line.
          </a>{" "}
          , I`&apos;d love to hear from you! {": )"}
        </h6>
      </div>
      <div className={styles.section_sitemap}>
        <div className={styles.grid_item}>
          <p className={styles.sitemap_subtitle}>
            <span className={styles.head}>Subhakar Tikkireddy</span>
            <span className={styles.sub}>© 2022, All Rights Reserved</span>
          </p>
        </div>
        <div className={styles.grid_item}>
          <p className={styles.sitemap_subtitle}>
            <span className={styles.head}>Contact</span>
            <a
              href="mailto:subhakartikkireddy@gmail.com"
              className={styles.link}
            >
              subhakartikkireddy@gmail.com
            </a>
          </p>
        </div>
        <div className={styles.grid_item}>
          <div className="d-flex justify-content-between align-items-start">
            <p className={styles.sitemap_subtitle}>
              <span className={styles.head}>Connect</span>
              <a
                href="https://github.com/karcreativeworks"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Github
              </a>
              <a
                href="https://dribbble.com/subhakartikkireddy"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Dribble
              </a>
              <a
                href="https://www.toptal.com/resume/subhakar-tikkireddy"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Toptal
              </a>
              <a
                href="https://www.linkedin.com/in/subhakar-tikkireddy-93a51833"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Linkedin
              </a>
              <a
                href="https://twitter.com/karlovesfilm"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Twitter
              </a>
            </p>
          </div>
        </div>
        <div className={styles.grid_item}>
          <Link href="/">
            <a className="diva">
              <img className={styles.logo} src="/logo_gradient.png" alt="" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
