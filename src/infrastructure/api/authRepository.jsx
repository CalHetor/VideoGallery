import URI from "../config/URL.jsx";

export class AuthRepository {
  async login(credentials) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000); // ⏱ 15 segundos

    try {
      const respuesta = await fetch(`${URI}usuarios/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
        signal: controller.signal, // vinculamos el AbortController
      });

      clearTimeout(timeout); // cancelamos el timeout si responde

      if (!respuesta.ok) {
        const errorData = await respuesta.json();
        throw new Error(errorData.response.responseMessage);
      }

      return await respuesta.json();
    } catch (err) {
      if (err.name === "AbortError") {
        throw new Error("La petición excedió el tiempo de espera (timeout).");
      }
      throw err;
    }
  }
}
