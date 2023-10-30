import { DateTime } from "luxon";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";

const BlockQuery = graphql`
  query BlockQuery($blockHeight: Int!) {
    block(query: { blockHeight: $blockHeight }) {
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

const Block = ({ blockHeight }: { blockHeight: number }) => {
  const { block } = useLazyLoadQuery<any>(BlockQuery, { blockHeight });
  return (
    <div>
      <h2 className="text-3xl">
        <span className="font-black">Block</span> #{block.blockHeight}
      </h2>
      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold text-gray-800">Status:</span>
        <div className="text-green-600 p-2 border-[1px] border-green-600 bg-green-100 w-20 rounded">
          Finalized
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold text-gray-800">Timestamp:</span>{" "}
        <div>{DateTime.fromISO(block.dateTime).toRelative()}</div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold text-gray-800">
          Fee Recipient:
        </span>{" "}
        <div>
          {block.winnerAccount.publicKey.slice(0, 6) +
            "..." +
            block.winnerAccount.publicKey.slice(-6)}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold text-gray-800">Tx Fees:</span>{" "}
        <span>{block.txFees}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold text-gray-800">Snark Fees:</span>{" "}
        <span>{block.snarkFees}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold text-gray-800">State Hash:</span>
        <div className="w-64 ">{block.stateHashField} bytes</div>
      </div>
    </div>
  );
};

export default Block;
