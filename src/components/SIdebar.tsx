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
import logo from "../../public/gearth.png";
import { motion } from "framer-motion";

interface SidebarProp {
  onToggle: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProp> = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle(newState);
  };

  return (
    <motion.div
      className="flex min-h-screen"
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      exit={{ x: -250 }}
      transition={{ duration: 0.8 }}
    >
      {/* Sidebar */}
      <motion.div
        className={`bg-[linear-gradient(90deg,_#3c72fc_-10.59%,_#00060c_300.59%)] text-white ${
          isOpen ? "w-40" : "w-16"
        } transition-all duration-500 ease-in-out hidden sm:block`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex-1 justify-between items-center p-4 border-gray-700">
          <button
            className={`text-xl focus:outline-none transform ${
              isOpen ? "rotate-90" : "rotate-0"
            } transition-transform duration-500`}
            onClick={toggleSidebar}
          >
            {/* Cambiar icono dependiendo del estado */}
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className="flex justify-center mt-5">
            {isOpen && (
              <motion.img
                src={logo}
                alt=""
                width={60}
                className="flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
              />
            )}
          </div>
        </div>

        {/* Crear ruta para el dashboard (dashboard routes) */}
        <motion.nav className="mt-6">
          {/* Botón Home */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <NavLink
              to="/home"
              className="flex items-center gap-4 px-4 py-3 hover:bg-[rgb(15, 13, 29)] focus:outline-none focus:bg-[rgb(15, 13, 29)]"
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
          </motion.div>

          {/* Botón Jenkins */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <NavLink
              to="/jenkins"
              className="flex items-center gap-4 px-4 py-3 hover:bg-black focus:outline-none focus:bg-black"
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
          </motion.div>

          {/* Botón AWS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <NavLink
              to="/aws"
              className="flex items-center gap-4 px-4 py-3 hover:bg-black focus:outline-none focus:bg-black"
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
          </motion.div>

          {/* Botón Backend */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <NavLink
              to="/backend"
              className="flex items-center gap-4 px-4 py-3 hover:bg-black focus:outline-none focus:bg-black"
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
          </motion.div>

          {/* Botón Frontend */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <NavLink
              to="/frontend"
              className="flex items-center gap-4 px-4 py-3 hover:bg-black focus:outline-none focus:bg-black"
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
          </motion.div>
        </motion.nav>
        <hr />
        <div className="flex justify-center gap-3 mt-3 absolute left-4"></div>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;