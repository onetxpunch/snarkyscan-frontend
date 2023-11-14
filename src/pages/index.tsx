import { NextSeo } from "next-seo";
import { CoinGeckoClient } from "coingecko-api-v3";
import Homepage from "@/components/HomePage/Home";

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
      <Homepage price={price} />
    </>
  );
}

export const getServerSideProps = async (context) => {
  try {
    const client = new CoinGeckoClient({
      timeout: 1500,
      autoRetry: false,
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
