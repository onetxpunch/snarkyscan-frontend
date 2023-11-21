import { VscClippy } from "@react-icons/all-files/vsc/VscClippy";
import { VscDeviceCamera } from "@react-icons/all-files/vsc/VscDeviceCamera";
import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Hint from "../Hint";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import {
  setGraphqlEndpoints,
  fetchAccount,
  PublicKey,
  Types,
  Mina,
} from "o1js";
import TxRow from "../TxRow";
import Top from "./AddressHeader";
import BalanceInfo from "./AddressBalance";
import MoreInfo from "./AddressActivity";
import AccountNav from "./AddressNav";
import ZkAppInfo from "./AddressAppInfo";
import VerifySubmit from "./AddressVerify";

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

const Address = ({ address, price }) => {
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
      ) : address[1] === "verify" ? (
        <VerifySubmit zkapp={acc?.zkapp} address={address[0]} />
      ) : (
        <>
          {acc?.zkapp && <ZkAppInfo address={address[0]} zkapp={acc.zkapp} />}
          <BalanceInfo
            minaPrice={price}
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
