import Block from "@/components/Block";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const blockHeight = Number(router.query.path);
  return (
    <>
      <NextSeo
        title={`Snarkyscan | Block ${router.query.path}`}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico?v=1",
          },
        ]}
      />
      {!isNaN(blockHeight) && <Block blockHeight={blockHeight} />}
    </>
  );
};

export default Home;
