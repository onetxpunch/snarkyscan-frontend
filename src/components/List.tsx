import { DateTime } from "luxon";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import { ListQuery as ListQueryT } from "../../__generated__/ListQuery.graphql";
import { VscExtensions } from "@react-icons/all-files/vsc/VscExtensions";

const ListQuery = graphql`
  query ListQuery {
    blocks(sortBy: BLOCKHEIGHT_DESC, query: { canonical: true }) {
      snarkFees
      blockHeight
      creatorAccount {
        publicKey
      }
      dateTime
      canonical
      creator
      receivedTime
      stateHash
      stateHashField
      txFees
      winnerAccount {
        publicKey
      }
    }
  }
`;

const Card = ({ x, i }) => {
  return (
    <div
      className={`bg-slate-100 hover:bg-emerald-100 border-[1px] border-emerald-400 rounded-lg shadow-xl p-4`}
    >
      <div className="flex gap-2 text-3xl font-bold text-emerald-600">
        <VscExtensions /> {x?.blockHeight}{" "}
      </div>
      <div>{DateTime.fromISO(x?.dateTime).toRelative()}</div>
      <div>Miner: {x?.creator.slice(0, 6) + "..." + x?.creator.slice(-6)}</div>
      <div>Snark Rewards: {x?.snarkFees} MINA</div>
    </div>
  );
};

const List = () => {
  const data = useLazyLoadQuery<ListQueryT>(ListQuery, {});
  return (
    <div className="flex flex-col gap-3">
      <div className="text-xl font-semibold">Latest blocks</div>
      {data.blocks.map((x, i) => {
        return <Card x={x} key={`${x?.creator}${i}`} />;
      })}
    </div>
  );
};

export default List;
