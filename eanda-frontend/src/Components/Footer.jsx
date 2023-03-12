import React from "react";
import "./footer_components/footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; {new Date().getFullYear()} E and A Idiomas. Todos os direitos reservados.</p>
          </div>
          <div className="col-md-6">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;