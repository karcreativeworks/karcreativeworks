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
import {
  ComponentProps,
  PropsWithChildren,
  useContext,
  useEffect,
} from "react";
import { FRONTEND_BASE_URL } from "utils/data.constants";
import { PROJECT_PAGES, TYPE_PROJECT_PAGE } from "utils/data.works";
import { useImageFade, useNextImageImageFade } from "utils/helpers.hooks";
import { NextPageReturnProps, PageHeader } from "utils/types/types.pages";
import styles from "styles/project.module.scss";
import { appCtx, useAppContext } from "utils/helpers.context";

const ProjectPage: NextPage<NextPageReturnProps> = ({
  project,
  darkHeader,
}) => {
  const { sendPayload } = useAppContext(appCtx);
  useEffect(() => {
    sendPayload("darkHeader", darkHeader);
  }, [darkHeader, sendPayload]);
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
        />
        <div className={styles.details_container}>
          {project?.logo_url && (
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
              />
            </a>
          )}
          {project && (
            <div
              className={`${styles.details_infobox} ${
                "lightBackground" in project && styles.dark
              }`}
            >
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
          )}
        </div>
      </div>
      <div id="roles-tab" className={styles.section_roles}>
        <div className={styles.roles}>
          <p className={styles.heading}>My role</p>
          {project?.roles.map((role) => (
            <p key={role} className={styles.sub}>
              {role}
            </p>
          ))}
        </div>
        <div className={styles.roles}>
          <p className={styles.heading}>Tools used</p>
          {project?.skills.map((skill) => (
            <p key={skill} className={styles.sub}>
              {skill}
            </p>
          ))}
        </div>
        <div className={styles.roles}>
          <p className={styles.heading}>{project?.time_title}</p>
          <p className={styles.sub}>{project?.time_subtitle}</p>
        </div>
      </div>

      <div id="paras-tab" className={`page_container`}>
        {project?.paragraphs?.map((para, index) => (
          <div key={para.title} className={`page_content ${styles.parabox}`}>
            {"title" in para && (
              <div className={styles.para_infobox}>
                <h1 className={styles.para_title}>{para.title}</h1>
                <p className={styles.para_descr}>{para.description}</p>
                <p className={styles.para_subtitle}>{para.subtitle}</p>
                {"bullets" in para && (
                  <div className={styles.para_bulletlist}>
                    {para.bullets?.map((bullet) => (
                      <p
                        key={bullet.substring(0, 8)}
                        className={styles.para_bullet}
                      >
                        <span className={styles.para_cirlce}></span> {bullet}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}
            <div className={styles.para_imagebox}>
              {"image_url" in para && (
                <img
                  className={styles.para_image}
                  src={para.image_url || "/logo_icon.svg"}
                  alt=""
                />
              )}
              {"box_urls" in para &&
                para?.box_urls?.map((box_url) => {
                  return box_url.indexOf(".mp4") > -1 ? (
                    <video
                      width="100%"
                      height="100%"
                      autoPlay
                      muted
                      loop
                      className={styles.para_box_image}
                      preload="auto"
                      src={box_url}
                    ></video>
                  ) : (
                    <img
                      key={box_url}
                      className={styles.para_box_image}
                      src={box_url || "/logo_icon.svg"}
                      alt=""
                    />
                  );
                })}
              {"video_url" in para && (
                <video
                  width="100%"
                  height="100%"
                  autoPlay
                  muted
                  loop
                  className="auto-size"
                  preload="auto"
                  src={para?.video_url}
                ></video>
              )}
            </div>
          </div>
        ))}
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
      darkHeader: "darkHeader" in project,
    },
  };
}

export async function getStaticPaths() {
  const params: any = [];
  PROJECT_PAGES.forEach((p) => {
    params.push({ params: { project_id: p._id } });
  });
  return {
    paths: params,
    fallback: false, // can also be true or 'blocking'
  };
}

export default ProjectPage;
