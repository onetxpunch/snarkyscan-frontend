import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import { ListQuery as ListQueryT } from "../../__generated__/ListQuery.graphql";

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
    <div className={`bg-slate-300 hover:bg-slate-200 rounded-lg shadow-xl p-4`}>
      <div className="text-3xl font-bold">{x?.blockHeight} </div>
      <div>{x?.dateTime}</div>
      <div>Fees: {x?.snarkFees}</div>
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
