import Link from "next/link";
import { VscSearch } from "@react-icons/all-files/vsc/VscSearch";
import { useState, useEffect } from "react";

const Search = () => {
  const [input, setInput] = useState<string>(``);
  const [link, setLink] = useState(`/`);

  useEffect(() => {
    if (!isNaN(parseInt(input))) setLink(`/block/${input}`);
    else if (input.startsWith("5J")) setLink(`/tx/${input}`);
    else if (input.startsWith("B6")) setLink(`/address/${input}`);
    else setLink(`/`);
  }, [input]);

  return (
    <div className="flex flex-col">
      <div className="py-4 -mt-8 text-2xl font-semibold tracking-tighter">
        Mina Blockchain Explorer
      </div>
      <div className="flex items-center justify-center w-full gap-2">
        <input
          type="text"
          value={input}
          className="w-full max-w-2xl rounded-lg accent-emerald-500 focus:outline-emerald-500 focus:ring-emerald-500"
          placeholder="Enter an address, block number, tx hash"
          onChange={(e) => {
            setInput(`${e.currentTarget.value}`);
          }}
        />
        <Link
          href={link}
          className={`-ml-12 rounded-lg items-center justify-center flex p-2 bg-emerald-400 flex gap-2 hover:bg-emerald-500 cursor-pointer active:bg-emerald-200 select-none ${
            input?.length == 0
              ? "bg-slate-400"
              : link !== "/"
              ? "bg-emerald-500"
              : "bg-slate-400"
          }`}
        >
          <VscSearch />
        </Link>
      </div>
    </div>
  );
};

export default Search;
