import { useState } from "react";
import Hint from "../Hint";

const VerifySubmit = ({ zkapp, address }) => {
  const [input, setInput] = useState<string>();
  const [compilerVersion, setCompilerVersion] = useState("0.14.1");

  const triggerVerify = async () => {
    const submission = await fetch("/api/lookup", {
      method: "POST",
      body: JSON.stringify({
        compilerVersion,
        input,
        verificationHash: zkapp.verificationKey.hash,
        publicKey: address,
      }),
    });
    const r = await submission.json();
    console.log(r, `verify response`);
  };

  return (
    <div className="p-4 bg-white flex flex-col gap-3 border-slate-200 rounded-lg border-[1px]">
      <div className="">
        Verify the source code of your ZkApp! It helps users trust the contracts
        {" they're"} interacting with.
        {/* A total of {data.transactions.length} transactions were found. */}
      </div>

      <div className="text-sm uppercase text-slate-600">o1js Version</div>
      <div>{compilerVersion}</div>
      <span className="text-sm">
        <Hint
          text={`o1js upgrades can result in different verification keys, you must specify the one found in your package.json when deployed`}
        />
      </span>

      <div className="text-sm uppercase text-slate-600">Contract Code</div>
      <span className="text-sm">
        <Hint
          text={`Check our docs for a guide on verifying your contract or visit our Discord for help!`}
        />
      </span>
      <textarea
        value={input}
        placeholder={`
		  import { SmartContract } from "o1js";

		  class MyContract extends SmartContract {

		  }

		  // ! must export a default object
		  export default MyContract

		  `}
        className="bg-white shadow-xl font-mono p-2 rounded-lg border-solid border-emerald-700 border-[1px] w-full min-h-[32rem]"
        onInput={(e) => {
          setInput(e.currentTarget.value);
        }}
      />
      <div
        className="p-4 font-semibold text-center text-white rounded-lg shadow-xl bg-emerald-600"
        onClick={triggerVerify}
      >
        Submit for {address}
      </div>
    </div>
  );
};

export default VerifySubmit;
