import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../Components/Header";
import methdology_content from "../Components/methodology_components/methodology";
import Footer from "../Components/Footer";


function Methodology() {
  const { title, content, valores, image, matcher } = methdology_content;

  return (
    <div>
      <Header />
      {
        <div className="article-container">
          <h3>{title}</h3>
          {content.map((content) => (
            <p>{content}</p>
          ))}

        </div>
      }
      <Link to="/"> Back to Home Page</Link>
      <Footer />
    </div >
  );
}

export default Methodology;