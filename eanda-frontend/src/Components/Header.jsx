import React from 'react';
import logo from "./header_components/Logo.png";
import './header_components/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Header Logo" />
      </div>
      <nav>
        <ul className="links">
          <li><a href="/about">Sobre Nós</a></li>
          {/* <li><a href="/services">O que fazemos</a></li> */}
          <li><a href="/methodology">Metodologia</a></li>
          <li><a href="/free-course">Curso Gratuito</a></li>
          <li><a href="/team">Equipe</a></li>
          <li><a href="/testimonials">Depoimentos</a></li>
          <li><a href="/contact">Contato</a></li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
