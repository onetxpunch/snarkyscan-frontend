import Link from "next/link";
import { useState } from "react";

const ZkAppInfo = ({ zkapp, address }) => {
  const [minaBalance, setMinaBalance] = useState<number>();
  return (
    <div className="p-4 bg-white flex flex-col gap-3 border-slate-200 rounded-lg border-[1px]">
      <div className="text-lg">ZkApp</div>
      <div className="flex flex-col gap-1">
        <div className="text-sm uppercase text-slate-600">
          Verification Key Hash
        </div>
        <div>{zkapp.verificationKey.hash}</div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-sm uppercase text-slate-600">Verified Code</div>
        <div>
          Not verified. If you know the source code,{" "}
          <Link
            href={`/address/${address}/verify/${zkapp.verificationKey.hash}`}
            className={`text-emerald-600`}
          >
            verify it publicly here
          </Link>
          !
        </div>
      </div>
    </div>
  );
};

export default ZkAppInfo;
