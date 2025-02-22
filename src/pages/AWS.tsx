import React, { useState, useEffect } from "react";
import { FaAws } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner"; // Asegúrate de importar tu componente de Spinner
import { motion } from "framer-motion"; // Importa framer-motion
import Floting from "../components/Floting";

const Aws: React.FC = () => {
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
      {/* Animación en la entrada del contenedor principal */}
      <motion.div
        className="p-6 bg-gray-100 rounded-lg shadow-lg"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
        initial={{ opacity: 0 }} // Inicializa la opacidad en 0
        animate={{ opacity: 1 }} // Finaliza en opacidad 1
        transition={{ duration: 1 }} // Duración de la animación
      >
        <motion.div
          className="bg-white p-4 rounded-lg shadow-md"
          initial={{ y: 20, opacity: 0 }} // Inicializa en y=20 y opacidad 0
          animate={{ y: 0, opacity: 1 }} // Finaliza en y=0 y opacidad 1
          transition={{ duration: 1, ease: "easeOut" }} // Animación con easing
        >
          <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
            <FaAws className="text-blue-600" /> Servicios en AWS
          </h2>
          <p className="text-gray-700 mt-4">
            AWS es nuestra plataforma principal para gestionar infraestructura
            escalable. Servicios clave:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              <b>VPC:</b> Red segura con IP 172.16.0.0/16. Subred pública para
              acceso web y subred privada para bases de datos.
            </li>
            <li>
              <b>RDS:</b> Base de datos PostgreSQL tipo <b>db.t3.micro</b>{" "}
              configurada en la subred privada.
            </li>
            <li>
              <b>Bucket S3:</b> Almacenamiento de objetos y recursos web.
            </li>
          </ul>
          <p className="mt-4 text-gray-700">
            Link de acceso a los objetos almacenados en S3:
            <a
              href="http://prodtutuadmin.s3-website-us-east-1.amazonaws.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Tutu Admin S3
            </a>
          </p>
        </motion.div>
      </motion.div>
            <Floting/>
      <Footer />
    </>
  );
};

export default Aws;