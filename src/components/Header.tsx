import React from 'react';

export const Header: React.FC = () => {
  return (
    <header>
      <div className="box-img-header">
        <a href="#">
          <img
            className="logo-img"
            src="/assets/aistudio/Grade_de_logos_SF_Full_Stack_em_destaque_5fae947b.png"
            alt="SF Full Stack Logo"
          />
        </a>
      </div>

      <nav>
        <a href="#Experiences" className="nav-links">Experiências</a>
        <a href="#about-me" className="nav-links">Quem sou eu</a>
        <a href="#my-projects" className="nav-links">Meus Projetos</a>
        <a href="#contact" className="nav-links">Contatos</a>
      </nav>
    </header>
  );
};
