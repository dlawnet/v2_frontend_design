"use client";
import React, { useState } from "react";
import Sidenav from "@app/features/admin/components/Sidenav";
import BottomNav from "@app/features/admin/components/BottomNav";
import { Bell } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleNotificationPanel = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <html lang="en">
      <body className="w-full h-screen overflow-hidden poppins">
        <div className="w-full h-[calc(100vh-4rem)] lg:h-full flex items-center justify-center overflow-hidden relative">
          <div className="w-[270px] h-full hidden lg:flex overflow-hidden">
            <Sidenav />
          </div>

          <div
            className={`relative w-full h-full lg:h-[100vh] overflow-y-scroll transition-all duration-300 ${
              isNotificationOpen ? "" : ""
            }`}
            
          >
            <div onClick={()=>setIsNotificationOpen(false)}>
              {children}
            </div>

            <button
              onClick={toggleNotificationPanel}
              className="absolute top-1 right-1 z-10 p-1 rounded-full bg-[#FDDF5A] hover:bg-white border border-black focus:outline-none"
            >
              <Bell className="w-4 h-4"/>
            </button>
          </div>

          <div
            className={`fixed top-0 right-0 w-[250px] h-full bg-[#FDDF5A] shadow-lg transition-transform duration-300 ${
              isNotificationOpen ? "translate-x-0 " : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full p-4">            
              <div className="mt-4">
                <h2 className="text-lg font-semibold">Notifications</h2>
                <p>No notification messages.</p>
              </div>
            </div>
          </div>
          
        </div>

        
        {/* <div className="lg:hidden relative z-[99] h-[4rem] border-t border-gray-300 overflow-hidden bg-white">
          <BottomNav/>
        </div> */}

      </body>
    </html>
  );
}
