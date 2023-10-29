import Block from "@/components/Block";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const blockHeight = Number(router.query.path);
  return <>{!isNaN(blockHeight) && <Block blockHeight={blockHeight} />}</>;
};

export default Home;
