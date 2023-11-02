import Image from "next/image";
import List from "@/components/List";
import Search from "@/components/Search";
import Overview from "@/components/Overview";
import { NextSeo } from "next-seo";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { CoinGeckoClient } from "coingecko-api-v3";

export default function Home({ price }: { price? }) {
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
      <Overview price={price} />
      <List />
    </>
  );
}

export const getServerSideProps = async (context) => {
  try {
    const client = new CoinGeckoClient({
      timeout: 10000,
      autoRetry: true,
    });

    const price = await client.simplePrice({
      ids: "mina-protocol",
      vs_currencies: "usd",
      include_market_cap: true,
    });
    return { props: { price } };
  } catch (err) {
    return { props: {} };
  }
};