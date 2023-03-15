import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import articles from "../Components/articles_components/articles";
import "../Components/articles_components/article__.css";


function ArticleBody() {
  const location = useLocation();
  const currentUrl = location.pathname;

  const article = articles.find((article) => article.matcher === currentUrl);
  // const { title, image, content } = article;
  if (article === undefined) {
    console.log("Article is undefined");
  }

  return (
    <div>
      {/* <body className="article">
        {
          article.id === 1 && (
            <div className="article-container">
              {title.forEach((title) => ({
                content.forEach(content) => (
              <h3>{title}</h3>
                                 content.map((content) => (
              <p>{content}</p>
              ))
                }))}
            </div>
          )}
        <img src={image} alt={title} />
      </body> */}
      <Link to="/">Back to Home Page</Link>
    </div >
  );
}

export default ArticleBody;