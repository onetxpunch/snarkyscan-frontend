import List from "./List";
import Overview from "./Overview";
import Search from "./Search";

const Homepage = ({ price }) => {
  return (
    <div className="flex flex-col gap-8">
      <Search />
      <List />
      <Overview price={price} />
    </div>
  );
};

export default Homepage;
