import Link from "next/link";
import { useState } from "react";
import Connect from "./Connect";

const SetNetwork = () => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowDrop(true)}
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover"
        data-dropdown-trigger="hover"
        className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
        type="button"
      >
        Dropdown hover{" "}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdownHover"
        className={`z-10 ${
          !showDrop ? "hidden" : ""
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownHoverButton"
        >
          <li>
            <a
              href="https://snarkyscan.com"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Mainnet
            </a>
          </li>
          <li>
            <a
              href="https://berkeley.snarkyscan.com"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Berkeley
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

const Nav = () => {
  return (
    <div className="sticky top-0 flex flex-col justify-center w-full h-16 p-4 mx-auto mb-8 text-2xl font-black text-white shadow-xl bg-emerald-950">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <img src="/snarkyscanicon.png" className="object-contain w-12 h-12" />
          <div>Snarkyscan</div>
        </Link>
        <div
          className="flex gap-2 my-2"
          onClick={() => {
            console.log(`hi`);
          }}
        >
          {/* <SetNetwork /> */}
          <Connect />
        </div>
      </div>
    </div>
  );
};

export default Nav;
