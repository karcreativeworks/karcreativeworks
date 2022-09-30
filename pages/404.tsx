/* eslint-disable @next/next/no-img-element */
import { WorkCard } from "components/cards/workcard";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  ComponentProps,
  PropsWithChildren,
  useContext,
  useEffect,
} from "react";
import { FRONTEND_BASE_URL } from "utils/data.constants";
import { PROJECT_HOME } from "utils/data.works";
import { useImageFade, useNextImageImageFade } from "utils/helpers.hooks";
import styles from "../styles/home.module.scss";
import { appCtx, AppProvider, useAppContext } from "utils/helpers.context";
import { NextPageReturnProps } from "utils/types/types.pages";

const Home: NextPage<NextPageReturnProps> = ({ darkHeader }) => {
  const { sendPayload } = useAppContext(appCtx);
  useEffect(() => {
    sendPayload("darkHeader", darkHeader);
  }, [darkHeader, sendPayload]);

  return (
    <div className={styles.container}>
      <div className={styles.section_top}>
        <Image
          src="/background_parallax_2.png"
          alt=""
          layout="fill"
          {...useNextImageImageFade(styles.fill_banner)}
        />
        <div className={styles.top_infobox}>
          <div className={styles.lineblue}></div>
          <div className={styles.infobox}>
            <h1 className={styles.title}>
              Error - 404 <br /> page is undefined
            </h1>
            <p className={styles.subtitle2}>
              The project you&apos;re looking for may be deleted or outdated.
              Please check the homepage to see my latest projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const header = {
    title: `404 - Got Lost`,
    description: ``,
    url: `${FRONTEND_BASE_URL}/404`,
    robots: "noindex,nofollow",
  };

  return {
    props: {
      header,
      darkHeader: false,
    },
  };
}

export default Home;
