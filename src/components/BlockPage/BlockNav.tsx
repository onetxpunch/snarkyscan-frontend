import Link from "next/link";

const BlockNav = ({ blockHeight }) => {
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

export default BlockNav;
