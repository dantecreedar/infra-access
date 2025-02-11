import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/Auth';

export const AuthRoutes = () => {
  const handleLogin = () => {
    console.log("Usuario ha iniciado sesión");
 
  };

  return (
    <Routes>
      <Route path="login" element={<LoginPage onLogin={handleLogin} />} />
    </Routes>
  );
};