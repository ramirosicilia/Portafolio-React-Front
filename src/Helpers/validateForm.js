
 import "../styles/Contact.css"; 
 
// 🧩 validateForm.js
export const validateForm = (values) => {
  const errors = {};

  // Expresiones regulares profesionales
  const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,50}$/; // Solo letras y espacios, entre 3 y 50 caracteres
  const regexEmail =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Email RFC estándar
  const regexMensaje = /^[A-Za-z0-9ÁÉÍÓÚáéíóúÑñ.,;:!?"'()\s-]{10,1000}$/; // Mensaje con texto y signos permitidos

  // 🧠 Validar nombre
  if (!values.nombre) {
    errors.nombre = "El nombre es obligatorio";
  } else if (!regexNombre.test(values.nombre.trim())) {
    errors.nombre =
      "El nombre solo puede contener letras y espacios (mínimo 3 caracteres)";
  }

  // 📧 Validar email
  if (!values.email) {
    errors.email = "El email es obligatorio";
  } else if (!regexEmail.test(values.email.trim())) {
    errors.email = "Ingresá un correo electrónico válido";
  }

  // 📝 Validar mensaje
  if (!values.mensaje) {
    errors.mensaje = "El mensaje es obligatorio";
  } else if (!regexMensaje.test(values.mensaje.trim())) {
    errors.mensaje =
      "El mensaje debe tener al menos 10 caracteres y solo puede incluir letras, números y signos básicos";
  }

  return errors;
};
