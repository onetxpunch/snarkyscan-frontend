import { VscAccount } from "@react-icons/all-files/vsc/VscAccount";
import Link from "next/link";
import { useState } from "react";

export const Connect = () => {
  const [connectData, setConnectData] = useState<string[]>();
  const tryConnect = async () => {
    try {
      const data = await window.mina.requestAccounts();
      if (data) setConnectData(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        className="p-4 text-base rounded-lg hover:cursor-pointer"
        onClick={tryConnect}
      >
        {connectData ? (
          <Link
            href={`/address/${connectData[0]}`}
            className="p-4 text-xs rounded-lg hover:text-emerald-400 hover:cursor-pointer"
          >
            {connectData[0]}
          </Link>
        ) : (
          <div className="flex items-center gap-4 hover:text-emerald-400">
            <VscAccount className="w-6 h-6" />
            Connect
          </div>
        )}
      </div>
    </>
  );
};

export default Connect;
