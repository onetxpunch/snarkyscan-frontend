import Image from "next/image";
import List from "@/components/List";
import Search from "@/components/Search";
import Overview from "@/components/Overview";

export default function Home() {
  return (
    <>
      <Search />
      <Overview />
      <List />
    </>
  );
}
