import Block from "@/components/Block";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { Suspense } from "react";

const Home = () => {
  const router = useRouter();
  console.log(router.query.path);
  if (!router.query.path) return <></>;
  const blockHeight = Number(router.query.path[0]);
  return (
    <Suspense fallback={<></>}>
      <NextSeo
        title={`Snarkyscan | Block ${router.query.path}`}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico?v=1",
          },
        ]}
      />
      {!isNaN(blockHeight) ? (
        <Block blockHeight={blockHeight} route={router.query.path[1]} />
      ) : (
        <>Not a block number</>
      )}
    </Suspense>
  );
};

export default Home;
