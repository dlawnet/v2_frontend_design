import React, {useState} from "react";
import {Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger} from "@app/components/base/menubar";


const Header = () => {
  //const logout = useLogout()
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6 lg:px-[40px] h-[76px] bg-[#491217] text-white helvetica">
      <div className="flex-grow lg:flex-grow-0 my-5">
        <img src="/images/logo.svg" alt="Logo" />
      </div>
      <div className="block lg:hidden">
        <img src="/images/menu.svg" alt="Menu" onClick={toggleMenu} />
      </div>
      <div className="hidden lg:flex gap-8">
        <div className="flex items-center gap-2">
          <img src="/images/wallet.svg" alt="Menu" />
          $0.00
        </div>
        <div>
          <Menubar className="border-none">
            <MenubarMenu>
              <MenubarTrigger className="border-none cursor-pointer">
                <img src="/images/profile.svg" alt="Menu" />
              </MenubarTrigger>
              <MenubarContent className="bg-[#491217] text-white">
                <MenubarItem className="cursor-pointer hover:bg-slate-600">
                  Log Out
                  {/*<Button onClick={logout.mutate({})}>Log Out</Button>*/}
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
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
        <div className="flex flex-col items-center gap-10 text-lg font-bold mt-10 flex-grow">
          <div className="w-[160px] flex flex-col gap-10">
            <div className="flex items-center gap-2">
              <img
                src="/images/ic_baseline-dashboard.svg"
                alt="ic_baseline-dashboard"
              />
              <a href="/">Dashboard</a>
            </div>
            <div className="flex items-center gap-2">
              <img src="/images/bank.svg" alt="Bank" />
              <a href="/">Banks</a>
            </div>
            <div className="flex items-center gap-2">
              <img src="/images/graduation.svg" alt="graduation" />
              <a href="/">Panel of Experts</a>
            </div>
            <div className="flex items-center gap-2">
              <img src="/images/mdi_diary.svg" alt="mdi_diary" />
              <a href="/">Event Diary</a>
            </div>
            <div className="flex items-center gap-2">
              <img src="/images/mdi_court-hammer.svg" alt="mdi_court-hammer" />
              <a href="/">Moot Courts</a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full mb-8 text-center">
          <a
            href="/auth/register"
            className="bg-[#491217] px-10 py-2 rounded text-[#FDDF5A] font-medium border border-[#FDDF5A] hover:scale-105 transition-transform"
          >
            Log Out
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
