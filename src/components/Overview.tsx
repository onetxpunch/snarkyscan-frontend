import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
// import { ListQuery as ListQueryT } from "../../__generated__/ListQuery.graphql";

const OverviewQuery = graphql`
  query OverviewQuery {
    blocks(sortBy: BLOCKHEIGHT_DESC, query: { canonical: true }, limit: 1) {
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
const Overview = () => {
  const data = useLazyLoadQuery<any>(OverviewQuery, {});
  return (
    <div className="flex flex-col gap-3 p-4 my-4 shadow-xl rounded-xl bg-slate-200">
      <div>Mina price</div>
      <div>{data.blocks[0].blockHeight}</div>
      <div>Market cap</div>
      <div>{data.blocks[0].blockHeight}</div>
      <div>Last finalized block</div>
      <div>{data.blocks[0].blockHeight}</div>
    </div>
  );
};

export default Overview;
