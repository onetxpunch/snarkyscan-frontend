import Link from "next/link";

const Nav = () => {
  return (
    <div className="sticky top-0 flex flex-col justify-center w-full h-16 p-4 mx-auto mb-8 text-2xl font-black text-white shadow-xl bg-emerald-950">
      <div className="container flex mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <img src="/snarkyscanicon.png" className="object-contain w-12 h-12" />
          <div>Snarkyscan</div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
