import React, { useEffect, useState } from "react";
import {
  FaCloud,
  FaServer,
  FaBell,
  FaShieldAlt,
  FaCodeBranch,
  FaSlack,
} from "react-icons/fa";
// import imgBgHome from "../assets/images/banner-solid-left-shape.png";
import imgShape from "../assets/images/offter-item-shape-top.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import { motion } from "framer-motion";
import Floting from "../components/Floting";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="w-16 h-16" color="border-grey-400" />
      </div>
    );
  }

  return (
    <motion.div
      className="relative bg-white"
      initial={{ opacity: 0, y: 50 }} // Comienza invisible y desplazado
      animate={{ opacity: 1, y: 0 }} // Se hace visible y vuelve a su posición original
      transition={{
        duration: 1, // Duración de la animación
        ease: "easeOut", // Tipo de transición
        delay: 0.2, // Retraso antes de empezar
      }}
    >
      <Navbar />
      {/* <img src={imgBgHome} alt="" className="absolute w-28 hidden md:block" /> */}
      {/* Contenido principal */}
      <div className="relative z-10 p-5 text-black">
        {/* Título principal */}
        <h1 className="text-5xl font-extrabold text-center tracking-wide drop-shadow-lg">
          Panel de sistemas
        </h1>
        <p className="mt-4 text-lg text-center max-w-3xl mx-auto drop-shadow-sm">
          Gestión de infraestructura, integración continua y servicios críticos
          con escalabilidad y seguridad en la nube. TUTU APP
        </p>

        {/* Cards informativas lg:grid-cols-3 side rgb(21 47 84) */}
        <div className="grid grid-cols-1 md:grid-cols-2 p-3 gap-8 mt-2 max-w-5xl mx-auto">
          {/* Card: Infraestructura */}
          <div className="bg-white text-gray-800 border border-gray-400 rounded-lg shadow-lg p-4 transform hover:scale-105 transition duration-300 relative">
            {/* Imagen fija en la esquina */}
            <img
              src={imgShape}
              alt=""
              className="absolute top-0 right-[-1px] w-12 h-12"
            />
            <div className="flex items-center gap-4">
              <FaCloud className="text-blue-600 text-4xl" />
              <h2 className="text-2xl font-bold text-gray-900">Infraestructura</h2>
            </div>
            <p className="mt-4 text-gray-700">
              Cloudflare como servidor proxy y DigitalOcean como proveedor
              principal de servidores escalables. Implementado para manejar picos
              de carga.
            </p>
          </div>

          {/* Card: Notificaciones */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg border border-gray-400 p-4 transform hover:scale-105 transition duration-300">
            <img
              src={imgShape}
              alt=""
              className="absolute top-0 right-[-1px] w-12 h-12"
            />
            <div className="flex items-center gap-4">
              <FaBell className="text-yellow-600 text-4xl" />
              <h2 className="text-2xl font-bold">Notificaciones</h2>
            </div>
            <p className="mt-4">
              FCM implementado para notificaciones transaccionales y
              promocionales, asegurando una comunicación efectiva con los
              usuarios.
            </p>
          </div>

          {/* Card: CI/CD */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-4 border border-gray-400 transform hover:scale-105 transition duration-300">
            <img
              src={imgShape}
              alt=""
              className="absolute top-0 right-[-1px] w-12 h-12"
            />
            <div className="flex items-center gap-4">
              <FaCodeBranch className="text-green-600 text-4xl" />
              <h2 className="text-2xl font-bold">Integración Continua</h2>
            </div>
            <p className="mt-4">
              GitHub Actions implementado para automatización y despliegues a
              DigitalOcean. En proceso de implementación de nuevas pruebas de
              integración.
            </p>
          </div>

          {/* Card: Seguridad */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-4 border border-gray-400 transform hover:scale-105 transition duration-300">
            <img
              src={imgShape}
              alt=""
              className="absolute top-0 right-[-1px] w-12 h-12"
            />
            <div className="flex items-center gap-4">
              <FaShieldAlt className="text-red-600 text-4xl" />
              <h2 className="text-2xl font-bold">Seguridad</h2>
            </div>
            <p className="mt-4">
              Prácticas avanzadas como HTTPS y cifrado de datos están
              implementadas. Gestión de accesos en proceso de fortalecimiento.
            </p>
          </div>

          {/* Card: Patrones de despliegue */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-4 border border-gray-400 transform hover:scale-105 transition duration-300">
            <img
              src={imgShape}
              alt=""
              className="absolute top-0 right-[-1px] w-12 h-12"
            />
            <div className="flex items-center gap-4">
              <FaServer className="text-purple-600 text-4xl" />
              <h2 className="text-2xl font-bold">Patrones de Despliegue</h2>
            </div>
            <p className="mt-4">
              Blue-Green y Canary deployments implementados para despliegues
              seguros. Explorando nuevos patrones de despliegue automatizado.
            </p>
          </div>

          {/* Card: Comunicación */}
          <div className="bg-white text-gray-800 rounded-lg shadow-xl p-4 border border-gray-400 transform hover:scale-105 transition duration-300">
            <img
              src={imgShape}
              alt=""
              className="absolute top-0 right-[-1px] w-12 h-12"
            />
            <div className="flex items-center gap-4">
              <FaSlack className="text-purple-600 text-4xl" />
              <h2 className="text-2xl font-bold">Canales de Comunicación</h2>
            </div>
            <p className="mt-4">
              Slack implementado como canal principal para reportes de estado,
              notificaciones de tareas y coordinación en tiempo real.
            </p>
          </div>
        </div>
      </div>
      <Floting/>
      <Footer />
    </motion.div>
  );
};

export default Home;