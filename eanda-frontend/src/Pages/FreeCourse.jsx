import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ReactPlayer from "react-player";
import freeCourseData from "../Components/videos_components/freeCourseData";
import "../Components/videos_components/freeCourse.css";

function FreeCourse() {
  const freeCourse = freeCourseData;

  if (!freeCourse || freeCourse.length === 0) {
    return <h3>Desculpe, o curso não pôde ser encontrado.</h3>;
  }

  return (
    <div>
      <Header />
      <h2>Curso gratuito</h2>
      <main className="free-course-main">
        {freeCourse.map((video) => (
          <div key={video.id} className="free-course-container">
            <h3>{video.title}</h3>
            <ReactPlayer
              controls
              width={520}
              url={video.url}
              rel={0}
              alt={`Vídeo de conteúdo ${video.title}`}
              onError={() => console.log(`Erro ao carregar o vídeo ${video.title}`)}
            />
          </div>
        ))}
        <Link to="/">Voltar para a página inicial</Link>
      </main>
      <Footer />
    </div>
  );
}

export default FreeCourse;