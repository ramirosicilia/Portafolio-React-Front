import React from "react";
import "../../styles/projects.css";
import {PROJECTS} from "../../Helpers/constants"

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <div className="project-card" key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <span>{p.tech.join(", ")}</span>
            <a
              href={p.repo}
              className="btn-color"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}