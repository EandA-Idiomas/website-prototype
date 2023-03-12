import React from "react";
import articles from "./articles_components/articles.js";

function Articles() {
  return (
    <div>
      {
        articles.length > 0 && articles.map((article) => (
          <div key={article.id} className="article-container">
            <a href={`/${article.title}`}>
              <h4>{article.title}</h4>
            </a>
            <p>{article.content}</p>
          </div>
        ))}
    </div>
  )
}

export default Articles;