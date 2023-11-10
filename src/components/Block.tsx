import { DateTime } from "luxon";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import { VscCheck } from "@react-icons/all-files/vsc/VscCheck";
import Link from "next/link";
import { VscChevronLeft } from "@react-icons/all-files/vsc/VscChevronLeft";
import { VscChevronRight } from "@react-icons/all-files/vsc/VscChevronRight";
import Hint from "./Hint";
import { useRouter } from "next/router";
import { useState } from "react";
import TxRow from "./TxRow";

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

const BlockNav = ({ blockHeight }) => {
  const router = useRouter();
  return (
    <div className="flex gap-2">
      <Link
        href={`/block/${blockHeight}`}
        className={`p-2 rounded-lg text-xs bg-slate-50 hover:bg-slate-100 border-[1px] border-slate-200`}
      >
        Overview
      </Link>
      <Link
        href={`/block/${blockHeight}/txns`}
        className={`p-2 rounded-lg hover:bg-slate-100 text-xs bg-slate-50 border-[1px] border-slate-200`}
      >
        Transactions
      </Link>
    </div>
  );
};

const BlockOverview = ({ block }) => {
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
            {DateTime.fromISO(block.dateTime).toRelative()} ({block.dateTime})
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
            {block.winnerAccount.publicKey}
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
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-gray-800">
            State Hash:
          </span>
        </div>{" "}
        <div className="p-4 rounded border-[1px] border-slate-200 break-words bg-slate-100 font-mono">
          {block.stateHashField}
        </div>
      </div>
      <Hint text={`Blocks are ...`} />
    </>
  );
};

const BlockTxnListQuery = graphql`
  query BlockTxnListQuery($blockHeight: Int!) {
    transactions(
      query: { blockHeight: $blockHeight, canonical: true }
      sortBy: DATETIME_DESC
    ) {
      amount
      blockHeight
      canonical
      dateTime
      failureReason
      fee
      feeToken
      from
      hash
      id
      isDelegation
      kind
      memo
      nonce
      to
      toAccount {
        token
      }
      token
      fromAccount {
        token
      }
      feePayer {
        token
      }
    }
  }
`;

const TxnList = ({ block }) => {
  const data = useLazyLoadQuery<any>(BlockTxnListQuery, { blockHeight: block });

  const [minaBalance, setMinaBalance] = useState<number>();
  return (
    <div className="p-4 bg-white flex flex-col gap-3 border-slate-200 rounded-lg border-[1px]">
      <div className="text-lg ">
        A total of {data.transactions.length} transactions were found.
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between gap-4 font-semibold">
          <div>Transaction Hash</div>
          {/* <div>Action</div> */}
          <div>Block</div>
          <div>Age</div>
          <div>From</div>
          <div>To</div>
        </div>
        {/* <div>Value</div> */}
        {/* <div>Fee</div> */}
        {data?.transactions?.map((x) => (
          <TxRow key={x.hash} {...x} />
        ))}
      </div>
    </div>
  );
};

const Block = ({
  blockHeight,
  route,
}: {
  blockHeight: number;
  route?: string;
}) => {
  const { block } = useLazyLoadQuery<any>(BlockQuery, { blockHeight });
  return (
    <div className="flex flex-col gap-2">
      <h2 className="flex items-center gap-2 mb-4 text-3xl">
        <span className="font-black">Block</span> #{block.blockHeight}{" "}
        <div className="inline-flex gap-2">
          <Link href={`/block/${blockHeight - 1}`}>
            <VscChevronLeft className="bg-slate-200 text-slate-800 hover:text-emerald-800 rounded-lg border-[1px] border-slate-400 hover:bg-slate-100 cursor-pointer" />
          </Link>
          <Link href={`/block/${blockHeight + 1}`}>
            <VscChevronRight className="bg-slate-200 text-slate-800 hover:text-emerald-800 rounded-lg border-[1px] border-slate-400 hover:bg-slate-100 cursor-pointer" />
          </Link>
        </div>
      </h2>
      <BlockNav blockHeight={blockHeight} />
      {route === "txns" ? (
        <>
          <TxnList block={block.blockHeight} />
        </>
      ) : (
        <>
          <BlockOverview block={block} />
        </>
      )}
    </div>
  );
};

export default Block;
