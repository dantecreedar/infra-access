import React, { useEffect, useState } from "react";
import { FaServer } from "react-icons/fa";
// import imgBg from "../assets/images/banner-three-left-shape.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
const Backend: React.FC = () => {
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
    {/* <img src={imgBg} alt="" className="absolute w-52 hidden md:block" /> */}
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg"  style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
       height:'100%'
    }}>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
          <FaServer className="text-green-600" /> Backend
        </h2>
        <p className="text-gray-700 mt-4">
          Este módulo maneja los servicios del API y los entornos:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            <b>Subred privada:</b> 172.18.1.0/24, 172.18.2.0/24, 172.18.3.0/24.
          </li>
          <li>
            <b>Entornos:</b> Dev, Stage y Producción con sus respectivas URLs:
            <ul className="list-disc list-inside mt-2 pl-4">
              <li>
                <a
                  href="https://dev.tutuservices.click"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Desarrollo
                </a>
              </li>
              <li>
                <a
                  href="https://stage.tutuservices.click"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Stage
                </a>
              </li>
              <li>
                <a
                  href="https://prod.tutuservices.click"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Producción
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Backend;
