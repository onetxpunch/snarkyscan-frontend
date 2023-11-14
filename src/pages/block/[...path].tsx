import Block from "@/components/BlockPage/Block";
import { NextSeo } from "next-seo";
import { Suspense } from "react";

const Home = ({ path }) => {
  const blockHeight = Number(path[0]);

  return (
    <>
      <NextSeo
        title={`Snarkyscan | Block ${path[0]}`}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico?v=1",
          },
        ]}
      />
      <Suspense
        fallback={
          <img
            src="/snarkyscanicon.png"
            className="w-64 h-64 opacity-50 animate-pulse"
          />
        }
      >
        {!isNaN(blockHeight) ? (
          <Block blockHeight={blockHeight} route={path[1]} />
        ) : (
          <>Not a block number</>
        )}
      </Suspense>
    </>
  );
};

export default Home;

export const getServerSideProps = async (context) => {
  const blockHeight = Number(context.params.path[0]);
  if (isNaN(blockHeight)) {
    context.res.writeHead(307, { Location: "/" });
    context.res.end();
  }
  return { props: { path: context.params.path } };
};
