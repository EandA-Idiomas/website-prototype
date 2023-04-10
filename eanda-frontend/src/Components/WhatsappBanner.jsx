import React from "react";
import ReactWhatsapp from "react-whatsapp";
// import { FaWhatsapp } from 'react-icons/fa'


function WhatsappBanner() {
  return (
    <div className="whatsapp-banner">
      <ReactWhatsapp
        className="whatsapp-button"
        number="551199959-3752"
        message="Olá, gostaria de mais informações sobre os cursos de idiomas."
      >
        <img src="https://via.placeholder.com/300" alt="whatsapp" />
      </ReactWhatsapp>
    </div >
  );
}

export default WhatsappBanner;