import React, { useState } from "react";
import {
  FaBars,
  FaJenkins,
  FaAws,
  FaServer,
  FaCode,
  FaHome,
  FaTimes,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white h-screen ${
          isOpen ? "w-64" : "w-16"
        } transition-all duration-500 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4 border-gray-700">
          <button
            className={`text-xl focus:outline-none transform ${
              isOpen ? "rotate-90" : "rotate-0"
            } transition-transform duration-500`}
            onClick={toggleSidebar}
          >
            {/* Cambiar icono dependiendo del estado */}
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          {isOpen && <h1 className="text-lg font-bold">tutu</h1>}
        </div>

        <nav className="mt-6">
          {/* Botón Home */}
          <NavLink
            to="/"
            className="flex items-center gap-4 px-4 py-3 hover:bg-gray-700"
          >
            <FaHome />
            <span
              className={`${
                isOpen
                  ? "opacity-100 max-w-full translate-x-0"
                  : "opacity-0 max-w-0 translate-x-6"
              } transition-all duration-500 ease-in-out`}
            >
              Home
            </span>
          </NavLink>
          {/* Botón Jenkins */}
          <NavLink
            to="/jenkins"
            className="flex items-center gap-4 px-4 py-3 hover:bg-gray-700"
          >
            <FaJenkins />
            <span
              className={`${
                isOpen
                  ? "opacity-100 max-w-full translate-x-0"
                  : "opacity-0 max-w-0 translate-x-6"
              } transition-all duration-500 ease-in-out`}
            >
              Jenkins
            </span>
          </NavLink>
          {/* Botón AWS */}
          <NavLink
            to="/aws"
            className="flex items-center gap-4 px-4 py-3 hover:bg-gray-700"
          >
            <FaAws />
            <span
              className={`${
                isOpen
                  ? "opacity-100 max-w-full translate-x-0"
                  : "opacity-0 max-w-0 translate-x-6"
              } transition-all duration-500 ease-in-out`}
            >
              AWS
            </span>
          </NavLink>
          {/* Botón Backend */}
          <NavLink
            to="/backend"
            className="flex items-center gap-4 px-4 py-3 hover:bg-gray-700"
          >
            <FaServer />
            <span
              className={`${
                isOpen
                  ? "opacity-100 max-w-full translate-x-0"
                  : "opacity-0 max-w-0 translate-x-6"
              } transition-all duration-500 ease-in-out`}
            >
              Backend
            </span>
          </NavLink>
          {/* Botón Frontend */}
          <NavLink
            to="/frontend"
            className="flex items-center gap-4 px-4 py-3 hover:bg-gray-700"
          >
            <FaCode />
            <span
              className={`${
                isOpen
                  ? "opacity-100 max-w-full translate-x-0"
                  : "opacity-0 max-w-0 translate-x-6"
              } transition-all duration-500 ease-in-out`}
            >
              Frontend
            </span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
