import React from "react";
import { FaAws } from "react-icons/fa";

const Aws: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="bg-white p-4 rounded-lg shadow-md">
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
      </div>
    </div>
  );
};

export default Aws;
