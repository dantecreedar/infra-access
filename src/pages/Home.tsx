import React from "react";
import {
  FaCloud,
  FaServer,
  FaBell,
  FaShieldAlt,
  FaCodeBranch,
  FaSlack,
} from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div className="relative md:h-screen bg-gradient-to-br from-blue-500 to-indigo-900">
      {/* Fondo animado */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/path/to/animated-background.gif')] bg-cover bg-center opacity-20"></div>

      {/* Contenido principal */}
      <div className="relative z-10 p-6 text-white">
        {/* Título principal */}
        <h1 className="text-5xl font-extrabold text-center tracking-wide drop-shadow-lg">
          Gearthlogic
        </h1>
        <p className="mt-4 text-lg text-center max-w-3xl mx-auto drop-shadow-sm">
          Gestión de infraestructura, integración continua y servicios críticos
          con escalabilidad y seguridad en la nube. TUTU APP
        </p>

        {/* Cards informativas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 mt-12 max-w-5xl mx-auto">
          {/* Card: Infraestructura */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="flex items-center gap-4">
              <FaCloud className="text-blue-600 text-4xl" />
              <h2 className="text-2xl font-bold">Infraestructura</h2>
            </div>
            <p className="mt-4">
              Cloudflare como servidor proxy y DigitalOcean como proveedor
              principal de servidores escalables. Implementado para manejar
              picos de carga.
            </p>
          </div>

          {/* Card: Notificaciones */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
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
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
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
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
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
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
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
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
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
    </div>
  );
};

export default Home;
