import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from "../Components/Header";
import about_content from "../Components/about_components/about.js";
import Footer from "../Components/Footer";
import "../Components/about_components/about.css"


function About() {
  const location = useLocation();
  const currentUrl = location.pathname;

  const { title, content, valores, image, matcher } = about_content;

  return (
    <div>
      <Header />
      <body>
        {
          matcher === currentUrl && (
            <article>
              <section>
                <h1>{title}</h1>
                {content.map((paragraph) => (
                  <p key="paragraph">{paragraph}</p>
                ))}
              </section>
              <section>
                <h1>Nossos Valores</h1>
                <ul>
                  {valores.map((valor) => (
                    <li key={valor}>{valor}</li>
                  ))}
                </ul>
                <Link style={{
                  display: "flex", flexDirection: "column", alignItems: "center"
                }} to="/">
                  <img src={image} style={{ height: "250px" }} alt="Logo" />
                  <figcaption >Voltar à Home</figcaption>
                </Link>
              </section>
            </article>
          )}
      </body>
      <Footer />
    </div >
  );
}

export default About;