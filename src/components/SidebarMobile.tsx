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
import { motion } from "framer-motion"; // Importamos framer-motion
import logo from "../../public/gearth.png";
import NotificationPanel from "./NotificationPanel";
const SidebarMobile: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
 

  return (
    <motion.div
      className={`fixed top-0 left-0 h-full bg-[linear-gradient(90deg,_#3c72fc_-10.59%,_#00060c_300.59%)] text-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
      style={{ width: "250px" }}
      initial={{ x: '-100%' }} // Inicializa fuera de la pantalla a la izquierda
      animate={{ x: isOpen ? 0 : '-100%' }} // Se mueve dentro de la pantalla o hacia afuera
      transition={{ duration: 0.5, ease: "easeInOut" }} // Duración y easing para el movimiento
    >
      {/* Header del sidebar */}
      <div className="flex items-center justify-between p-4">
      <motion.img
                src={logo}
                alt=""
                width={60}
                className="flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
              />
        <button className="text-white focus:outline-none" onClick={onClose}>
          <FaTimes />
        </button>
      </div>

      {/* Información del usuario */}
     

      {/* Usuario */}
      <div className="flex justify-center">
        <AccountMenu />
        <div className="relative ">
              <NotificationPanel />
            </div>
      </div>
    
      {/* Navegación */}
      <motion.nav
        className="mt-6"
        initial={{ opacity: 0 }} // Comienza invisible
        animate={{ opacity: 1 }} // Finaliza con opacidad 1
        transition={{ duration: 0.5, delay: 0.3 }} // Transición suave con retardo
      >
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
        <hr />
      </motion.nav>
    </motion.div>
  );
};

export default SidebarMobile;