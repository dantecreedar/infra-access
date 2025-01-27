import React from "react";
import {
  FaJenkins,
  FaAws,
  FaServer,
  FaCode,
  FaHome,
  FaTimes,

} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import AccountMenu from "./AcountMenu";

const SidebarMobile: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const user = {
    name: "Usuario",
    imgSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    mail: "user@mail.com",

  };
  
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-[linear-gradient(90deg,_#3c72fc_-10.59%,_#00060c_300.59%)] text-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
      style={{ width: "250px" }}
    >
      {/* Header del sidebar */}
      <div className="flex items-center justify-between p-4">
        <h1 className="text-lg font-bold">GearthLogic</h1>
        <button className="text-white focus:outline-none" onClick={onClose}>
          <FaTimes />
        </button>
      </div>
      <div className="relative flex justify-center gap-6 ">
       

        <p>{user.mail}</p>
      </div>
      {/* Usuario */}
      <div className="flex justify-center">

      <AccountMenu />
      </div>

      {/* Navegación */}
      <nav className="mt-6">
        <NavLink
          to="/"
          className="flex items-center gap-4 px-4 py-3 hover:bg-black focus:outline-none focus:bg-black"
        >
          <FaHome />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/jenkins"
          className="flex items-center gap-4 px-4 py-3 hover:bg-black focus:outline-none focus:bg-black"
        >
          <FaJenkins />
          <span>Jenkins</span>
        </NavLink>
        <NavLink
          to="/aws"
          className="flex items-center gap-4 px-4 py-3 hover:bg-black focus:outline-none focus:bg-black"
        >
          <FaAws />
          <span>AWS</span>
        </NavLink>
        <NavLink
          to="/backend"
          className="flex items-center gap-4 px-4 py-3 hover:bg-black focus:outline-none focus:bg-black"
        >
          <FaServer />
          <span>Backend</span>
        </NavLink>
        <NavLink
          to="/frontend"
          className="flex items-center gap-4 px-4 py-3 hover:bg-black focus:outline-none focus:bg-black"
        >
          <FaCode />
          <span>Frontend</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default SidebarMobile;
