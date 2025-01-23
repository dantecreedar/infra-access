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


interface SidebarProp{

onToggle: (isOpen: boolean) => void

}
const Sidebar: React.FC<SidebarProp> = ({onToggle}) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle(newState); 
  };

  const user = {
    name: 'Usuario',
    imgSrc: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }


  return (
    <div className="flex min-h-screen">
      
      {/* Sidebar */}
      <div
        className={`bg-[linear-gradient(90deg,_#3c72fc_-10.59%,_#00060c_300.59%)] text-white   ${
          isOpen ? "w-40 " : "w-16"
        } transition-all duration-500 ease-in-out hidden sm:block`}
      >
        
        <div className="flex-1 justify-between items-center p-4 border-gray-700">
        
          <button
            className={`text-xl focus:outline-none transform ${
              isOpen ? "rotate-90" : "rotate-0"
            } transition-transform duration-500`}
            onClick={toggleSidebar}
          >
            {/* Cambiar icono dependiendo del estado */}
            {isOpen ? <FaTimes /> : <FaBars  />}
          </button>
         

          {isOpen && <h1 className="text-lg font-bold text-center">GearthLogic</h1>}
          <div className="flex justify-center gap-3 mt-5">
  <img
    alt=""
    src={user.imgSrc}
    className="inline-block size-6 rounded-full ring-2 ring-white"
  />
  <p className={` ${
              isOpen ? "block" : "hidden"
            } `}>{user.name}</p>
</div>
        </div>

 {/* crear ruta para el dashboard (dashboard routes) */}

        <nav className="mt-6">

          {/* Botón Home */}

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

          {/* Botón Jenkins */}

          <NavLink
            to="/jenkins"
         className="flex items-center gap-4 px-4 py-3 hover:bg-black focus:outline-none focus:bg-black  "
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

          {/* Botón Backend */} 

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

          {/* Botón Frontend */}

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
          

        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
