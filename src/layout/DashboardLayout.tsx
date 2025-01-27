import React, { useEffect, useState } from "react";
import Sidebar from "../components/SIdebar";
import { Outlet } from "react-router-dom";
import Swal from "sweetalert2";
import imgBgHome from "../assets/images/banner-solid-left-shape.png";
import { motion } from "framer-motion"; 

const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = (isOpen: boolean) => {
    setIsSidebarOpen(isOpen);
  };

  useEffect(() => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
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
  }, []);

  return (
    <div className="flex">
      {/* Sidebar con animación de entrada difuminada */}
      <motion.div
        initial={{ opacity: 0, x: -50 }} // Inicia difuminado y desplazado a la izquierda
        animate={{ opacity: 1, x: 0 }} // Termina completamente visible y en posición
        transition={{ duration: 0.8, ease: "easeOut" }} // Animación suave
      >
        <Sidebar onToggle={handleSidebarToggle} />
      </motion.div>

      {/* Contenido principal con animación de entrada difuminada */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Inicia difuminado y desplazado hacia abajo
        animate={{ opacity: 1, y: 0 }} // Termina completamente visible y en posición
        transition={{ duration: 1, ease: "easeOut" }} // Animación suave
        className="flex-1 flex flex-col"
      >
        <Outlet /> {/* rutas hijas */}
        {/* Imagen de fondo con transición */}
        <img
          src={imgBgHome}
          alt=""
          className={`absolute bottom-[342px] hidden md:block transition-all duration-500 ease-in-out ${
            isSidebarOpen ? "w-28" : "w-24"
          }`}
        />
      </motion.div>
    </div>
  );
};

export default DashboardLayout;