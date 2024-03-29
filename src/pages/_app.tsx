import { RelayEnvironmentProvider } from "react-relay";
import { initRelayEnvironment } from "../RelayEnvironment";
import { RecordSource } from "relay-runtime";
import { useMemo, useEffect } from "react";
import { RelayPageProps } from "../relay-types";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function App({
  Component,
  pageProps,
}: AppProps<RelayPageProps>) {
  const environment = useMemo(initRelayEnvironment, []);

  useEffect(() => {
    const store = environment.getStore();

    // Hydrate the store.
    store.publish(new RecordSource(pageProps.initialRecords));

    // Notify any existing subscribers.
    store.notify();
  }, [environment, pageProps.initialRecords]);

  return (
    <>
      <Nav />
      <RelayEnvironmentProvider environment={environment}>
        <div className="container flex-col items-center justify-between max-w-2xl p-8 mx-auto">
          <Component {...pageProps} />
        </div>
      </RelayEnvironmentProvider>
      {/* <Footer /> */}
    </>
  );
}
