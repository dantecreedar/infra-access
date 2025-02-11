// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import Jenkins from "./pages/Jenkins";
// import Backend from "./pages/Backend";
// import Frontend from "./pages/Frontend";
// import Aws from "./pages/AWS";
// import Sidebar from "./components/SIdebar";
// import { LoginPage } from './pages/Auth/LoginPage';
// import Spinner from './components/Spinner';

// const App: React.FC = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleLogin = () => {
//     setIsLoading(true);

//     setTimeout(() => {
//       setIsAuthenticated(true);
//       setIsLoading(false);
//     }, 1300);
//   };

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <Spinner size="w-12 h-12" color="text-black" />
//       </div>
//     );
//   }

//   return (
//     <Router>

//       <div className="flex">

//         {isAuthenticated && <Sidebar />}
//         <div className="flex-1 flex flex-col">

//           <Routes>
//             <Route
//               path="/login"
//               element={<LoginPage onLogin={handleLogin} />}
//             />
//             <Route
//               path="/"
//               element={isAuthenticated ? <Home  /> : <Navigate to="/login" replace />}

//             />
//             <Route
//               path="/jenkins"
//               element={isAuthenticated ? <Jenkins /> : <Navigate to="/login" replace />}
//             />
//             <Route
//               path="/aws"
//               element={isAuthenticated ? <Aws /> : <Navigate to="/login" replace />}
//             />
//             <Route
//               path="/backend"
//               element={isAuthenticated ? <Backend /> : <Navigate to="/login" replace />}
//             />
//             <Route
//               path="/frontend"
//               element={isAuthenticated ? <Frontend /> : <Navigate to="/login" replace />}
//             />

//             <Route
//               path="*"
//               element={<Navigate to={isAuthenticated ? "/" : "/login"} replace />}
//             />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import Navigation from "./navigation/Navigation";

const App: React.FC = () => {
  return (
    <>
      <Navigation />
    </>
  );
};
export default App;