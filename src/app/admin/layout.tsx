"use client";
import React, { useState } from "react";
import Sidenav from "@app/features/admin/components/Sidenav";
import BottomNav from "@app/features/admin/components/BottomNav";
import { Bell } from "lucide-react";
import Header from "@app/features/admin/components/Header";

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

          <div className={`relative w-full h-full lg:h-[100vh]`} >
            <div className="h-[3rem]">
              <Header/>
            </div>

            <div className="h-[calc(100ch-3rem)] overflow-y-scroll overflow-x-hidden">
              {children}
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
