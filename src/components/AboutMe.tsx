import React from 'react';

export const AboutMe: React.FC = () => {
  return (
    <section id="about-me" className="third-section">
      <h2 className="title">Quem sou eu?</h2>
      <div>
        <img
          className="img-about-me"
          src="/assets/about.jpeg"
          alt="imagem do leandro fonseca"
        />
        <div>
          <p>
            Olá! Sou <strong>Leandro Santos da Fonseca</strong>, tenho 29 anos e sou apaixonado por tecnologia, esporte e pelo desafio de aprender coisas novas.
          </p>
          <br />
          <p>
            Atualmente, estou cursando <strong>Engenharia de Software na Anhanguera</strong>, construindo minha trajetória na área de tecnologia e buscando evoluir constantemente como profissional.
          </p>
          <br />
          <p>
            Antes de ingressar nesse universo, concluí minha formação em <strong>Educação Física</strong>, uma experiência que ampliou minha visão sobre disciplina, planejamento e desenvolvimento humano.
          </p>
          <br />
          <p>
            Também sou <strong>atleta de futebol americano</strong>, esporte que faz parte da minha identidade e me ensinou, na prática, a importância da resiliência, do trabalho em equipe e da dedicação para alcançar objetivos.
          </p>
          <br />
          <p>
            Acredito que evoluir significa estar disposto a enfrentar novos desafios, aprender com cada experiência e buscar sempre uma versão melhor de si mesmo. É essa mentalidade que levo para o desenvolvimento de software e para cada projeto que construo.
          </p>
        </div>
      </div>
    </section>
  );
};
