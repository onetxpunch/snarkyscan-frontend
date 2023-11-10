import { DateTime } from "luxon";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import Link from "next/link";
import Hint from "./Hint";
import { VscCheck } from "@react-icons/all-files/vsc/VscCheck";
import { VscWatch } from "@react-icons/all-files/vsc/VscWatch";
import { VscHistory } from "@react-icons/all-files/vsc/VscHistory";
import { Suspense } from "react";
import { formatNum } from "@/ts/utils";
import { VscDebugPause } from "@react-icons/all-files/vsc/VscDebugPause";

const TxQuery = graphql`
  query TxQuery($hash: String!) {
    transaction(query: { hash: $hash, canonical: true }) {
      amount
      canonical
      dateTime
      failureReason
      fee
      feeToken
      fromAccount {
        token
      }
      from
      hash
      id
      kind
      isDelegation
      memo
      nonce
      receiver {
        publicKey
      }
      source {
        publicKey
      }
      to
      toAccount {
        token
      }
      token
      blockHeight
    }
    latest: blocks(
      sortBy: BLOCKHEIGHT_DESC
      query: { canonical: true }
      limit: 1
    ) {
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

const Tx = ({ tx }) => {
  const { transaction, latest } = useLazyLoadQuery<any>(TxQuery, { hash: tx });
  const latestBlock = latest[0];
  return (
    <div className="flex flex-col gap-2">
      <h2 className="mb-4 text-3xl">
        <span className="font-black">Transaction</span>
        <div className="text-base">{tx}</div>
      </h2>
      <div className="p-4 bg-white border-[1px] rounded-xl flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="w-48 text-xl font-semibold text-gray-800">
            Status:
          </span>
          {transaction ? (
            <div className="text-green-600 p-2 border-[1px] border-green-600 bg-green-100 rounded flex gap-2 text-sm items-center">
              <VscCheck className="w-5 h-5 text-emerald-800" />{" "}
              <div>Success</div>
            </div>
          ) : (
            <>
              <div className="text-sm  flex p-2 bg-orange-100 border-slate-200 border-[1px] rounded-lg items-center gap-2 text-orange-700 font-semibold">
                <VscDebugPause />
                <div>Unconfirmed</div>
              </div>
            </>
          )}
        </div>
        {transaction && (
          <div className="flex items-center gap-2">
            <span className="w-48 text-xl font-semibold text-gray-800">
              Block:
            </span>
            <Link
              href={`/block/${transaction?.blockHeight}`}
              className="flex gap-2 text-emerald-600"
            >
              {/* {DateTime.fromISO(block.dateTime).toRelative()} ({block.dateTime}) */}
              {transaction && (
                <div className="flex items-center gap-1">
                  <VscHistory /> {formatNum(transaction?.blockHeight)}
                </div>
              )}
              {
                <div className="text-sm p-2 bg-slate-100 border-slate-200 border-[1px] rounded-lg text-slate-700 font-semibold">
                  <Suspense>
                    {formatNum(
                      Number(latestBlock.blockHeight) -
                        Number(transaction?.blockHeight)
                    )}
                  </Suspense>{" "}
                  Block Confirmations
                </div>
              }
            </Link>
          </div>
        )}
        <div className="flex items-center gap-2">
          <span className="w-48 text-xl font-semibold text-gray-800">
            Timestamp:
          </span>
          <div className="flex items-center gap-1">
            <VscWatch /> {DateTime.fromISO(transaction?.dateTime).toRelative()}{" "}
            (
            {transaction
              ? DateTime.fromISO(transaction?.dateTime).toLocaleString(
                  DateTime.DATETIME_FULL
                )
              : "Awaiting confirmation"}
            )
          </div>
        </div>
        <hr />
        <div className="flex items-center gap-2">
          <span className="w-48 text-xl font-semibold text-gray-800">
            From:
          </span>{" "}
          <Link
            href={`/address/${transaction?.source.publicKey}`}
            className="text-emerald-700 visited:text-emerald-800"
          >
            {transaction?.source.publicKey}
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-48 text-xl font-semibold text-gray-800">To:</span>{" "}
          <Link
            href={`/address/${transaction?.receiver.publicKey}`}
            className="text-emerald-700 visited:text-emerald-800"
          >
            {transaction?.receiver.publicKey}
          </Link>
        </div>
        <hr />
        <div className="flex items-center gap-2">
          <span className="w-48 text-xl font-semibold text-gray-800">
            Value:
          </span>{" "}
          <span>{transaction?.amount / 10 ** 9} MINA</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-48 text-xl font-semibold text-gray-800">
            Transaction Fee:
          </span>{" "}
          <span>{transaction?.fee / 10 ** 9} MINA</span>
        </div>
      </div>
      <Hint
        text={`A transaction is a cryptographically signed proof of a valid action performed on the canonical state. Block explorers can decode the details of transactions from the network.`}
      />
    </div>
  );
};

export default Tx;
