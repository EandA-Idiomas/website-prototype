import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ReactPlayer from "react-player";
import testimonials from "../Components/videos_components/testimonials";
import "../Components/videos_components/testimonials.css";

function Testimonials() {
  if (!testimonials || testimonials.length === 0) {
    return <h3>Testimonials not found, refresh the page</h3>;
  }

  return (
    <div>
      <Header />
      <h3>Depoimentos de nossos parceiros</h3>
      <section className="testimonials-section">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-container">
            <h4>{testimonial.title}</h4>
            <ReactPlayer controls width={520} url={testimonial?.url} rel={0} />
          </div>
        ))}
        <Link to="/"> Back to Home Page</Link>

      </section>
      <Footer />
    </div>
  );
}

export default Testimonials;