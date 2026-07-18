import React from "react";
import { ToastContainer } from "react-toastify";
import { useLogin } from "../hooks/useLogin";
import Logo from "../../../public/Logo.png";

const LoginScreen = () => {
  const {
    userName,
    setUserName,
    userPassword,
    setUserPassword,
    handleLogin,
    loading,
  } = useLogin();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <ToastContainer />
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md transform transition duration-500 hover:scale-105">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Logo" className="w-20 h-20 object-contain" />
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Iniciar Sesión
        </h2>

        <div className="relative mb-6">
          <input
            type="email"
            id="email"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Correo electrónico"
            className="peer w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2 placeholder-transparent"
          />
          <label
            htmlFor="email"
            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-indigo-500 peer-focus:text-sm"
          >
            Correo electrónico
          </label>
        </div>

        <div className="relative mb-6">
          <input
            type="password"
            id="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="Contraseña"
            className="peer w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2 placeholder-transparent"
          />
          <label
            htmlFor="password"
            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-indigo-500 peer-focus:text-sm"
          >
            Contraseña
          </label>
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className={`w-full py-2 rounded-lg font-semibold shadow-md transform transition duration-300 
            ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 active:scale-95"}`}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
              Cargando...
            </div>
          ) : (
            "Ingresar"
          )}
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
