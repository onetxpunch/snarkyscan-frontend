import Footer from "@/components/Footer";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="bg-slate-50" lang="en">
      <Head />
      <body>
        <main
          className={`flex min-h-screen w-full mx-auto flex-col items-center justify-between bg-gradient-to-br from-emerald-200 to-transparent`}
        >
          <Main />
        </main>
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
