import React, { useState } from 'react'
import { backdoback, backdoback2 } from '../assets';

const Lgservicos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: backdoback, title: "Título 1", text: "Texto 1" },
    { src: backdoback2, title: "Título 2", text: "Texto 2" }
    // Adicione mais slides conforme necessário
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return(
    <div>
      {slides.map((slide, index) => (
        <div className={`carousel flex justify-center items-center ${index === currentSlide ? 'active' : ''}`} key={index}>
          <img src={slide.src} alt={`Slide ${index + 1}`} />
          <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">{slide.title}</h2>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">{slide.text}</p>
        </div>
      ))}
      <button id="prevSlide" onClick={prevSlide}>Anterior</button>
      <button id="nextSlide" onClick={nextSlide}>Próximo</button>
    </div>
  );  
}

export default Lgservicos
