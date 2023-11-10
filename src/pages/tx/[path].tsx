import Tx from "@/components/Tx";
import { NextSeo } from "next-seo";
import { useRouter } from "next/compat/router";

const Home = () => {
  const router = useRouter();
  const tx = router?.query.path;
  return (
    <>
      <NextSeo
        title={`Snarkyscan | Transaction ${
          router?.query.path && router.query.path
        }`}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico?v=1",
          },
        ]}
      />
      {tx && <Tx tx={tx} />}
    </>
  );
};

export default Home;
