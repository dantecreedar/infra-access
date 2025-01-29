import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Home from "../pages/Home";
import Jenkins from "../pages/Jenkins";
import Aws from "../pages/AWS";
import Backend from "../pages/Backend";
import Frontend from "../pages/Frontend";

export const DashboardRoutes: React.FC = () => {
  
  return (
    <Routes>
      {/* Rutas anidadas bajo el layout */}
      <Route path="/" element={<DashboardLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="jenkins" element={<Jenkins />} />
        <Route path="aws" element={<Aws />} />
        <Route path="backend" element={<Backend />} />
        <Route path="frontend" element={<Frontend />} />
        {/* Redirección global */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;