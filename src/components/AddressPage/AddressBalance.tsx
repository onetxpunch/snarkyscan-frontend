import { formatNum, formatUSD } from "@/ts/utils";

const BalanceInfo = ({
  address,
  noAccount,
  setNoAccount,
  minaBalance,
  minaPrice,
}) => {
  return (
    <div className="p-4 bg-white flex flex-col gap-3 border-slate-200 rounded-lg border-[1px]">
      <div className="text-lg">Overview</div>
      <div className="flex flex-col gap-1">
        <div className="text-sm uppercase text-slate-600">Mina Balance</div>
        <div className="flex gap-2">
          <img
            alt="mina logo"
            src="/mina-logo.png"
            className="w-5 h-5 rounded-full text-slate-800"
          />
          {noAccount ? "0" : formatNum(minaBalance)}
        </div>
      </div>

      {!process.env.NEXT_PUBLIC_API_URL?.includes("berkeley") && (
        <div className="flex flex-col gap-1">
          <div className="text-sm uppercase text-slate-600">Mina Value</div>
          <div>{noAccount ? "0.00" : formatUSD(minaBalance * minaPrice)}</div>
        </div>
      )}
    </div>
  );
};

export default BalanceInfo;
