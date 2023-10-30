import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-4 bg-emerald-950 rounded-t-xl sm:p-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="md:flex md:justify-between">
          <div className="flex flex-col gap-2 mb-6 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/snarkyscanicon.png"
                className="object-contain w-8 h-8"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Snarkyscan Explorer
              </span>
            </Link>
            <div className="text-sm text-slate-100">
              Snarkyscan is a block explorer for Mina, a decentralized smart
              contracts platform based on zero knowledge proofs.
            </div>
          </div>
          <div className="grid w-full grid-cols-3 gap-8 sm:w-2/5 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Policy
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/privacy" className="hover:underline">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/usage" className="hover:underline">
                    Usage
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Services
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://github.com" className="hover:underline">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="https://github.com/" className="hover:underline">
                    Open source
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Connect
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://github.com/" className="hover:underline ">
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/" className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            {new Date().getFullYear()} - Snarkyscan.com
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
