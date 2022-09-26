import "styles/globals.scss";
import type { AppProps } from "next/app";
import MetaHead from "components/global/metahead";
import Header from "components/global/header";
import PageLoader from "components/global/pageloader";
import Footer from "components/global/footer";
import { useRouter } from "next/router";
import { PropsWithChildren, useContext, useState } from "react";
import { pageLoaderCtx, PageLoaderProvider } from "utils/helpers.context";
import { NextPageReturnProps } from "utils/types/types.pages";

function Layout(props: PropsWithChildren<NextPageReturnProps>) {
  const router = useRouter();
  const { state: loading, update: setLoading } = useContext(pageLoaderCtx);

  return (
    <div>
      {props.header && <MetaHead header={props.header} />}
      <main className={`wrapper`}>
        <Header darkHeader={props.darkHeader} />
        <PageLoader loading={loading} color="primary" />
        {props.children}
        <Footer />
      </main>
    </div>
  );
}

function MyApp({ Component, pageProps }: AppProps<NextPageReturnProps>) {
  return (
    <PageLoaderProvider>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </PageLoaderProvider>
  );
}

export default MyApp;
