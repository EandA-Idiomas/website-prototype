import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from "../Components/Header";
import methdology_content from "../Components/methodology_components/methodology";
import Footer from "../Components/Footer";


function Methodology() {
  const location = useLocation();
  const currentUrl = location.pathname;

  const { title, content, image, matcher } = methdology_content;

  return (
    <div>
      <Header />
      <body>
        {
          matcher === currentUrl && (
            <article>
              <section className="article-container">
                <h1>{title}</h1>
                {content.map((content) => (
                  <p>{content}</p>
                ))}
              </section>
              <Link to="/">
                <img src={image} style={{ height: "250px" }} alt={matcher} />
                <figcaption>Voltar à Home</figcaption>
              </Link>
            </article>
          )}
      </body>
      <Footer />
    </div >
  );
}

export default Methodology;