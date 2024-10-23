"use client";
import React, { useState } from "react";
import Dashboard from "@app/components/dashboard/Dashboard";
import BanksPage1 from "@app/components/dashboard/banks/BanksPage1";
import BanksPage2 from "@app/components/dashboard/banks/BanksPage2";
import PanelOfExperts from "@app/components/dashboard/panelOfExperts/PanelOfExperts";
import MootCourtsPage1 from "@app/components/dashboard/moot-courts/MootCourtsPage1";
import Videos from "@app/components/dashboard/moot-courts/Videos";
import PersonalEventDiary from "@app/components/dashboard/event-diary/PersonalEventDiary";
import UserProfile from "@app/components/dashboard/event-diary/UserProfile";
import LawSociety from "@app/components/dashboard/event-diary/LawSociety";
import Header2 from "@app/components/header/Header2";

const Page = () => {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const [bankPage, setBankPage] = useState("BanksPage1");

  return (
    <div className="w-full">
      {/* Header start */}
      <Header2 />
      {/* Header ends */}

      {/* Main content start */}
      <div className="flex gap-5">
        {/* Left Menu start */}
        <div className="hidden w-[247px] h-lvh bg-[#491217] lg:flex flex-col items-end pt-20">
          <div
            className={`flex items-center pl-5 gap-2 w-[200px] rounded-l-full h-[59px] cursor-pointer mb-5 ${
              selectedMenu === "Dashboard" ? "bg-[#FDDF5A]" : "bg-[#491217]"
            }`}
            onClick={() => setSelectedMenu("Dashboard")}
          >
            <img src="/images/dashboard.svg" alt="Dashboard" />
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
            <img src="/images/bank.svg" alt="Banks" />
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
            <img src="/images/graduation.svg" alt="Panel Of Experts" />
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
            <img src="/images/mdi_diary.svg" alt="Event Diary" />
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
            <img src="/images/mdi_court-hammer.svg" alt="Moot Courts" />
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
        {/* Left Menu ends */}

        <div className="w-full lg:w-[75%]">
          {selectedMenu === "Dashboard" && <Dashboard />}
          {selectedMenu === "Banks" &&
            (bankPage === "BanksPage1" ? (
              <BanksPage1 setBankPage={setBankPage} />
            ) : (
              <BanksPage2 />
            ))}
          {selectedMenu === "PanelOfExperts" && <PanelOfExperts />}
          {selectedMenu === "MootCourts" && <Videos />}
          {/* {selectedMenu === "MootCourts" && <MootCourtsPage1 />} */}
          {selectedMenu === "EventDiary" && <UserProfile />}
        </div>
      </div>
      {/* Main content end */}
    </div>
  );
};

export default Page;
