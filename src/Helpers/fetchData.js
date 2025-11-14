// ============================================================
// ⚙️ fetchData.js
// Utilidad genérica para obtener datos desde APIs
// ============================================================

/**
 * Realiza una petición fetch con manejo de errores.
 * Ideal para consumir APIs o archivos locales (JSON, Supabase, etc.)
 * @param {string} url - Endpoint o ruta a consultar
 * @param {object} [options] - Opciones adicionales para la petición (método, body, headers)
 * @returns {Promise<any>} - Datos parseados en JSON o error
 */
// src/Helpers/fetchData.js

export const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    if (!response.ok) {
      // Si el backend devuelve un error, mostramos el código y texto
      const errorText = await response.text();
      console.error(`❌ Error HTTP ${response.status}: ${errorText}`);
      return { success: false, message: `Error ${response.status}` };
    }

    // Si todo va bien, devolvemos el JSON
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("⚠️ Error en fetchData:", error.message);
    return { success: false, message: error.message };
  }
};
