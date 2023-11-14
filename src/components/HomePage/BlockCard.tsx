import { formatNum } from "@/ts/utils";
import { VscExtensions } from "@react-icons/all-files/vsc/VscExtensions";
import { DateTime } from "luxon";
import Link from "next/link";
import { useState, useEffect } from "react";

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
        <div className="text-xs">
          {!isClient ? "" : DateTime.fromISO(block?.dateTime).toRelative()}
        </div>
      </div>
    </Link>
  );
};

export default BlockCard;
