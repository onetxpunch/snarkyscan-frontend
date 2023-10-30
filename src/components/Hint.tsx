import { VscMortarBoard } from "@react-icons/all-files/vsc/VscMortarBoard";

const Hint = ({ text }) => {
  return (
    <div className="flex items-center gap-2 p-1 text-slate-600">
      <VscMortarBoard className="w-6 h-6" />
      <div className="text-xs">{text}</div>
    </div>
  );
};

export default Hint;
