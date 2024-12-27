import React from "react";
import { FaCode } from "react-icons/fa";

const Frontend: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
          <FaCode className="text-purple-600" /> Frontend
        </h2>
        <p className="text-gray-700 mt-4">
          Almacén de interfaces gráficas en S3, utilizadas para administrar las
          soluciones de Tutu:
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
      </div>
    </div>
  );
};

export default Frontend;
