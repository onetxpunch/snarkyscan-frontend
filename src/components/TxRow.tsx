import { DateTime } from "luxon";
import Link from "next/link";

const TxRow = (data) => {
  return (
    <>
      <Link
        className="col-span-2 text-emerald-600 hover:text-emerald-500"
        href={`/tx/${data.hash}`}
      >
        {data.hash.slice(0, 16)}
      </Link>

      {data.showBlock && (
        <Link
          className=" text-emerald-600 hover:text-emerald-500"
          href={`/block/${data.blockHeight}`}
        >
          {data.blockHeight}
        </Link>
      )}

      {data.showAge && (
        <div className="">{DateTime.fromISO(data.dateTime).toRelative()}</div>
      )}

      <Link
        className=" text-emerald-600 hover:text-emerald-500"
        href={`/address/${data.from}`}
      >
        {data.from.slice(0, 8)}
      </Link>
      <Link
        className=" text-emerald-600 hover:text-emerald-500"
        href={`/address/${data.to}`}
      >
        {data.to.slice(0, 8)}
      </Link>
    </>
  );
};

export default TxRow;
