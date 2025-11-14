import { useState } from "react";

/**
 * Hook personalizado para manejar formularios de contacto o login.
 * Permite controlar inputs, validación básica y reseteo del formulario.
 */
export const useForms = (initialValues = {}) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  // Maneja los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev=>({
      ...prev,
      [name]: value,
    }));
  };

  // Valida campos básicos
  const validateForm = () => {
    let newErrors = {};

    Object.keys(formValues).forEach((key) => {
      if (!formValues[key]) {
        newErrors[key] = "Este campo es obligatorio";
      }
    });

    if (formValues.email && !/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "El email no es válido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Reinicia el formulario
  const resetForm = () => {
    setFormValues(initialValues);
    setErrors({});
  };

  return {
    formValues,
    errors,
    handleChange,
    validateForm,
    resetForm,
  };
};
