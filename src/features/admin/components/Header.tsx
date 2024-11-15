"use client";
import React, { useState } from "react";
import { Bell, X } from "lucide-react";
import Notifications from "./Notifications";

const Header = () => {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    const toggleNotificationPanel = () => {
        setIsNotificationOpen(!isNotificationOpen);
    };
    
    return (
        <div 
        className="relative"
        >
            
            <button
            onClick={toggleNotificationPanel}
            className="p-1 rounded-full bg-[#FDDF5A] hover:bg-white border border-black focus:outline-none"
            >
              <Bell className="w-4 h-4"/>
            </button>

            <div
            className={`fixed top-0 right-0 w-[250px] h-full bg-[#FDDF5A] shadow-lg transition-transform duration-300 ${
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