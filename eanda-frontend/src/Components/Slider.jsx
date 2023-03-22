import React, { useState, useEffect } from "react";
import SliderData from "./slider_components/SliderData";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import "./slider_components/Slider.css";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(SliderData[0]);
  const length = SliderData.length;

  const nextSlide = () => {
    const id = currentSlide.id;
    id === length ? setCurrentSlide(SliderData[0]) : setCurrentSlide(SliderData[id]);
  };

  const prevSlide = () => {
    const id = currentSlide.id;
    id === 1 ? setCurrentSlide(SliderData[length - 1]) : setCurrentSlide(SliderData[id - 2]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <section className="slider">
      <div key={currentSlide.id} className="slider-slide-active">
        <img src={currentSlide.image} alt={currentSlide.title} className="slider-image" />
      </div>
      <div className="slider-arrows">
        <BsArrowLeft onClick={prevSlide} className="slider-arrow" />
        <BsArrowRight onClick={nextSlide} className="slider-arrow" />
      </div>
    </section>
  );
}

export default Slider;
