import React from "react";
import "./footer_components/footer.css";
import footerLogo from "./footer_components/Logo.png"

function Footer() {
  return (
    <footer>
      <a href="/" className="logo">
        <img src={footerLogo} alt="E and A Idiomas" />
      </a>
      <div className="container">
        <nav>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="/termos-de-uso">Termos de Uso</a>
            </li>
            <li className="list-inline-item">
              <a href="/politica-de-privacidade">Política de Privacidade</a>
            </li>
            <li className="list-inline-item">
              <a href="/contact">Contato</a>
            </li>
          </ul>
        </nav>

        <div className="col-md-6">
          <p>&copy; {new Date().getFullYear()} E and A Idiomas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer >
  );
};

export default Footer;