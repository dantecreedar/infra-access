import React, { useEffect, useState } from "react";
import { FaJenkins } from "react-icons/fa";
// import imgBg from "../assets/images/banner-three-left-shape.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
const Jenkins: React.FC = () => {
  const [accessJenkins, setAccessJenkins] = useState(false);

  const handleAccessJenkins = () => {
    setAccessJenkins(true);
  };
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
    <>
     <Navbar/>
    {/* <img src={imgBg} alt="" className="absolute w-52 hidden md:block " /> */}
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg "  style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height:'100%'
    }}>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
          <FaJenkins className="text-orange-600" /> Gestión de Jenkins
        </h2>
        <p className="text-gray-700 mt-4">
          Jenkins es el corazón de nuestras tareas de integración continua. Aquí
          puedes:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Automatizar pipelines para integración y despliegue continuo.</li>
          <li>Revisar logs y ejecutar tareas en tiempo real.</li>
          <li>Administrar trabajos de despliegue y pruebas.</li>
        </ul>
        <p className="mt-4 text-gray-700">
          Configuración de la instancia EC2:
          <ul className="list-disc list-inside mt-2">
            <li>
              Tipo: <b>t2.medium</b>
            </li>
            <li>
              Memoria: <b>10 GB</b>
            </li>
            <li>
              Red: <b>VPC 172.16.0.0/16</b>
            </li>
          </ul>
        </p>
        <p className="mt-2 text-gray-700">
          Link de acceso:{" "}
          <a
            href="http://3.86.50.139:8080/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            http://3.86.50.139:8080/
          </a>
        </p>
        <button
          onClick={handleAccessJenkins}
          className="mt-6 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:outline-none transform transition-all shadow-md"
        >
          {accessJenkins ? "Cargando Jenkins..." : "Acceder a Jenkins"}
        </button>
      </div>

      {accessJenkins && (
        <div className="mt-6">
          <iframe
            src="http://3.86.50.139:8080/"
            width="100%"
            height="800"
            frameBorder="0"
            title="Jenkins Dashboard"
            className="rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Jenkins;
