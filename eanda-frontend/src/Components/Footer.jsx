import React from "react";
import "./footer_components/footer.css";
import footerLogo from "./footer_components/Logo.png";

function Footer() {
  return (
    <footer>
      <a href="/" className="logo">
        <img src={footerLogo} alt="E and A Idiomas" />
      </a>
      <nav>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/termos-de-uso">Termos de Uso</a>
          </li>
          <li className="list-inline-item">
            <a href="/politica-de-privacidade">Política de Privacidade</a>
          </li>
        </ul>
      </nav>
      <>
        <div className="company-legal-info">
          <p>Razão Social: [E and A Idiomas Ltda.]</p>
          <p>CNPJ: [12.374.470/0001-02]</p>
        </div>
        <div className="address">
          <p>Rua da Consolação, 2586 - Sala 01</p>
          <p>Cerqueira César - São Paulo/SP</p>
          <p>CEP: 58030-043</p>
        </div>
        <div className="contact-info">
          <p>Telefone: [Company phone number]</p>
          <p>Email: [Company email address]</p>
        </div>
      </>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} E and A Idiomas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
