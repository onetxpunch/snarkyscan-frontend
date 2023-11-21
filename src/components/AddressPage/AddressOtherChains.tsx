import { useState } from "react";

const OtherChains = ({}) => {
  const [minaBalance, setMinaBalance] = useState<number>();
  return (
    <div className="p-4 bg-white flex flex-col gap-3 border-slate-200 rounded-lg border-[1px]">
      <div className="text-lg">Other Chains</div>
      <div className="flex flex-col gap-1">
        <div className="text-sm uppercase text-slate-600">Active on</div>
        <div>{minaBalance}</div>
      </div>
    </div>
  );
};

export default OtherChains;
