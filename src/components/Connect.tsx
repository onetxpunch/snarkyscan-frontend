import Link from "next/link";
import { useState } from "react";

export const Connect = () => {
  const [to, setTo] = useState<string>();
  const [connectData, setConnectData] = useState<string[]>();
  const tryConnect = async () => {
    try {
      let data = await window.mina.requestAccounts();
      if (data) setConnectData(data);
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <>
      {connectData ? (
        <>
          <Link
            href={`/address/${connectData[0]}`}
            className="p-4 text-xs rounded-lg bg-emerald-400 hover:bg-emerald-300 hover:cursor-pointer"
          >
            {connectData[0]}
          </Link>
        </>
      ) : (
        <>
          <div
            className="p-4 text-base rounded-lg bg-emerald-400 hover:bg-emerald-300 hover:cursor-pointer"
            onClick={tryConnect}
          >
            Connect
          </div>
        </>
      )}
    </>
  );
};

export default Connect;
