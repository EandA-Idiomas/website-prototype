// import React from 'react';
// import { useLocation, Link } from 'react-router-dom';
// import articles from "../Components/articles_components/articles";
// import "../Components/articles_components/article__.css";


// function ArticleBody() {
//   const location = useLocation();
//   const currentUrl = location.pathname;

//   const article = articles.find((article) => article.matcher === currentUrl);
//   const { title, image, content } = article;
//   if (article === undefined) {
//     console.log("Article is undefined");
//   }

//   return (
//     <body>
//       {
//         article.matcher === currentUrl &&
//         title.map((title) => (
//           <div className="article-container">
//             <img src={image} alt={title} />
//             <h3>{title}</h3>
//             <ul>
//               {content.map((content) => (
//                 <li>{content}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       <Link to="/" > Back to Home Page</Link>
//     </body>
//   );
// }

// export default ArticleBody;