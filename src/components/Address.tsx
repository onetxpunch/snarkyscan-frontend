import { VscClippy } from "@react-icons/all-files/vsc/VscClippy";
import { VscDeviceCamera } from "@react-icons/all-files/vsc/VscDeviceCamera";
import { Suspense, useState } from "react";
import { VscMortarBoard } from "@react-icons/all-files/vsc/VscMortarBoard";
import { useRouter } from "next/router";
import Link from "next/link";
import Hint from "./Hint";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import { DateTime } from "luxon";

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

const TxnListQuery = graphql`
  query AddressTxnListQuery($from: String!) {
    transactions(
      query: { from: $from, canonical: true }
      sortBy: DATETIME_DESC
    ) {
      amount
      blockHeight
      canonical
      dateTime
      failureReason
      fee
      feeToken
      from
      hash
      id
      isDelegation
      kind
      memo
      nonce
      to
      toAccount {
        token
      }
      token
      fromAccount {
        token
      }
      feePayer {
        token
      }
    }
  }
`;

const TxnLink = (data) => {
  return (
    <div className="flex justify-between gap-4">
      <Link
        className="col-span-3 text-emerald-600 hover:text-emerald-500"
        href={`/tx/${data.hash}`}
      >
        {data.hash.slice(0, 16)}
      </Link>

      <Link
        className="col-span-3 text-emerald-600 hover:text-emerald-500"
        href={`/block/${data.blockHeight}`}
      >
        {data.blockHeight}
      </Link>
      <div className="col-span-1">
        {DateTime.fromISO(data.dateTime).toRelative()}
      </div>

      <Link
        className="col-span-3 text-emerald-600 hover:text-emerald-500"
        href={`/address/${data.from}`}
      >
        {data.from.slice(0, 8)}
      </Link>
      <div className="absolute -ml-6 left-3/4">
        {data.from === data.address ? "IN" : "OUT"}
      </div>
      <Link
        className="col-span-3 text-emerald-600 hover:text-emerald-500"
        href={`/address/${data.to}`}
      >
        {data.to.slice(0, 8)}
      </Link>
    </div>
  );
};

const TxnList = ({ address }) => {
  const data = useLazyLoadQuery<any>(TxnListQuery, { from: address });

  const [minaBalance, setMinaBalance] = useState<number>();
  return (
    <div className="p-4 bg-white flex flex-col gap-3 border-slate-200 rounded-lg border-[1px]">
      <div className="text-lg ">
        A total of {data.transactions.length} transactions were found.
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between gap-4 font-semibold">
          <div>Transaction Hash</div>
          {/* <div>Action</div> */}
          <div>Block</div>
          <div>Age</div>
          <div>From</div>
          <div>To</div>
        </div>
        {/* <div>Value</div> */}
        {/* <div>Fee</div> */}
        {data?.transactions?.map((x) => (
          <TxnLink key={x.hash} {...x} address={address} />
        ))}
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
          <TxnList address={address[0]} />
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
