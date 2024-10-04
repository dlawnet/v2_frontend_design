import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

function Navbar() {
  return (
    <>
      <div className="hidden bg-[var(--primary-color)] md:flex justify-between items-center px-14 py-2">
        <Link to={"/"}>
          <img src="/logo.svg" alt="logo" className="w-[67px] h-[67px]" />
        </Link>
        <div className="flex justify-between gap-8 pl-24 md:text-xl sm:text-[16px] font-semibold text-[var(--text-color)]">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="flex gap-6">
          <button className="px-6 py-2 rounded-md bg-[var(--text-color)] text-[var(--primary-color)]">
            <Link to={"/login"}>Login</Link>
          </button>
          <button className="px-6 py-2 border border-[var(--secondary-color)] rounded-md bg-transparent text-[var(--secondary-color)]">
            <Link to={"/register"}>Register</Link>
          </button>
        </div>
      </div>

      <MobileNav />
    </>
  );
}

export default Navbar;
