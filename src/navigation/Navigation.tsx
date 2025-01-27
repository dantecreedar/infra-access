import React, { useState, useEffect } from "react"; 
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DashboardRoutes from "../routes/DashboarRoutes";
import { LoginPage } from "../pages/Auth/LoginPage";
import Spinner from "../components/Spinner"; // Importa el componente Spinner

export const Navigation: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Estado para controlar el loading

  
  useEffect(() => {
    if (isAuthenticated) {
    //  llamada a la API
      setTimeout(() => {
        setLoading(false); // Después de un "tiempo de espera" cambia el estado de loading
      }, 1000); 
    }
  }, [isAuthenticated]);

  return (
    <Router>
      <Routes>
        {/* Ruta de login */}
        <Route
          path="/login"
          element={<LoginPage onLogin={() => setIsAuthenticated(true)} />}
        />
        
        {/* Rutas protegidas */}
        {isAuthenticated ? (
          <Route
            path="/*"
            element={
              loading ? (
                <div className="flex justify-center items-center min-h-screen">
                  <Spinner size="w-16 h-16" color="border-red" />
                 
                </div>
              ) : (
                <DashboardRoutes />
              )
            }
          />
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </Router>
  );
};

export default Navigation;