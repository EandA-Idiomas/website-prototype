import React, { useState, useEffect } from 'react';
import logo from "./header_components/Logo.png";
import './header_components/Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScrolled ? 'scrolled' : 'header'}>
      <div className="logo-container">
        <img style={{ width: "100px" }} src={logo} alt="Header Logo" />
      </div>
      <nav>
        <ul className="links">
          <li><a href="/about">Sobre Nós</a></li>
          <li><a href="/services">Serviços</a></li>
          <li><a href="contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
