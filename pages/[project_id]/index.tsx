/* eslint-disable @next/next/no-img-element */
import { WorkCard } from "components/cards/workcard";
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ComponentProps, PropsWithChildren, useEffect } from "react";
import { FRONTEND_BASE_URL } from "utils/data.constants";
import { PROJECT_PAGES, TYPE_PROJECT_PAGE } from "utils/data.works";
import { useImageFade, useNextImageImageFade } from "utils/helpers.hooks";
import { NextPageReturnProps, PageHeader } from "utils/types/types.pages";
import styles from "styles/project.module.scss";

const ProjectPage: NextPage<NextPageReturnProps> = ({ project }) => {
  useEffect(() => {
    console.log(
      "This website is build with stack : React, Next.js, Typescript."
    );
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.section_top}
        style={{ backgroundColor: project?.b_color }}
      >
        <img
          className={styles.img_header_bg}
          src={project?.header_image || "/background_parallax_2.png"}
          alt=""
          {...useImageFade()}
        />
      </div>
      <div id="details-tab" className={styles.section_details}>
        <img
          className={styles.img_details_bg}
          src={project?.background || "/background_parallax_2.png"}
          alt=""
          {...useImageFade()}
        />
        <div className={styles.details_container}>
          <a
            className={styles.logo_link}
            href={project?.redirect_link}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={styles.img_logo}
              src={project?.logo_url || "/logo_icon.svg"}
              alt=""
              {...useImageFade()}
            />
          </a>
          <div className={styles.details_infobox}>
            <h1 className={styles.details_title}>{project?.title}</h1>
            <p className={styles.details_descr}>{project?.description}</p>
            <span className={"border"} style={{ width: "100%" }}></span>
            <a
              className={`${styles.details_link} link`}
              href={project?.redirect_link}
              target="_blank"
              rel="noreferrer"
            >
              <span className={`${styles.icon_arrow} icon`}></span>{" "}
              {project?.redirect_title}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({
  params,
}: any): Promise<GetStaticPropsResult<NextPageReturnProps>> {
  let project: TYPE_PROJECT_PAGE | undefined;
  PROJECT_PAGES.forEach((p) => {
    if (p._id === params.project_id) {
      project = p;
    }
  });
  if (project == undefined) {
    return { notFound: true };
  }
  const header: PageHeader = {
    title: `${project.title} | ${project.subtitle}`,
    description: `${project.description}`,
    url: `${FRONTEND_BASE_URL}/${project._id}`,
    robots: "index,follow",
    image: `${project.header_image}`,
  };
  return {
    props: {
      header,
      project,
    },
  };
}

export async function getStaticPaths() {
  const params: any = [];
  PROJECT_PAGES.forEach((p) => {
    params.push({ params: { project_id: p._id } });
  });
  console.log(params);
  return {
    paths: params,
    fallback: false, // can also be true or 'blocking'
  };
}

export default ProjectPage;
