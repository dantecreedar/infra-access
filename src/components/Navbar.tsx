import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import AccountMenu from "./AcountMenu";
import NotificationPanel from "./NotificationPanel";
import SidebarMobile from "./SidebarMobile";
import SearchPanel from "./SearchPanel";
import { Tooltip } from "@mui/material";
import { motion } from "framer-motion"; // Importamos Framer Motion

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      {/* Navbar con animación difuminada */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4,ease: "easeOut" }}
        className="text-white p-3 flex flex-nowrap justify-between items-center bg-[linear-gradient(210deg,_#3c72fc_-10.59%,_#00060c_300.59%)]"
      >
        
        <div className="flex-grow mx-4 relative w-full sm:w-auto mb-2 sm:mb-0">
          <SearchPanel />
        </div>

      
        <div className="flex items-center justify-center space-x-4 w-full sm:w-auto">
          <Tooltip title="Notificaciones">
            <div className="relative hidden sm:block">
              <NotificationPanel />
            </div>
          </Tooltip>
          <button onClick={toggleMenu} className="block sm:hidden">
            <FaBars />
          </button>
        </div>
        <div className="hidden sm:block">
          <AccountMenu />
        </div>
      </motion.nav>

      
      {openMenu && (
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Inicia difuminado y desplazado desde la izquierda
          animate={{ opacity: 1, x: 0 }} // Termina completamente visible y en posición
          exit={{ opacity: 0, x: -100 }} // Al cerrarse, vuelve a la posición inicial
          transition={{ duration: 0.5, ease: "easeOut" }} // Transición más rápida
        >
          <SidebarMobile isOpen={openMenu} onClose={() => setOpenMenu(false)} />
        </motion.div>
      )}
    </>
  );
};

export default Navbar;