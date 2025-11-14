import React from "react";
import "../../styles/skill.css";

export default function Skills() {
  const skills = ["HTML", "CSS", "Bootstrap", "JavaScript", "React", "Node.js", "TypeScript", "MongoDB", "Supabase", "MySQL"];
  return (
    <section className="skills py-5 text-center">
      <div className="container">
        <h2 className="mb-5">Habilidades</h2>
        <div className="row justify-content-center skill_color ">
          {skills.map((skill, i) => (
            <div key={i} className="col-6 col-md-3 col-lg-2 mb-3">
              <div className="skill-card p-2">{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
