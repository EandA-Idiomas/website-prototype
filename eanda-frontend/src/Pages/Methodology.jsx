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
      {
        matcher === currentUrl && (
          <body>
            <section className="article-container">
              <h3>{title}</h3>
              {content.map((content) => (
                <p>{content}</p>
              ))}
            </section>
            <Link to="/"> Back to Home Page</Link>
          </body>
        )}
      <img src={image} alt={matcher} />
      <Footer />
    </div >
  );
}

export default Methodology;