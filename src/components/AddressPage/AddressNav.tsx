import Link from "next/link";
import { useRouter } from "next/router";

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

export default AccountNav;
