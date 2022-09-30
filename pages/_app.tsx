import "styles/globals.scss";
import type { AppProps } from "next/app";
import MetaHead from "components/global/metahead";
import Header from "components/global/header";
import PageLoader from "components/global/pageloader";
import Footer from "components/global/footer";
import { useRouter } from "next/router";
import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { appCtx, AppProvider, useAppContext } from "utils/helpers.context";
import { NextPageReturnProps } from "utils/types/types.pages";
import { useRouteLoader } from "utils/helpers.hooks";

function Layout(props: PropsWithChildren<NextPageReturnProps>) {
  const router = useRouter();
  const { loading, darkHeader, sendPayload } = useAppContext(appCtx);
  useRouteLoader();

  return (
    <div>
      {props.header && <MetaHead header={props.header} />}
      <main className={`wrapper`}>
        <Header darkHeader={darkHeader} />
        <PageLoader loading={loading} color="primary" />
        {props.children}
        <Footer />
      </main>
    </div>
  );
}

function MyApp({ Component, pageProps }: AppProps<NextPageReturnProps>) {
  return (
    <AppProvider>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
