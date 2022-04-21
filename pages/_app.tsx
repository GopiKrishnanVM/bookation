import "../styles/globals.css";
import type { AppProps } from "next/app";
import DefaultLayoutComponent from "@/components/layout/default-layout";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.title = "Writer's Paradise";
  }, []);
  return (
    <DefaultLayoutComponent>
      <Component {...pageProps} />
    </DefaultLayoutComponent>
  );
}

export default MyApp;
