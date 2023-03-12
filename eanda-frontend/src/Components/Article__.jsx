import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import articles from "../Components/articles_components/articles";
import "../Components/articles_components/article__.css";


function ArticleBody() {
  const location = useLocation();
  const currentUrl = location.pathname;

  const article = articles.find((article) => article.matcher === currentUrl);
  const { title, image, content } = article;

  return (
    <div>
      <body className="article">
        <h1>{title}</h1>
        <div className="article-container">
          <img src={image} alt={title} />
          <p>{content}</p>
        </div>
        <Link to="/">Back to Home Page</Link>
      </body>
    </div>
  );
}

export default ArticleBody;