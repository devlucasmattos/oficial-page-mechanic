import React, { useState, useEffect } from 'react';
import './Contact.css';

function Contact() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;
  
    if (scrollPercentage > 90) {  // O botão aparece quando a rolagem for maior que 90%
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };
  

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+5553991244320';
    const message = 'Olá, gostaria de saber mais sobre os seus serviços!';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id="contact" className="contact">
      <h2>Entre em Contato</h2>
      <p>Estamos prontos para atendê-lo!<br />Entre em contato conosco para tirar dúvidas ou agendar um serviço.</p>
      <div className="contact-info">
        <p><strong>Telefone:</strong> (53) 99124-4320</p>
      </div>
      <button className="whatsapp-button" onClick={handleWhatsAppClick}>
        Fale Conosco pelo WhatsApp
      </button>

      <button 
        className={`scroll-to-top ${showScroll ? 'show' : ''}`} 
        onClick={scrollToTop}
      >
        ↑
      </button>
    </section>
  );
}

export default Contact;
