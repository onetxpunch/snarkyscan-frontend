import Address from "@/components/Address";
import Block from "@/components/Block";
import { CoinGeckoClient } from "coingecko-api-v3";
import { NextSeo } from "next-seo";
import { useRouter } from "next/compat/router";

const Home = ({ price, path }) => {
  // const router = useRouter();
  // const address = router?.query.path;
  console.log(price);
  return (
    <>
      <NextSeo
        title={`Snarkyscan | Address ${path && path[0]}`}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico?v=1",
          },
        ]}
      />
      {path && <Address address={path} price={price} />}
    </>
  );
};

export default Home;

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
    console.log(context);
    return {
      props: { price: price["mina-protocol"].usd, path: context.query.path },
    };
  } catch (err) {
    return { props: {} };
  }
};