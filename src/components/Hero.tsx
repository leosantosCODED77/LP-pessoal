import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="first-section">
      <div>
        <h1>
          Olá! eu sou o <br /> <strong>Leandro Fonseca</strong>
        </h1>
        <p>
          Sou estudante de <strong>Engenharia de Software</strong>, com foco no desenvolvimento <strong>Full Stack</strong> e na criação de experiências digitais modernas, interativas e funcionais.
        </p>
        <p>
          Atualmente, aprofundo meus conhecimentos em <strong>HTML, CSS, JavaScript, Node.js e integração de APIs</strong>, explorando novas tecnologias e aprimorando minhas habilidades em desenvolvimento Front-End e Back-End.
        </p>
        <p>
          Meu objetivo é transformar ideias em soluções digitais que unam <strong>tecnologia, criatividade e uma excelente experiência para o usuário</strong>.
        </p>
        <a href="#contact" className="btn-action link-action">
          Saber mais
        </a>
      </div>

      <div className="box-img-profile">
        <img
          className="img-profile"
          src="/assets/profile.jpeg"
          alt="Perfil Leandro Fonseca"
        />
      </div>
    </section>
  );
};
