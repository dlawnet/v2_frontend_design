import React from "react";

const Header = () => {
  return (
    <nav className="flex items-center justify-between px-6 sm:px-[15px] h-[76px] bg-[#491217] text-white pb-5">
      <div className="flex-grow sm:flex-grow-0 mt-3">
        <img src="/images/logo.svg" alt="Logo" />
      </div>
      <div className="block sm:hidden">
        <img src="/images/menu.svg" alt="Menu" />
      </div>
      <ul className="hidden sm:flex gap-10 text-lg font-bold ml-14">
        <li className="hover:scale-105 transition-transform">
          <a href="/">Home</a>
        </li>
        <li className="hover:scale-105 transition-transform">
          <a href="/login">About</a>
        </li>
        <li className="hover:scale-105 transition-transform">
          <a href="/register">Contact</a>
        </li>
      </ul>
      <div className="hidden sm:flex gap-4">
        <a
          href="/auth/login"
          className="bg-white px-3 py-1 rounded text-black font-medium hover:scale-105 transition-transform"
        >
          Login
        </a>
        <a
          href="/auth/register"
          className="bg-[#491217] px-3 py-1 rounded text-[#FDDF5A] font-medium border border-[#FDDF5A] hover:scale-105 transition-transform"
        >
          Register
        </a>
      </div>
    </nav>
  );
};

export default Header;
