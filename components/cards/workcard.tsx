/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useImageFade } from "utils/helpers.hooks";
import styles from "./card.module.css";

export const WorkCard = ({ work }: { work: any }) => {
  return (
    <Link href={work.work_url}>
      <a href={work.work_url} className={styles.container}>
        <img
          className={styles.card_img}
          src={work.image_url}
          alt=""
          {...useImageFade()}
        />
      </a>
    </Link>
  );
};
