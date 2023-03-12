import React from "react";
import ReactWhatsapp from "react-whatsapp";
import { FaWhatsapp } from 'react-icons/fa'


function WhatsappBanner() {
  return (
    <div className="whatsapp-banner">
      <ReactWhatsapp
        className="whatsapp-button"
        number="5519983294199"
        message="Olá, gostaria de mais informações sobre os cursos de idiomas."
      >
        <FaWhatsapp className="whatsapp-icon" />
      </ReactWhatsapp>
    </div>
  );
}

export default WhatsappBanner;