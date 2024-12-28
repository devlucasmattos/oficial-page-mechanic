import React from 'react';
import './Services.css';

function Services() {
  return (
    <section id="services" className="services">
      <h2>Nossos Serviços</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>Troca de óleo</h3>
          <p>Troca de óleo rápida e eficiente para manter o motor do seu carro em perfeitas condições.</p>
        </div>
        <div className="service-card">
          <h3>Revisão geral</h3>
          <p>Revisão completa para garantir a segurança e desempenho do seu veículo.</p>
        </div>
        <div className="service-card">
          <h3>Alinhamento e balanceamento</h3>
          <p>Serviços de alinhamento e balanceamento para um rodar suave e seguro.</p>
        </div>
        <div className="service-card">
          <h3>Freios e suspensão</h3>
          <p>Manutenção e troca de freios e suspensão com peças de alta qualidade.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;