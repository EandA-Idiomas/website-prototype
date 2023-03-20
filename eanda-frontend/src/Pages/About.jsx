import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from "../Components/Header";
import about_content from "../Components/about_components/about.js";
import Footer from "../Components/Footer";


function About() {
  const location = useLocation();
  const currentUrl = location.pathname;

  const { title, content, valores, image, matcher } = about_content;

  return (
    <div>
      <Header />
      {
        matcher === currentUrl && (
          <body>
            <section>
              <h1>{title}</h1>
              <p>{content}</p>
            </section>
            <section>
              <h1>Nossos Valores</h1>
              <ul>
                {valores.map((valor) => (
                  <li>{valor}</li>
                ))}
              </ul>
            </section>
            <Link to="/">Voltar à Home</Link>
          </body>
        )
      }
      <img src={image} style={{ height: "250px" }} alt="Logo" />
      <Footer />
    </div>
  );
}

export default About;