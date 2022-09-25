/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import { useImageFade } from "utils/helpers.hooks";
import styles from "./card.module.scss";

export const WorkCard = ({ work }: { work: any }) => {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);
  const { style, onLoad } = useImageFade();
  return (
    <Link href={work.work_url}>
      <a
        href={work.work_url}
        style={{ backgroundColor: work.b_color }}
        className={`${styles.card_container} ${styles.hovering_card}`}
      >
        {render && (
          <img
            className={`${styles.card_img} ${styles.hover_fadeout}`}
            src={work.image_url}
            alt=""
            style={style}
            onLoad={onLoad}
          />
        )}
        <div className={`${styles.card_overlay} ${styles.hover_fadein}`}>
          <h1 className={styles.title}>{work.title}</h1>
          <div className={styles.chips_list}>
            {work.tags.map((tag?: string) => (
              <p className={styles.chip} key={tag}>
                {tag}
              </p>
            ))}
          </div>
        </div>
      </a>
    </Link>
  );
};
