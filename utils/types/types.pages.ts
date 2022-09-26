import { GetServerSidePropsResult, GetStaticPropsResult } from "next";
import { TYPE_PROJECT_HOME, TYPE_PROJECT_PAGE } from "utils/data.works";

export interface PageHeader{
    title: string,
    description: string,
    url: string,
    robots?: string,
    image?: string,
}

export interface NextPageReturnProps {
    header: PageHeader;
    project?: TYPE_PROJECT_PAGE,
    home?: TYPE_PROJECT_HOME,
    darkHeader?: boolean
}