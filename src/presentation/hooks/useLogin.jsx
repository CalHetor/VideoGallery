import { useState } from "react";
import { AuthRepository } from "../../infrastructure/api/authRepository";
import { loginUser } from "../../domain/use-cases/loginUser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Activar loading
      setLoading(true);

      // Inicializamos el repositorio
      const repository = new AuthRepository();

      //Llamado a la API
      const result = await loginUser(repository, { userName, userPassword });

      //Mostrar el mensaje en pantalla
      toast(result.response.responseMessage);

      //Cambiar de pantalla
      navigate("/home");
    } catch (err) {
      toast.error(err.message);
    } finally {
      //Desactivar loading siempre
      setLoading(false);
    }
  };

  return {
    userName,
    setUserName,
    userPassword,
    setUserPassword,
    handleLogin,
    loading,
  };
};
