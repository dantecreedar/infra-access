import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../public/gearth.png";
import imgBg from "../../assets/images/offer-bg-shape-right.png";
import logoGoogle from '../../../public/google.png'
type LoginPageProps = {
  onLogin: () => void;
};

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "admin@mail.com" && password === "123") {
      onLogin();
      navigate("/home");
    } else {
      setError("Contraseña o usuario incorrecto.");
    }
  };

  const handleGoogleLogin = () => {
    console.log("Iniciar sesión con Gmail");
    onLogin();
    navigate("/home");
  };

  return (
    <>
      <img src={imgBg} alt="" className="absolute hidden md:block right-0" />
      <div className="font-sans min-h-screen flex items-center justify-center bg-white">
        <div
          className="rounded-lg p-6 shadow-xl max-w-md w-full bg-[linear-gradient(90deg,_#3c72fc_-10.59%,_#00060c_300.59%)]"
          style={{
            backgroundColor: "white",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
          }}
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="mb-8 text-center">
              <img src={logo} alt="logo" className="w-40 mb-8 mx-auto block" />
              <h3 className="text-white text-3xl font-extrabold">
                Iniciar sesión en GearthLogic
              </h3>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <div>
              <label className="text-gray-200 text-sm mb-2 block">
                Usuario
              </label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-sm text-gray-800 border border-gray-700 bg-gray-50 px-4 py-3 rounded-lg outline-blue-600"
                  placeholder="Enter user name"
                />
              </div>
            </div>
            <div>
              <label className="text-gray-200 text-sm mb-2 block">
                Contraseña
              </label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-sm text-gray-800 border border-gray-700 bg-gray-50 px-4 py-3 rounded-lg outline-blue-600"
                  placeholder="••••••"
                />
              </div>
            </div>

            <div className="flex flex-col items-center mt-8 space-y-4">
              <button
                type="submit"
                disabled={!email || !password}
                className={`w-1/2 shadow-xl py-2 px-3 text-sm tracking-wide rounded-lg text-black bg-white `}
              >
                Iniciar sesión
              </button>

              <button
                type="button"
                onClick={handleGoogleLogin}
                className="flex items-center justify-center w-1/2 shadow-xl py-2 px-4 text-sm font-medium tracking-wide rounded-lg bg-white border border-gray-300 hover:shadow-md hover:bg-gray-100 transition"
              >
                <div className="flex items-center space-x-2">
                  {/* Icono de Google */}
                  <img src={logoGoogle} alt="" style={{width:'30px'}} />
                  {/* Texto */}
                  <span className="text-gray-700">
                    Iniciar sesión con Google
                  </span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
