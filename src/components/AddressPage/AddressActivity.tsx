import { DateTime } from "luxon";

const MoreInfo = ({ noAccount, txns }) => {
  return (
    <div className="p-4 bg-white flex flex-col gap-3 border-slate-200 rounded-lg border-[1px]">
      <div className="text-lg">More Info</div>
      <div className="flex flex-col gap-1">
        <div className="text-sm uppercase text-slate-600">Last sent</div>
        <div>
          {noAccount || !txns || txns.transactions.length == 0
            ? "No activity"
            : DateTime.fromISO(
                txns.transactions[txns.transactions.length - 1].dateTime
              ).toRelative()}
        </div>
      </div>
      {!noAccount && txns && txns.transactions.length > 1 && (
        <div className="flex flex-col gap-1">
          <div className="text-sm uppercase text-slate-600">First sent</div>
          <div>
            {DateTime.fromISO(txns.transactions[0].dateTime).toRelative()}
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreInfo;
