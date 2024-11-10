'use client'
import React, { useState } from 'react'

const Sidenav = () => {
    const [selectedMenu, setSelectedMenu] = useState("Dashboard");

    return (
        <div className="flex w-[300px]">
        {/* Left Menu start */}
        <div className="hidden lg:flex lg:flex-col lg:items-end w-full h-full bg-[#491217]">
          <div
            className={`flex items-center pl-5 gap-2 w-[200px] rounded-l-full h-[59px] cursor-pointer mb-5 ${
              selectedMenu === "Dashboard" ? "bg-[#FDDF5A]" : "bg-[#491217]"
            }`}
            onClick={() => setSelectedMenu("Dashboard")}
          >
            {selectedMenu === "Dashboard" ? (
              <img src="/images/dashboard.svg" alt="Dashboard" />
            ) : (
              <img src="/images/dashboard-w.svg" alt="Dashboard" />
            )}
            <p
              className={`text-lg font-bold ${
                selectedMenu === "Dashboard" ? "text-[#491217]" : "text-white"
              }`}
            >
              Dashboard
            </p>
          </div>
          <div
            className={`flex items-center pl-5 gap-2 w-[200px] rounded-l-full h-[59px] cursor-pointer mb-5 ${
              selectedMenu === "Banks" ? "bg-[#FDDF5A]" : "bg-[#491217]"
            }`}
            onClick={() => setSelectedMenu("Banks")}
          >
            {selectedMenu === "Banks" ? (
              <img src="/images/bank-b.svg" alt="Banks" />
            ) : (
              <img src="/images/bank.svg" alt="Banks" />
            )}
            <p
              className={`text-lg font-bold ${
                selectedMenu === "Banks" ? "text-[#491217]" : "text-white"
              }`}
            >
              Banks
            </p>
          </div>
          <div
            className={`flex items-center pl-5 gap-2 w-[200px] rounded-l-full h-[59px] cursor-pointer mb-5 ${
              selectedMenu === "PanelOfExperts"
                ? "bg-[#FDDF5A]"
                : "bg-[#491217]"
            }`}
            onClick={() => setSelectedMenu("PanelOfExperts")}
          >
            {selectedMenu === "PanelOfExperts" ? (
              <img src="/images/graduation-b.svg" alt="Panel Of Experts" />
            ) : (
              <img src="/images/graduation.svg" alt="Panel Of Experts" />
            )}
            <p
              className={`text-lg font-bold ${
                selectedMenu === "PanelOfExperts"
                  ? "text-[#491217]"
                  : "text-white"
              }`}
            >
              Panel Of Experts
            </p>
          </div>
          {/*  */}
          <div
            className={`flex items-center pl-5 gap-2 w-[200px] rounded-l-full h-[59px] cursor-pointer mb-5 ${
              selectedMenu === "EventDiary" ? "bg-[#FDDF5A]" : "bg-[#491217]"
            }`}
            onClick={() => setSelectedMenu("EventDiary")}
          >
            {selectedMenu === "EventDiary" ? (
              <img src="/images/mdi_diary-b.svg" alt="Event Diary" />
            ) : (
              <img src="/images/mdi_diary.svg" alt="Event Diary" />
            )}
            <p
              className={`text-lg font-bold ${
                selectedMenu === "EventDiary" ? "text-[#491217]" : "text-white"
              }`}
            >
              Event Diary
            </p>
          </div>

          {/* Moot court */}
          <div
            className={`flex items-center pl-5 gap-2 w-[200px] rounded-l-full h-[59px] cursor-pointer mb-5 ${
              selectedMenu === "MootCourts" ? "bg-[#FDDF5A]" : "bg-[#491217]"
            }`}
            onClick={() => setSelectedMenu("MootCourts")}
          >
            {selectedMenu === "MootCourts" ? (
              <img src="/images/mdi_court-hammer-b.svg" alt="Moot Courts" />
            ) : (
              <img src="/images/mdi_court-hammer.svg" alt="Moot Courts" />
            )}
            <p
              className={`text-lg font-bold ${
                selectedMenu === "MootCourts" ? "text-[#491217]" : "text-white"
              }`}
            >
              Moot Courts
            </p>
          </div>
          {/* Moot court */}
        </div>
        </div>
    )
}

export default Sidenav