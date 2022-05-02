import { Container } from "@mui/material";
import { AppProps } from "next/app";
import React from "react";
import { StaticPropsContextProvider } from "~/lib/components/StaticPropsContextProvider";
import AppBar1 from "~/lib/_app/AppBar/AppBar1";

import { Footer } from "~/lib/_app/Footer/Footer";
import { Head } from "~/lib/_app/Head/Head";

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Container maxWidth="md">
        <Head />
        <StaticPropsContextProvider value={pageProps}>
          <AppBar1 />

          <Component {...pageProps} />
          <Footer />
        </StaticPropsContextProvider>
      </Container>
    </>
  );
};
