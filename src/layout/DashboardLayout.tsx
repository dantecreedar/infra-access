import React, { useEffect, useState } from "react";
import Sidebar from "../components/SIdebar";
import { Outlet } from "react-router-dom";
import Swal from "sweetalert2"; // Asegúrate de importar correctamente SweetAlert2
import imgBgHome from "../assets/images/banner-solid-left-shape.png";
import { motion } from "framer-motion";


const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = (isOpen: boolean) => {
    setIsSidebarOpen(isOpen);
  };

  useEffect(() => {
   setTimeout(() => {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 1580,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });

    Toast.fire({
      icon: "success",
      title: "Sesion iniciada",
    });
   }, 1200);
  }, []);

  return (
    <div className="flex">
      <Sidebar onToggle={handleSidebarToggle} />
      <div className="flex-1 flex flex-col">
        <Outlet /> {/* rutas hijas */}
        <motion.img
        src={imgBgHome}
        alt=""
        className={`absolute bottom-[342px] hidden sm:block transition-all duration-500 ease-in-out ${
          isSidebarOpen ? "w-28" : "w-24"
        }`}
        initial={{ opacity: 0, y: 0 }} // Inicialmente oculta y desplazada hacia arriba
        animate={{ opacity: 1, y: 0 }} // Se hace visible y vuelve a su posición original
        transition={{
          duration: 3,  // Duración de la animación
          ease: "easeOut", // Tipo de transición
          delay: 0.6 // Retardo antes de iniciar
        }}
      />
     
      </div>
    </div>
  );
};

export default DashboardLayout;