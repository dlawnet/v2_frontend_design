import { Outlet } from "react-router-dom";
import Sidebar from "./dashboard/Sidebar";

function DashboardLayouts() {
  return (
    <div className="md:flex h-screen">
      <Sidebar />
      <div className="flex-grow md:pl-[25%] lg:pl-[15%] py-14 px-6 my-14">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayouts;
