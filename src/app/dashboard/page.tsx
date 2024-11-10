// "use client";
// import React, {useState} from "react";
// import BanksPage1 from "@app/components/dashboard/banks/BanksPage1";
// import BanksPage2 from "@app/components/dashboard/banks/BanksPage2";
// import PanelOfExperts from "@app/components/dashboard/panelOfExperts/PanelOfExperts";
// import Videos from "@app/components/dashboard/moot-courts/Videos";
// import PersonalEventDiary from "@app/components/dashboard/event-diary/PersonalEventDiary";
// import Header from "@app/features/dashboard/components/Header";
// import Dashboard from "@app/features/dashboard/components/Dashboard";

// const Page = () => {
//   const [selectedMenu, setSelectedMenu] = useState("Dashboard");
//   const [bankPage, setBankPage] = useState("BanksPage1");

//   return (
//     <div className="w-full h-screen flex flex-col">
//       {/* Header start */}
//       <div className="fixed top-0 left-0 w-full z-10">
//         <Header />
//       </div>
//       {/* Header ends */}

//       {/* Main content start */}
//       <div className="flex flex-1 pt-[70px]">
//         {/* Left Menu start */}
//         <div className="hidden lg:flex lg:flex-col lg:items-end w-[247px] h-full bg-[#491217] pt-20 fixed">
//           <div
//             className={`flex items-center pl-5 gap-2 w-[200px] rounded-l-full h-[59px] cursor-pointer mb-5 ${
//               selectedMenu === "Dashboard" ? "bg-[#FDDF5A]" : "bg-[#491217]"
//             }`}
//             onClick={() => setSelectedMenu("Dashboard")}
//           >
//             {selectedMenu === "Dashboard" ? (
//               <img src="/images/dashboard.svg" alt="Dashboard" />
//             ) : (
//               <img src="/images/dashboard-w.svg" alt="Dashboard" />
//             )}
//             <p
//               className={`text-lg font-bold ${
//                 selectedMenu === "Dashboard" ? "text-[#491217]" : "text-white"
//               }`}
//             >
//               Dashboard
//             </p>
//           </div>
//           <div
//             className={`flex items-center pl-5 gap-2 w-[200px] rounded-l-full h-[59px] cursor-pointer mb-5 ${
//               selectedMenu === "Banks" ? "bg-[#FDDF5A]" : "bg-[#491217]"
//             }`}
//             onClick={() => setSelectedMenu("Banks")}
//           >
//             {selectedMenu === "Banks" ? (
//               <img src="/images/bank-b.svg" alt="Banks" />
//             ) : (
//               <img src="/images/bank.svg" alt="Banks" />
//             )}
//             <p
//               className={`text-lg font-bold ${
//                 selectedMenu === "Banks" ? "text-[#491217]" : "text-white"
//               }`}
//             >
//               Banks
//             </p>
//           </div>
//           <div
//             className={`flex items-center pl-5 gap-2 w-[200px] rounded-l-full h-[59px] cursor-pointer mb-5 ${
//               selectedMenu === "PanelOfExperts"
//                 ? "bg-[#FDDF5A]"
//                 : "bg-[#491217]"
//             }`}
//             onClick={() => setSelectedMenu("PanelOfExperts")}
//           >
//             {selectedMenu === "PanelOfExperts" ? (
//               <img src="/images/graduation-b.svg" alt="Panel Of Experts" />
//             ) : (
//               <img src="/images/graduation.svg" alt="Panel Of Experts" />
//             )}
//             <p
//               className={`text-lg font-bold ${
//                 selectedMenu === "PanelOfExperts"
//                   ? "text-[#491217]"
//                   : "text-white"
//               }`}
//             >
//               Panel Of Experts
//             </p>
//           </div>
//           {/*  */}
//           <div
//             className={`flex items-center pl-5 gap-2 w-[200px] rounded-l-full h-[59px] cursor-pointer mb-5 ${
//               selectedMenu === "EventDiary" ? "bg-[#FDDF5A]" : "bg-[#491217]"
//             }`}
//             onClick={() => setSelectedMenu("EventDiary")}
//           >
//             {selectedMenu === "EventDiary" ? (
//               <img src="/images/mdi_diary-b.svg" alt="Event Diary" />
//             ) : (
//               <img src="/images/mdi_diary.svg" alt="Event Diary" />
//             )}
//             <p
//               className={`text-lg font-bold ${
//                 selectedMenu === "EventDiary" ? "text-[#491217]" : "text-white"
//               }`}
//             >
//               Event Diary
//             </p>
//           </div>

//           {/* Moot court */}
//           <div
//             className={`flex items-center pl-5 gap-2 w-[200px] rounded-l-full h-[59px] cursor-pointer mb-5 ${
//               selectedMenu === "MootCourts" ? "bg-[#FDDF5A]" : "bg-[#491217]"
//             }`}
//             onClick={() => setSelectedMenu("MootCourts")}
//           >
//             {selectedMenu === "MootCourts" ? (
//               <img src="/images/mdi_court-hammer-b.svg" alt="Moot Courts" />
//             ) : (
//               <img src="/images/mdi_court-hammer.svg" alt="Moot Courts" />
//             )}
//             <p
//               className={`text-lg font-bold ${
//                 selectedMenu === "MootCourts" ? "text-[#491217]" : "text-white"
//               }`}
//             >
//               Moot Courts
//             </p>
//           </div>
//           {/* Moot court */}
//         </div>

//         {/* Left Menu ends */}

//         {/* Scrollable Content Area */}
//         <div className="flex-1 lg:ml-[247px] overflow-y-auto">
//           {selectedMenu === "Dashboard" && <Dashboard />}
//           {selectedMenu === "Banks" &&
//             (bankPage === "BanksPage1" ? (
//               <BanksPage1 setBankPage={setBankPage} />
//             ) : (
//               <BanksPage2 />
//             ))}
//           {selectedMenu === "PanelOfExperts" && <PanelOfExperts />}
//           <div className="lg:ml-[0px]">
//             {selectedMenu === "EventDiary" && <PersonalEventDiary />}
//             {/* {selectedMenu === "EventDiary" && <UserProfile />} */}
//           </div>
//           {selectedMenu === "MootCourts" && <Videos />}
//         </div>
//       </div>
//       {/* Main content end */}
//     </div>
//   );
// };

// export default Page;

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
