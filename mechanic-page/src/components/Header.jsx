import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 60,
      behavior: 'smooth',
    });
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">Mecânica Ebenezer</div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li><a href="#services" onClick={(e) => smoothScroll(e, 'services')}>Serviços</a></li>
          <li><a href="#about" onClick={(e) => smoothScroll(e, 'about')}>Sobre</a></li>
          <li><a href="#address" onClick={(e) => smoothScroll(e, 'address')}>Endereço</a></li>
          <li><a href="#contact" onClick={(e) => smoothScroll(e, 'contact')}>Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
