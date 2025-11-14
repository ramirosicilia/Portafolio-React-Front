import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center py-5">
      <h1>404</h1>
      <p>Página no encontrada</p>
      <Link to="/" className="btn btn-outline-info">Volver al inicio</Link>
    </div>
  );
}
