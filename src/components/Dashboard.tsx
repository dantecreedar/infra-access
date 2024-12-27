import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Bienvenido a Infra-Tutu</h2>
      <p className="text-gray-700">
        Selecciona una opción del menú para comenzar.
      </p>
    </div>
  );
};

export default Dashboard;
