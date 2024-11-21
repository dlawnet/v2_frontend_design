"use client";
import React from "react";
import Sidenav from "@app/features/admin/components/Sidenav";
import Header from "@app/features/admin/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="w-full h-screen overflow-hidden poppins">
        <div className="w-full h-screen lg:h-full flex items-center justify-center overflow-hidden relative">
          <div className="w-[270px] h-full hidden lg:flex overflow-hidden">
            <Sidenav />
          </div>

          <div className={`relative w-full h-full lg:h-[100vh]`} >
            <div className="h-[3rem]">
              <Header/>
            </div>

            <div className="py-2 md:py-4 h-[calc(100vh-3rem)] overflow-y-scroll overflow-x-hidden">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
