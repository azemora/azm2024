import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({ slides, updateCurrentSlide, autoSlide = false, autoSlideInterval = 3000 }) => {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    const newIndex = curr === 0 ? slides.length - 1 : curr - 1;
    setCurr(newIndex);
    updateCurrentSlide(newIndex);
  };

  const next = () => {
    const newIndex = curr === slides.length - 1 ? 0 : curr + 1;
    setCurr(newIndex);
    updateCurrentSlide(newIndex);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  return (
    <div className="relative">
      {/* Carousel (Imagem) */}
     
      <div className="relative w-full" style={{ height: '500px' }}>
  <div className="absolute inset-0 overflow-hidden">
    <div
      className="flex transition-transform ease-out duration-1000 w-full h-full"
      style={{ transform: `translateX(-${curr * 100}%)` }}
    >
      {slides.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className="w-full h-full object-cover block rounded-img"
        />
      ))}
    </div>
  </div>
</div>

      {/* Novo Contêiner para Bolinhas e Setas */}
      <div className="w-full flex justify-center mt-4">
        <div className="relative flex justify-between items-center w-64 bg-white p-2 rounded-full shadow-lg">
          {/* Botão para a Esquerda */}
          <button
            onClick={prev}
            className="p-1 text-gray-800 hover:text-[#e9d790] transition-colors duration-300"
          >
            <ChevronLeft size={23} />
          </button>

          {/* Bolinhas do Carrossel */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`cursor-pointer w-3 h-3 rounded-full transition-all ${
                  curr === index ? "bg-opacity-100" : "bg-opacity-50"
                }`}
                style={{
                  backgroundColor: curr === index ? "#e9d790" : "#E5E7EB",
                }}
                onClick={() => updateCurrentSlide(index)}
              />
            ))}
          </div>

          {/* Botão para a Direita */}
          <button
            onClick={next}
            className="p-1 text-gray-800 hover:text-[#e9d790] transition-colors duration-300"
          >
            <ChevronRight size={23} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
