import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import AccountMenu from "./AcountMenu";
import NotificationPanel from "./NotificationPanel";
import SidebarMobile from "./SidebarMobile";
import SearchPanel from "./SearchPanel";
import { Tooltip } from "@mui/material";

const Navbar: React.FC = () => {
  // const [showNotifications, setShowNotifications] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  // const toggleNotifications = () => {
  //   setShowNotifications(!showNotifications);
  // };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <nav className=" text-white p-3 flex flex-nowrap justify-between items-center bg-[linear-gradient(210deg,_#3c72fc_-10.59%,_#00060c_300.59%)]" >
        {/* Logo */}
       

        {/* Search */}
        <div className="flex-grow mx-4 relative w-full sm:w-auto mb-2 sm:mb-0">
        <SearchPanel/>
        </div>

        {/* Right section */}
        <div className="flex items-center justify-center space-x-4 w-full sm:w-auto">
        <Tooltip title='Notificaciones'>
          <div className="relative hidden sm:block">
          

          <NotificationPanel/>
          </div>
             </Tooltip>
          
          <button onClick={toggleMenu} className="block sm:hidden   "><FaBars /></button>
        </div>
        <div className="hidden sm:block">

        <AccountMenu />
        </div>
      </nav>

      {/* Sidebar */}
      <SidebarMobile isOpen={openMenu} onClose={() => setOpenMenu(false)} />
    </>
  );
};

export default Navbar;