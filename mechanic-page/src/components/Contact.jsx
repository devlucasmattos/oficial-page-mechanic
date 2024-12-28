import React from 'react';
import './Contact.css';
import Address from './Address';

function Contact() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+5553991244320';
    const message = 'Olá, gostaria de saber mais sobre os seus serviços!';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="contact">
      <h2>Contato</h2>
      <button className="whatsapp-button" onClick={handleWhatsAppClick}>
        Contatar via WhatsApp
      </button>
    </section>
  );
}

export default Contact;
