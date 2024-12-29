import React from 'react';
import './Services.css';

function Services() {
  return (
    <section id="services" className="services">
      <h2>Nossos Serviços</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>Suspensão</h3>
          <p>Manutenção e troca de peças da suspensão para garantir a estabilidade e segurança do seu veículo.</p>
        </div>
        <div className="service-card">
          <h3>Freios</h3>
          <p>Manutenção e troca de sistema de freios com peças de alta qualidade, garantindo a segurança ao dirigir.</p>
        </div>
        <div className="service-card">
          <h3>Injeção Eletrônica</h3>
          <p>Diagnóstico e manutenção do sistema de injeção eletrônica para otimizar o desempenho e consumo de combustível.</p>
        </div>
        <div className="service-card">
          <h3>Revisão Geral</h3>
          <p>Revisão completa para garantir a segurança e o perfeito funcionamento de todos os sistemas do seu veículo.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
