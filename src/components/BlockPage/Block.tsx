import { DateTime } from "luxon";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import { VscCheck } from "@react-icons/all-files/vsc/VscCheck";
import Link from "next/link";
import { VscChevronLeft } from "@react-icons/all-files/vsc/VscChevronLeft";
import { VscChevronRight } from "@react-icons/all-files/vsc/VscChevronRight";
import Hint from "../Hint";
import TxRow from "../TxRow";
import BlockNav from "./BlockNav";
import BlockTitle from "./BlockTitle";
import BlockView from "./BlockView";

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

const TxnList = ({ block, data }) => {
  return (
    <div className="p-4 bg-white flex flex-col gap-3 border-slate-200 rounded-lg border-[1px]">
      <div className="text-lg ">
        A total of {data.transactions.length} transactions were found.
      </div>
      <div className="grid grid-cols-5">
        <div className="col-span-2 font-semibold">Transaction Hash</div>
        {/* <div>Action</div> */}
        {/* <div className="font-semibold">Age</div> */}
        <div className="font-semibold">From</div>
        <div className="font-semibold">To</div>
        {data?.transactions?.map((x) => (
          <TxRow key={x.hash} {...x} showBlock={false} showAge={false} />
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
  const data = useLazyLoadQuery<any>(BlockTxnListQuery, { blockHeight });

  return (
    <div className="flex flex-col gap-2">
      <BlockTitle blockHeight={blockHeight} />
      <BlockNav blockHeight={blockHeight} />
      {route === "txns" ? (
        <>
          <TxnList block={blockHeight} data={data} />
        </>
      ) : (
        <>
          <BlockView blockHeight={blockHeight} data={data} />
        </>
      )}
    </div>
  );
};

export default Block;
