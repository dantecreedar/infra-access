import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import { motion } from "framer-motion"; // Importa framer-motion
import Floting from "../components/Floting";

const Frontend: React.FC = () => {
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
      <Navbar />
      <motion.div
        className="p-6 bg-gray-100 rounded-lg shadow-lg"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
        initial={{ opacity: 0 }} // Inicializa con opacidad 0
        animate={{ opacity: 1 }} // Finaliza con opacidad 1
        transition={{ duration: 1 }} // Duración de la animación
      >
        <motion.div
          className="bg-white p-4 rounded-lg shadow-md"
          initial={{ y: 20, opacity: 0 }} // Inicializa desplazado y con opacidad 0
          animate={{ y: 0, opacity: 1 }} // Finaliza en su posición original con opacidad 1
          transition={{ duration: 1, ease: "easeOut" }} // Easing suave
        >
          <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
            <FaCode className="text-purple-600" /> Frontend
          </h2>
          <p className="text-gray-700 mt-4">
            Almacén de interfaces gráficas en S3, utilizadas para administrar
            las soluciones de Tutu:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              Desarrollo:{" "}
              <a
                href="http://devtutuadmin.s3-website-us-east-1.amazonaws.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Tutu Admin Dev
              </a>
            </li>
            <li>
              QA:{" "}
              <a
                href="http://qatutuadmin.s3-website-us-east-1.amazonaws.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Tutu Admin QA
              </a>
            </li>
            <li>
              Producción:{" "}
              <a
                href="http://prodtutuadmin.s3-website-us-east-1.amazonaws.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Tutu Admin Prod
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>
            <Floting/>
      <Footer />
    </>
  );
};

export default Frontend;