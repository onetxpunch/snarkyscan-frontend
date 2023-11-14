import Block from "@/components/Block";
import { NextSeo } from "next-seo";
import { Suspense } from "react";

const Home = (path) => {
  const blockHeight = Number(path[0]);
  return (
    <Suspense fallback={<></>}>
      <NextSeo
        title={`Snarkyscan | Block ${path[0]}`}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico?v=1",
          },
        ]}
      />
      {!isNaN(blockHeight) ? (
        <Block blockHeight={blockHeight} route={path[1]} />
      ) : (
        <>Not a block number</>
      )}
    </Suspense>
  );
};

export default Home;

export const getServerSideProps = async (context) => {
  return { props: { path: context.query.path } };
};
