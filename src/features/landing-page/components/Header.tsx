"use client";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6 sm:px-[15px] h-[76px] bg-[#491217] text-white ">
      <div className="flex-grow sm:flex-grow-0">
        <img src="/images/logo.svg" alt="Logo" />
      </div>
      <div className="block sm:hidden">
        <img
          src="/images/menu.svg"
          alt="Menu"
          onClick={toggleMenu}
          className="cursor-pointer"
        />
      </div>
      <ul className="hidden sm:flex justify-center items-center h-full gap-10 text-lg font-semibold ml-14">
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
      <div className="hidden sm:flex h-full gap-4 justify-center items-center">
        <a
          href="/auth/login"
          className="bg-white px-6 py-2 rounded text-black font-medium hover:scale-105 transition-transform"
        >
          Login
        </a>
        <a
          href="/auth/register"
          className="bg-[#491217] px-6 py-2 rounded text-[#FDDF5A] font-medium border border-[#FDDF5A] hover:scale-105 transition-transform"
        >
          Register
        </a>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-[#491217] text-white p-10 transition-transform transform z-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button onClick={toggleMenu} className="mb-5 ">
            <img src="/images/close-menu.svg" alt="close" />
          </button>
        </div>
        <ul className="flex flex-col items-center gap-10 text-lg font-bold mt-10">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/login">About</a>
          </li>
          <li>
            <a href="/register">Contact</a>
          </li>
          <li>
            <a
              href="/auth/login"
              className="bg-[#FDDF5A] px-10 py-2 rounded text-[#491217] font-medium border border-[#FDDF5A] hover:scale-105 transition-transform"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="/auth/register"
              className="bg-[#491217] px-8 py-2 rounded text-[#FDDF5A] font-medium border border-[#FDDF5A] hover:scale-105 transition-transform"
            >
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
