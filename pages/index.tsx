/* eslint-disable @next/next/no-img-element */
import { WorkCard } from "components/cards/workcard";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ComponentProps, PropsWithChildren } from "react";
import { FRONTEND_BASE_URL } from "utils/data.constants";
import { PROJECT_HOME } from "utils/data.works";
import { useImageFade, useNextImageImageFade } from "utils/helpers.hooks";
import styles from "../styles/home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top_screen}>
        <Image
          src="/background_parallax_2.png"
          alt=""
          layout="fill"
          {...useNextImageImageFade(styles.fill_banner)}
        />
        <div className={styles.top_infobox}>
          <div className={styles.top_bar}></div>
          <div className={styles.infobox}>
            <h1 className={styles.title}>
              Subhakar
              <br />
              Tikkireddy
            </h1>
            <h6 className={styles.subtitle}>Front-end Developer</h6>
          </div>
        </div>
      </div>
      <div className={styles.grid}>
        {PROJECT_HOME.big_works.map((work, index) => (
          <div
            key={work.work_url}
            className={styles.col_bi}
            style={{ background: work.b_color }}
          >
            <WorkCard work={work} />
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const header = {
    title: `Subhakar Tikkireddy | Front-end Developer`,
    description: `A versatile developer with extensive experience in designing and 
    developing both web and mobile apps, with senior level experience in 
    React, Next.js, Typescript, React Native.`,
    url: `${FRONTEND_BASE_URL}`,
    robots: "index,follow",
    image: `${FRONTEND_BASE_URL}/images/banner.jpg`,
  };

  return {
    props: {
      header,
    },
  };
}

export default Home;
