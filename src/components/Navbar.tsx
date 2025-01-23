import React, { useState } from "react";
import { FaSearch, FaBell, FaBars } from "react-icons/fa";
import logo from "../../public/gearth.png";
import Notification from "./Notification";
import SidebarMobile from "./SidebarMobile";

const Navbar: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
const user = {
mail: "usuario@mail.com",
notification: 5

}
  return (
    <>
      <nav className=" text-white p-3 flex flex-nowrap justify-between items-center" style={{backgroundColor: "#0f0d1d"}}>
        {/* Logo */}
        <div className="flex items-center mb-2 sm:mb-0">
          <img src={logo} alt="Logo" className="h-8 sm:w-8 w-20 mr-3" />
        </div>

        {/* Search */}
        <div className="flex-grow mx-4 relative w-full sm:w-auto mb-2 sm:mb-0">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full sm:w-64 p-2 pl-10 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Right section */}
        <div className="flex items-center justify-center space-x-4 w-full sm:w-auto">
          <div className="relative hidden sm:block">
            <button
              className="relative text-gray-400 hover:text-white"
              onClick={toggleNotifications}
            >
              <FaBell className="w-6 h-6 text-white hover:text-blue-400" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
               {user.notification}
              </span>
            </button>
            {showNotifications && <Notification />}
          </div>
          <p className="hidden sm:block">{user.mail}</p>
          <button onClick={toggleMenu} className="block sm:hidden   "><FaBars /></button>
        </div>
      </nav>

      {/* Sidebar */}
      <SidebarMobile isOpen={openMenu} onClose={() => setOpenMenu(false)} />
    </>
  );
};

export default Navbar;