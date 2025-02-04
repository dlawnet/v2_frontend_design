'use client'
import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Sidenav = () => {
    const pathname = usePathname();

    const links = [
        { name: "Dashboard", link: "/dashboard", image1: "/images/dashboard-w.svg", image2: "/images/dashboard.svg", tag: "Dashboard" },
        { name: "Banks", link: "/dashboard/banks", image1: "/images/bank.svg", image2: "/images/bank-b.svg", tag: "Banks" },
        { name: "Panel Of Experts", link: "/dashboard/panel-of-expert", image1: "/images/graduation.svg", image2: "/images/graduation-b.svg", tag: "PanelOfExperts" },
        { name: "Event Diary", link: "/dashboard/event-diary", image1: "/images/mdi_diary.svg", image2: "/images/mdi_diary-b.svg", tag: "EventDiary" },
        { name: "Moot Courts", link: "/dashboard/moot-courts", image1: "/images/mdi_court-hammer.svg", image2: "/images/mdi_court-hammer-b.svg", tag: "MootCourts" },
    ];

    const selectedMenu = links.find((item) => pathname === item.link)?.tag;

    return (
        <div className="flex w-[300px] py-20 bg-[#491217] helvetica">
            <div className="hidden lg:flex lg:flex-col gap-4 lg:items-center w-full h-full pl-4">
                {links.map((item) => (
                    <Link href={item.link} key={item.tag} className="w-full">
                        <div
                            className={`flex items-center pl-4 py-3 gap-4 w-full rounded-l-full cursor-pointer ${
                                selectedMenu === item.tag ? "bg-[#FDDF5A]" : "bg-[#491217]"
                            }`}
                        >
                            <img src={selectedMenu === item.tag ? item.image2 : item.image1} alt={item.name} />
                            <p
                                className={`text-[.9em] font-medium lora ${
                                    selectedMenu === item.tag ? "text-[#491217]" : "text-white"
                                }`}
                            >
                                {item.name}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidenav;
