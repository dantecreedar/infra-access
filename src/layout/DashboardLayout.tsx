import React, { useState } from "react";
import Sidebar from "../components/SIdebar";
import { Outlet } from "react-router-dom";
import imgBgHome from "../assets/images/banner-solid-left-shape.png";
const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = (isOpen: boolean) => {
    setIsSidebarOpen(isOpen);
  };
  return (
    <div className="flex">
      <Sidebar onToggle={handleSidebarToggle} />
      <div className="flex-1 flex flex-col">
        <Outlet /> {/* rutas hijas */}
        <img
          src={imgBgHome}
          alt=""
          className={`absolute bottom-[342px] hidden md:block transition-all duration-500 ease-in-out ${
            isSidebarOpen ? "w-28" : "w-24"
          }`}
        />
      </div>
    </div>
  );
};

export default DashboardLayout;
