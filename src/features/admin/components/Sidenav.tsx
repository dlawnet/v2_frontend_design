'use client'
import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { 
    User, 
    CustomerIcon, 
    PaymentIcon,
    CustomerIcon2, 
    PaymentIcon2, 
    EventIcon, 
    EventIcon2,
    ExpertIcon, 
    ExpertIcon2,
    ActivateIcon, 
    HomeIcon, 
    MootIcon, 
    HomeIcon2,
    User2,
    MootIcon2,
    ActivateIcon2
} from '@app/icons';

const Sidenav = () => {
    const pathname = usePathname();

    const links = [
        { name: "Dashboard", link: "/admin", icon: <HomeIcon className='w-6 h-5'/>, iconWhite: <HomeIcon2 className='w-6 h-5'/>, tag: "Dashboard" },
        { name: "Users", link: "/admin/users", icon: <User2 className='w-6 h-5'/>, iconWhite: <User className='w-6 h-5'/>, tag: "Users" },
        { name: "Panel Of Experts", link: "/admin/panel-of-experts", icon: <ExpertIcon2 className='w-6 h-5'/>, iconWhite: <ExpertIcon className='w-6 h-5'/>, tag: "PanelOfExperts" },
        { name: "Event Diary", link: "/admin/event-diary", icon: <EventIcon className='w-6 h-5'/>, iconWhite: <EventIcon2 className='w-6 h-5'/>, tag: "EventDiary" },
        { name: "Moot Courts", link: "/admin/moot-courts", icon: <MootIcon size='mid'/>, iconWhite: <MootIcon2 size='mid'/>, tag: "MootCourts" },
        { name: "Activation and Topup", link: "/admin/activation", icon: <ActivateIcon size='mid'/>, iconWhite: <ActivateIcon2 size='mid'/>, tag: "ActicationTopup" },
        { name: "Customer Services", link: "/admin/customer-service", icon: <CustomerIcon2 size='mid'/>, iconWhite: <CustomerIcon size='mid'/>, tag: "CustomerServices" },
        { name: "Payment Verification", link: "/admin/payment", icon: <PaymentIcon size='mid'/>, iconWhite: <PaymentIcon2 size='mid'/>, tag: "PaymentVerification" },
    ];

    const selectedMenu = links.find((item) => pathname === item.link)?.tag;

    return (
        <div className="h-full flex flex-col w-[300px] bg-[#491217] helvetica">
            <div className='w-full py-2 pl-10'>
                <img src="/images/logo.svg" alt="Logo" />
            </div>

            <div className="hidden lg:flex lg:flex-col gap-4 lg:items-center w-full h-full pl-4  py-10">
                {links.map((item) => (
                    <Link href={item.link} key={item.tag} className="w-full">
                        <div
                            className={`flex items-center pl-4 py-3 gap-4 w-full rounded-l-full cursor-pointer ${
                                selectedMenu === item.tag ? "bg-[#FDDF5A]" : "bg-[#491217]"
                            }`}
                        >
                            <div className=''>
                                {
                                    selectedMenu === item.tag 
                                    ? <div>{item.icon}</div>
                                    : <div>{item.iconWhite}</div>
                                }
                            </div>
                            <p
                                className={`text-[.9em] font-medium ${
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
