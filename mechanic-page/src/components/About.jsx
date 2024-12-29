import React from 'react';
import './About.css';
import aboutImage from '/public/about-image.webp';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <img src={aboutImage} alt="Oficina de carros" className="about-image" />
        <div className="about-content">
          <h2>Quem Somos</h2>
          <p>
            Com mais de 20 anos de experiência, somos apaixonados por cuidar do seu veículo.
            Nossa equipe é composta por profissionais altamente qualificados, garantindo serviços
            de alta qualidade e total confiança.
          </p>
          <p>
            Nosso compromisso é proporcionar um atendimento excepcional, focado em segurança, agilidade
            e satisfação total dos nossos clientes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
