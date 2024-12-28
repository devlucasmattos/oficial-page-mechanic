import React from 'react';
import './Hero.css';
import carImage from '/public/car.png';

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${carImage})` }}>
      <h1>Seu carro em boas mãos</h1>
      <p>Manutenção rápida e confiável para você voltar à estrada.</p>
      <a href="https://wa.me/+5553991244320?text=Ol%C3%A1%2C%20gostaria%20de%20realizar%20or%C3%A7amento%20para%20a%20cria%C3%A7%C3%A3o%20de%20um%20site." 
         className="whatsapp-button animated" target="_blank" rel="noopener noreferrer">
        <span>Entre em contato pelo WhatsApp</span>
      </a>
    </section>
  );
}

export default Hero;