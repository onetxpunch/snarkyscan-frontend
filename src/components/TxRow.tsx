import { DateTime } from "luxon";
import Link from "next/link";

const TxRow = (data) => {
  return (
    <div className="flex justify-between gap-4">
      <Link
        className="col-span-3 text-emerald-600 hover:text-emerald-500"
        href={`/tx/${data.hash}`}
      >
        {data.hash.slice(0, 16)}
      </Link>

      <Link
        className="col-span-3 text-emerald-600 hover:text-emerald-500"
        href={`/block/${data.blockHeight}`}
      >
        {data.blockHeight}
      </Link>
      <div className="col-span-1">
        {DateTime.fromISO(data.dateTime).toRelative()}
      </div>

      <Link
        className="col-span-3 text-emerald-600 hover:text-emerald-500"
        href={`/address/${data.from}`}
      >
        {data.from.slice(0, 8)}
      </Link>
      <div className="absolute -ml-6 left-3/4">
        {data.from === data.address ? "IN" : "OUT"}
      </div>
      <Link
        className="col-span-3 text-emerald-600 hover:text-emerald-500"
        href={`/address/${data.to}`}
      >
        {data.to.slice(0, 8)}
      </Link>
    </div>
  );
};

export default TxRow;
