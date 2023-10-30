import { VscClippy } from "@react-icons/all-files/vsc/VscClippy";
import { VscDeviceCamera } from "@react-icons/all-files/vsc/VscDeviceCamera";
import { Suspense, useState } from "react";
import { VscMortarBoard } from "@react-icons/all-files/vsc/VscMortarBoard";
import { useRouter } from "next/router";
import Link from "next/link";
import Hint from "./Hint";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

const Top = ({ address }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 text-2xl">
        <div className="font-semibold">
          <Jazzicon seed={jsNumberForAddress(address)} /> Address
        </div>
        <VscClippy
          className="inline cursor-pointer hover:text-slate-800 text-slate-700"
          onClick={() => {
            navigator.clipboard.writeText(address);
          }}
        />
        <VscDeviceCamera className="hidden inline cursor-pointer hover:text-slate-800 text-slate-700" />
      </div>
      <div className="text-sm bg-white border-[1px] border-slate-200 rounded-lg p-2 text-md font-mono">
        {address}
      </div>
    </div>
  );
};

const BalanceInfo = ({}) => {
  const [minaBalance, setMinaBalance] = useState<number>();
  return (
    <div className="p-4 bg-white flex flex-col gap-3 border-slate-200 rounded-lg border-[1px]">
      <div className="text-lg">Overview</div>
      <div className="flex flex-col gap-1">
        <div className="text-sm uppercase text-slate-600">Mina Balance</div>
        <div>
          <img
            alt="mina logo"
            src="/mina-logo.png"
            className="w-5 h-5 rounded-full text-slate-800"
          />
          {minaBalance}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div className="text-sm uppercase text-slate-600">Mina Value</div>
        <div>${minaBalance}</div>
      </div>
    </div>
  );
};

const MoreInfo = ({}) => {
  const [minaBalance, setMinaBalance] = useState<number>();
  return (
    <div className="p-4 bg-white flex flex-col gap-3 border-slate-200 rounded-lg border-[1px]">
      <div className="text-lg">More Info</div>
      <div className="flex flex-col gap-1">
        <div className="text-sm uppercase text-slate-600">Last sent</div>
        <div>{minaBalance}</div>
      </div>

      <div className="flex flex-col gap-1">
        <div className="text-sm uppercase text-slate-600">First sent</div>
        <div>{minaBalance}</div>
      </div>
    </div>
  );
};

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

const AccountNav = ({ address }) => {
  const router = useRouter();
  return (
    <div className="flex gap-2">
      <Link
        href={`/address/${address}`}
        className={`p-2 rounded-lg text-xs bg-slate-50 hover:bg-slate-100 border-[1px] border-slate-200`}
      >
        Overview
      </Link>
      <Link
        href={`/address/${address}/txns`}
        className={`p-2 rounded-lg hover:bg-slate-100 text-xs bg-slate-50 border-[1px] border-slate-200`}
      >
        Transactions
      </Link>
    </div>
  );
};

const TxnList = () => {
  const data = [];
  const [minaBalance, setMinaBalance] = useState<number>();
  return (
    <div className="p-4 bg-white flex flex-col gap-3 border-slate-200 rounded-lg border-[1px]">
      <div className="text-lg">
        A total of {data.length} transactions were found.
      </div>
    </div>
  );
};

const Address = ({ address }) => {
  const router = useRouter();
  console.log(router, address);
  return (
    <div className="flex flex-col gap-4">
      <Suspense>
        <Top address={address[0]} />
        <AccountNav address={address[0]} />
      </Suspense>
      {address[1] === "txns" ? (
        <>
          <TxnList />
        </>
      ) : (
        <>
          <BalanceInfo />
          <MoreInfo />
          <OtherChains />
          <Hint
            text={`A wallet address is a publicly available address that allows its owner
        to receive funds from another party. To access the funds in an address,
        you must have its private key.`}
          />
        </>
      )}
    </div>
  );
};

export default Address;
