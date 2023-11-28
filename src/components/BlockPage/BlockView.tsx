import Link from "next/link";
import Hint from "../Hint";
import { VscCheck } from "@react-icons/all-files/vsc/VscCheck";
import { DateTime } from "luxon";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "relay-runtime";
import { useState, useEffect } from "react";

const BlockViewQuery = graphql`
  query BlockViewQuery($blockHeight: Int!) {
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

const BlockView = ({ blockHeight, data }) => {
  const { block } = useLazyLoadQuery<any>(BlockViewQuery, { blockHeight });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="p-4 bg-white border-[1px] rounded-xl flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="w-48 text-xl font-semibold text-gray-800">
            Status:
          </span>
          <div className="text-green-600 p-2 border-[1px] border-green-600 bg-green-100 rounded flex gap-2 text-sm items-center">
            <VscCheck className="w-5 h-5 text-emerald-800" />{" "}
            <div>Finalized</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-48 text-xl font-semibold text-gray-800">
            Timestamp:
          </span>
          <div>
            {!isClient ? "" : DateTime.fromISO(block.dateTime).toRelative()} (
            {block.dateTime})
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-48 text-xl font-semibold text-gray-800">
            Fee Recipient:
          </span>{" "}
          <Link
            href={`/address/${block.winnerAccount.publicKey}`}
            className="text-emerald-700 visited:text-emerald-800"
          >
            {block.winnerAccount.publicKey.slice(0, 6)}...
            {block.winnerAccount.publicKey.slice(-6)}
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-48 text-xl font-semibold text-gray-800">
            Tx Fees:
          </span>{" "}
          <span>{block.txFees / 10 ** 9} MINA</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-48 text-xl font-semibold text-gray-800">
            Snark Worker Fees:
          </span>{" "}
          <span>{block.snarkFees / 10 ** 9} MINA</span>
        </div>
        {/* <div className="flex items-center gap-2">
          <span className="w-48 text-xl font-semibold text-gray-800">
            Transactions:
          </span>{" "}
          <span>{data.transactions.length} in this block</span>
        </div> */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-gray-800">
            State Hash:
          </span>
        </div>{" "}
        <div className="p-4 rounded border-[1px] border-slate-200 break-words bg-slate-100 font-mono">
          {block.stateHashField}
        </div>
      </div>
      <Hint
        text={`Blocks are bundles of transactions from different accounts that are committed to the blockchain.`}
      />
    </>
  );
};

export default BlockView;
