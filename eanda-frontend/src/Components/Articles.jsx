import React from "react";
import articles from "./articles_components/articles.js";
import "./articles_components/articles.css";

function Articles() {
  return (
    <section className="articles-section">
      {
        articles.length > 0 && articles.map((article) => (
          <div key={article.id} className="article-container">
            <a href={`${article.matcher}`}>
              <img src={article.image} alt={article.title} />
              <h4>{article.title}</h4>
              <p>{article.content}</p>
            </a>
          </div>
        ))
      }
    </section >
  )
}

export default Articles;