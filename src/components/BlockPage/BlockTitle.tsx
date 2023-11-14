import { VscChevronLeft } from "@react-icons/all-files/vsc/VscChevronLeft";
import { VscChevronRight } from "@react-icons/all-files/vsc/VscChevronRight";
import Link from "next/link";

const BlockTitle = ({ blockHeight }) => {
  return (
    <h2 className="flex items-center gap-2 mb-4 text-3xl">
      <span className="font-black">Block</span> #{blockHeight}{" "}
      <div className="inline-flex gap-2">
        <Link href={`/block/${blockHeight - 1}`}>
          <VscChevronLeft className="bg-slate-200 text-slate-800 hover:text-emerald-800 rounded-lg border-[1px] border-slate-400 hover:bg-slate-100 cursor-pointer" />
        </Link>
        <Link href={`/block/${blockHeight + 1}`}>
          <VscChevronRight className="bg-slate-200 text-slate-800 hover:text-emerald-800 rounded-lg border-[1px] border-slate-400 hover:bg-slate-100 cursor-pointer" />
        </Link>
      </div>
    </h2>
  );
};

export default BlockTitle;
