import React, { useState, useEffect, useCallback } from "react";
import Slides from "./slider_components/Slides";
import { TbArrowBigRight, TbArrowBigLeft } from "react-icons/tb";
import "./slider_components/Slider.css";

function Slideshow() {

  const [currentSlide, setSlide] = useState(Slides[0]);
  const length = Slides.length;

  const nextSlide = useCallback(() => {
    let id = currentSlide.id;
    id === length ? setSlide(Slides[0]) : setSlide(Slides[id]);
  }, [currentSlide, length]);

  const prevSlide = () => {
    let id = currentSlide.id;
    id === 1 ? setSlide(Slides[length - 1]) : setSlide(Slides[id - 2]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(intervalId);
  }, [currentSlide, nextSlide]);

  return (

    <section className="slideshow">
      {
        <div key={currentSlide.id} className="slide-active">
          <img src={currentSlide.image} alt={currentSlide.title} className="slide-image" />
          {/* <p>{currentSlide.title}</p> */}
        </div>
      }
      <div className="slide-arrows">
        <TbArrowBigLeft onClick={prevSlide} className="slide-arrow" />
        <TbArrowBigRight onClick={nextSlide} className="slide-arrow" />
      </div>
    </section >
  )
}

export default Slideshow;