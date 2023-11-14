import { DateTime } from "luxon";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import { ListQuery as ListQueryT } from "../../../__generated__/ListQuery.graphql";
import { VscExtensions } from "@react-icons/all-files/vsc/VscExtensions";
import Link from "next/link";
import { formatNum } from "@/ts/utils";
import { useEffect, useState } from "react";
import BlockCard from "./BlockCard";

const ListQuery = graphql`
  query ListQuery {
    blocks(sortBy: BLOCKHEIGHT_DESC, query: { canonical: true }, limit: 10) {
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
const List = () => {
  const data = useLazyLoadQuery<any>(ListQuery, {});
  return (
    <div className="flex flex-col gap-3 overflow-x-scroll">
      <div className="text-xl font-semibold">Latest blocks</div>
      <div className="flex gap-3 p-4 rounded-lg shadow-xl bg-emerald-100">
        {data.blocks.map((x, i) => {
          return <BlockCard block={x} key={x?.blockHeight} />;
        })}
      </div>
    </div>
  );
};

export default List;
