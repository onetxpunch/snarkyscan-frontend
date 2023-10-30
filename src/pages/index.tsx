import Image from "next/image";
import List from "@/components/List";
import Search from "@/components/Search";
import Overview from "@/components/Overview";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Snarkyscan | Open source Mina blockchain explorer"
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico?v=1",
          },
        ]}
      />
      <Search />
      <Overview />
      <List />
    </>
  );
}
