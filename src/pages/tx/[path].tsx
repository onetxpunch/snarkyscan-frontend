import Tx from "@/components/Tx";
import { NextSeo } from "next-seo";

const Home = ({ path }) => {
  return (
    <>
      <NextSeo
        title={`Snarkyscan | Transaction ${path}`}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico?v=1",
          },
        ]}
      />
      {path && <Tx tx={path} />}
    </>
  );
};

export default Home;

export const getServerSideProps = async (context) => {
  return { props: { path: context.query.path } };
};
