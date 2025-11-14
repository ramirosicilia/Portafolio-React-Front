import React, { useState } from "react";
import "../styles/Contact.css";
import { fetchData } from "../Helpers/fetchData"; 
import { validateForm } from "../Helpers/validateForm"; // 👈 importá tu función de validación

export default function ContactPage() { 

    const  URL_FRONT= import.meta.env.FRONT_URL;
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus({
        type: "error",
        message: "Por favor corregí los errores antes de enviar.",
      });
      return;
    }

    setErrors({});
    setStatus({ type: "loading", message: "Enviando mensaje..." });

    const url = `${URL_FRONT}/send-email`;

    const result = await fetchData(url, {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (result.success) {
      setStatus({ type: "success", message: "¡Mensaje enviado con éxito!" });
      setFormData({ nombre: "", email: "", mensaje: "" });
    } else {
      setStatus({
        type: "error",
        message: "Error al enviar el mensaje. Intentalo de nuevo.",
      });
    }
  };

  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <p className="contact-intro">
        Podés escribirme a: <strong>rama.sicilia@gmail.com</strong> o usar el
        siguiente formulario:
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Tu nombre"
          className={errors.nombre ? "error" : ""}
        />
        {errors.nombre && (
          <p style={{ color: "red" }}>{errors.nombre}</p>
        )}

        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="tuemail@ejemplo.com"
          className={errors.email ? "error" : ""}
        />
        {errors.email && (
          <p style={{ color: "red" }}>{errors.email}</p>
        )}

        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows="5"
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Escribí tu mensaje..."
          className={errors.mensaje ? "error" : ""}
        ></textarea>
        {errors.mensaje && (
          <p style={{ color: "red" }}>{errors.mensaje}</p>
        )}

        <button
          type="submit"
          className="btn-enviar"
          disabled={status.type === "loading"}
        >
          {status.type === "loading" ? "Enviando..." : "Enviar"}
        </button>

        {status.message && (
          <p className={`status-message ${status.type}`}>
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
