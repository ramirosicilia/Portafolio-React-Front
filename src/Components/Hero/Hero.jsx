import React from "react";
import "../../styles/hero.css";
import profile from "../../assets/images/profile.jpg"; // pon tu foto

export default function Hero() {

  const handleDownload = () => {
   
    // ✅ Inicia la descarga del CV (misma lógica que usarías en Compra)
    const urlPublica = "CV_Ramiro_Jose_Sicilia_Programador_Jr1.pdf";

    if (!urlPublica) {
      console.warn("⚠️ No se encontró la URL del archivo.");
      alert("⚠️ No se encontró el archivo del CV. Intenta nuevamente más tarde.");
      return;
    }

    console.log("📥 Descargando CV desde:", urlPublica);
    const link = document.createElement("a");
    link.href = urlPublica;
    link.download = "CV_Ramiro_Jose_Sicilia_Programador_Jr1.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero"> 
    
      <div className="hero-responsive"> 

        <div className="hero-text">
          <h1>
            Hola, soy <span>Ramiro José Sicilia</span>
          </h1>
          <p>
            Desarrollador <strong>Full Stack</strong> especializado en JavaScript,
            React y Node.js. Apasionado por crear experiencias web profesionales.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              Ver Proyectos
            </a>
            <button onClick={handleDownload} className="btn outline">
              Descargar CV
            </button>
          </div>
        </div>

        <div className="hero-photo">
          <img src={profile} alt="Ramiro Sicilia" />
        </div> 

      </div>
    </section>
  );
}
