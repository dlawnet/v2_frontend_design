"use client";
import React, { useState } from "react";
import { Bell, X } from "lucide-react";
import Notifications from "./Notifications";
import { AvatarIcon } from "@app/icons";

const Header = () => {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    const toggleNotificationPanel = () => {
        setIsNotificationOpen(!isNotificationOpen);
    };
    
    return (
        <div 
        className="relative flex justify-end items-center gap-4 w-full py-1.5 px-6"
        >     
            <button
            onClick={toggleNotificationPanel}
            className="p-1"
            >
              <Bell className="w-6 h-6"/>
            </button>

            <div className="flex items-center gap-2">
                <div className="flex flex-col">
                    <span className='text-[#491217] text-[.8em] text-right font-medium'>Admin</span>
                    <span className='text-[#491217] text-[.8em] text-right font-bold'>View Profile</span>
                </div>

                <div className="cursor-pointer">
                    <AvatarIcon/>
                </div>
            </div>

            <div
            className={`fixed top-0 right-0 z-50 w-[250px] h-full bg-[#FDDF5A] shadow-lg transition-transform duration-300 ${
              isNotificationOpen ? "translate-x-0 " : "translate-x-full"
            }`}
            >   
                <div className="w-full flex p-1">
                    <button
                    onClick={()=>setIsNotificationOpen(false)}
                    className="p-1 rounded-full bg-[#FDDF5A] hover:bg-white border border-black ml-auto"
                    >
                        <X/>
                    </button>
                </div>
                <Notifications/>
            </div>
        </div>
    )
}

export default Header