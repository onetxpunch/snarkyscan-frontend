import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="bg-slate-50" lang="en">
      <Head />
      <body>
        <Nav />
        <main
          className={`flex min-h-screen container mx-auto flex-col items-center justify-between`}
        >
          <Main />
        </main>
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
