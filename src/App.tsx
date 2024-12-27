import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; // Importamos el componente Home
import Jenkins from "./pages/Jenkins";
import Backend from "./pages/Backend";
import Frontend from "./pages/Frontend";
import Aws from "./pages/AWS";
import Sidebar from "./components/SIdebar";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} /> {/* Ruta principal */}
            <Route path="/jenkins" element={<Jenkins />} />
            <Route path="/aws" element={<Aws />} />
            <Route path="/backend" element={<Backend />} />
            <Route path="/frontend" element={<Frontend />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
