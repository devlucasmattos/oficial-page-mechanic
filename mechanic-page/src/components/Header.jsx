import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Mecânica Ebenezer</div>
      <nav>
        <ul className="nav-list">
          <li><a href="#services">Serviços</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
        <div className="underline"></div>
      </nav>
    </header>
  );
}

export default Header;
