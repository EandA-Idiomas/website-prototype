import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import freeCourse from "../Components/videos_components/freeCourse";

function FreeCourse() {
  if (!freeCourse || freeCourse.length === 0) {
    return <h3>Curso não encontrado, atualize a página</h3>;
  }

  return (
    <div>
      <Header />
      <h3>Curso gratuito</h3>
      <section className="free-course-section">
        {freeCourse.map((freeCourse) => (
          <div key={freeCourse.id} className="free-course-container">
            <h4>{freeCourse.title}</h4>
            <p>{freeCourse.text}</p>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default FreeCourse;