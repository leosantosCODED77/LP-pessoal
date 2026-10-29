import React from 'react';

export const Experiences: React.FC = () => {
  const experiences = ['HTML', 'CSS', 'JAVASCRIPT', 'NODE.JS'];

  return (
    <section id="Experiences" className="second-section">
      <h2 className="title">Experiências</h2>
      <ul>
        {experiences.map((exp) => (
          <li key={exp}>{exp}</li>
        ))}
      </ul>
    </section>
  );
};
