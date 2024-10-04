import { useState } from "react";
import { BsBank2 } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { ImHammer2 } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { TbCalendarEvent } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <div className="z-50 fixed top-0 left-0 right-0">
      {/* Top Navigation Bar */}
      <div className="w-full hidden bg-[var(--primary-color)] md:flex justify-between items-center px-14 py-3">
        <Link to="/">
          <img src="/logo.svg" alt="logo" className="w-[67px] h-[67px]" />
        </Link>
        <div className="flex gap-8 items-center">
          <div className="flex items-center gap-2">
            <CiWallet color="white" size={25} />
            <p className="text-white">$0.00</p>
          </div>
          <button>
            <img src="/user.png" alt="user" className="w-[30px] h-[30px]" />
          </button>
        </div>
      </div>
      {/*  */}
      {/* mobile navbar */}
      <div className="md:hidden bg-[var(--primary-color)] w-full fixed right-0 top-0 z-50 flex justify-between items-center px-10 py-2">
        <Link to={"/"}>
          <img src="/logo.svg" alt="logo" className="w-[67px] h-[67px] p-2" />
        </Link>
        <Link onClick={handleToggleNav} className="cursor-pointer">
          <div className="w-8 bg-[var(--secondary-color)] h-[4px] mb-[2px]"></div>
          <div className="w-6 bg-[var(--secondary-color)] h-[4px] mb-[2px]"></div>
          <div className="w-4 bg-[var(--secondary-color)] h-[4px]"></div>
        </Link>

        <div
          className={`transition-transform duration-500 ease-in-out bg-[var(--primary-color)] flex flex-col text-center h-full fixed right-0 top-0 p-12 z-50 transform ${
            toggleNav ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setToggleNav(false)}
            className="text-[var(--secondary-color)] flex justify-end mt-[-25px] mr-[-20px]"
          >
            <IoClose size={35} />
          </button>
          <div className="flex flex-col space-y-8 pt-16 text-[var(--text-color)]">
            <div className="flex gap-2 px-8 py-1 text-white">
              <Link to="/welcome" className="flex items-center text-white">
                <MdDashboard size={20} />
                <span className="ml-2">Dashboard</span>
              </Link>
            </div>
            <div className="flex gap-2 px-8 py-1 text-white">
              <Link to="/banks" className="flex items-center gap-4">
                <BsBank2 />
                <span className="">Banks</span>
              </Link>
            </div>
            <div className="flex gap-2 px-8 py-1 text-white">
              <Link to="/panel" className="flex items-center gap-4">
                <PiStudentFill />
                <span className="">Panel Of Experts</span>
              </Link>
            </div>
            <div className="flex gap-2 px-8 py-1 text-white">
              <Link to="/events" className="flex items-center gap-4">
                <TbCalendarEvent />
                <span className="">Event Diary</span>
              </Link>
            </div>
            <div className="flex gap-2 px-8 py-1 text-white">
              <Link to="/moots" className="flex items-center gap-4">
                <ImHammer2 />
                <span className="">Moot Courts</span>
              </Link>
            </div>
          </div>
        </div>
        {/* )} */}
      </div>

      {/* Sidebar */}
      <div className="hidden text-lg space-y-3 pl-4 py-10 text-center md:flex flex-col bg-[var(--primary-color)] h-full fixed">
        {/* <div className="bg-[var(--secondary-color)] px-8 py-4 flex gap-2 rounded-l-3xl"> */}

        <NavLink
          to="/welcome"
          className="flex items-center text-white px-8 py-4 gap-2 rounded-l-3xl"
        >
          <MdDashboard size={20} />
          <span className="ml-2">Dashboard</span>
        </NavLink>

        <NavLink
          to="/banks"
          className="items-center text-white px-8 py-4 flex gap-2 rounded-l-3xl"
        >
          <BsBank2 size={20} />
          <span className="ml-2">Banks</span>
        </NavLink>

        <NavLink
          to="/panel"
          className="items-center text-white px-8 py-4 flex gap-2 rounded-l-3xl"
        >
          <PiStudentFill size={20} />
          <span className="ml-2">Panel Of Experts</span>
        </NavLink>

        <NavLink
          to="/events"
          className="items-center text-white px-8 py-4 flex gap-2 rounded-l-3xl"
        >
          <TbCalendarEvent size={20} />
          <span className="ml-2">Event Diary</span>
        </NavLink>

        <NavLink
          to="/moots"
          className="items-center text-white px-8 py-4 flex gap-2 rounded-l-3xl"
        >
          <ImHammer2 size={20} />
          <span className="ml-2">Moot Courts</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
