import { VscClippy } from "@react-icons/all-files/vsc/VscClippy";
import { VscDeviceCamera } from "@react-icons/all-files/vsc/VscDeviceCamera";
import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Hint from "./Hint";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import { DateTime } from "luxon";
import {
  setGraphqlEndpoints,
  fetchAccount,
  PublicKey,
  Types,
  Mina,
} from "o1js";
import TxRow from "./TxRow";

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
      <div className="text-xs bg-white border-[1px] border-slate-200 rounded-lg p-2 text-md font-mono">
        {address}
      </div>
    </div>
  );
};

const BalanceInfo = ({ address, noAccount, setNoAccount, minaBalance }) => {
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
          {noAccount ? "0" : minaBalance}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div className="text-sm uppercase text-slate-600">Mina Value</div>
        <div>${noAccount ? "0.00" : minaBalance}</div>
      </div>
    </div>
  );
};

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

const AccountNav = ({ address, zkapp }) => {
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
      {zkapp && (
        <Link
          href={`/address/${address}/verify/${zkapp.verificationKey.hash}`}
          className={`p-2 rounded-lg hover:bg-slate-100 text-xs bg-slate-50 border-[1px] border-slate-200`}
        >
          Verify Code
        </Link>
      )}
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

const TxnList = ({ data }) => {
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
          <TxRow key={x.hash} {...x} />
        ))}
      </div>
    </div>
  );
};

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

const Address = ({ address }) => {
  const router = useRouter();
  const data = useLazyLoadQuery<any>(TxnListQuery, { from: address });
  const [acc, setAcc] = useState<any>();
  const [minaBalance, setMinaBalance] = useState<number>();
  const [noAccount, setNoAccount] = useState(false);
  console.log(router, address);

  useEffect(() => {
    const t = async () => {
      if (!process.env.NEXT_PUBLIC_API_2_URL) return;
      const publicKey = PublicKey.fromBase58(address[0]);
      setGraphqlEndpoints([process.env.NEXT_PUBLIC_API_2_URL]);
      let { account, error } = await fetchAccount({
        publicKey,
      });
      if (error) {
        console.log("error", error);
        setNoAccount(true);
      } else if (account) {
        const res = Types.Account.toJSON(account!);
        setAcc(res);
        console.log("account", res);
        setMinaBalance(Number(res.balance) / 10 ** 9);
      }
    };
    if (address) t();
  }, [address]);

  return (
    <div className="flex flex-col gap-4">
      <Suspense>
        <Top address={address[0]} />
        <AccountNav zkapp={acc?.zkapp} address={address[0]} />
      </Suspense>
      {address[1] === "txns" ? (
        <>
          <TxnList data={data} />
        </>
      ) : (
        <>
          {acc?.zkapp && <ZkAppInfo address={address[0]} zkapp={acc.zkapp} />}
          <BalanceInfo
            minaBalance={minaBalance}
            address={address[0]}
            noAccount={noAccount}
            setNoAccount={setNoAccount}
          />
          <MoreInfo noAccount={noAccount} txns={data} />
          {/* <OtherChains /> */}
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
