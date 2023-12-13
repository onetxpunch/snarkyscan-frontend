import { formatNum } from "@/ts/utils";
import { VscWordWrap } from "@react-icons/all-files/vsc/VscWordWrap";
import { VscExtensions } from "@react-icons/all-files/vsc/VscExtensions";
import { DateTime } from "luxon";
import Link from "next/link";
import { useState, useEffect } from "react";
// import { VscPieChart } from "react-icons/vsc";

const BlockCard = ({ block }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Link className="aspect-square" href={`/block/${block?.blockHeight}`}>
      <div
        className={`bg-white aspect-square flex justify-between flex-col border-t-4 border-l-4 bg-gradient-to-tl from-emerald-50 to-white hover:to-emerald-200 hover:bg-emerald-100 border-[1px] border-emerald-400 rounded-lg shadow-xl p-4 w-full h-full`}
      >
        <div className="flex gap-2 text-3xl font-bold text-emerald-600">
          {/*<VscExtensions />*/} {formatNum(block?.blockHeight)}
        </div>
        <div className="flex items-center w-auto gap-2 px-2 mx-auto text-xs font-bold text-center border-solid rounded border-emerald-400">
          <VscWordWrap className="w-6 h-6 text-emerald-800" />{" "}
          <div>
            <span className="text-[9px]">
              {block.txFees / 10 ** 9 + block.snarkFees / 10 ** 9}
            </span>
            <br />
            MINA
          </div>
        </div>
        <div className="text-xs text-center">
          {!isClient ? "" : DateTime.fromISO(block?.dateTime).toRelative()}
        </div>
      </div>
    </Link>
  );
};

export default BlockCard;
