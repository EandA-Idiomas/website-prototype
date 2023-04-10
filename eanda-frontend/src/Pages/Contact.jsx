import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
// import WhatsappBanner from "../Components/WhatsappBanner";
import "../Components/contact_components/Contact.css";


function Contact() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   window.location.href = `mailto:paulohbfdf@gmail.com?subject=${name}%20-%20Contact%20Form&body=${message}%0D%0A%0D%0AFrom:%20${email}`;
  // };

  return (
    <div>
      <Header />
      <body className="contact-section">
        {/* <h4>Nos contate pelo Whatsapp:</h4>
      <WhatsappBanner /> */}
        <div>
          <h4>Nosso e-mail:</h4>
          <p>aldaamorim@eanda.com.br</p>
        </div>
        <div>
          <h4>Nosso telefone:</h4>
          <p>+55 (11) 99959-3752</p>
        </div>
        <div className="address">
          <h4>Nosso endereço:</h4>
          <p>Rua da Consolação, 2586 - Sala 01</p>
          <p>Cerqueira César - São Paulo/SP</p>
          <p>CEP: 58030-043</p>
        </div>
        <Link to="/">
          {/* <img src={image} style={{ height: "250px" }} alt={matcher} /> */}
          <figcaption>Voltar à Home</figcaption>
        </Link>
      </body>
      <Footer />
      {/* <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit" onClick={() => handleSubmit}>Send</button>
      </form> */}
    </div>
  );
}

export default Contact;
