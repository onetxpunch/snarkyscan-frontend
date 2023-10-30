import Address from "@/components/Address";
import Block from "@/components/Block";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const address = router.query.path;
  return (
    <>
      <NextSeo
        title={`Snarkyscan | Address ${router.query.path}`}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico?v=1",
          },
        ]}
      />
      {<Address address={address} />}
    </>
  );
};

export default Home;
