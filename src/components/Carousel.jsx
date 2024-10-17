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
    <div className="relative w-full h-auto overflow-hidden"> {/* Altura automática para se ajustar a diferentes telas */}
      {/* Carousel (Imagem) */}
      <div className="w-full h-full">
        <div
          className="flex transition-transform ease-out duration-1000 w-full h-full"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((img, index) => (
            <div 
              key={index} 
              className="w-full h-full flex items-center justify-center flex-shrink-0 overflow-hidden" 
              style={{ maxHeight: '100%', maxWidth: '100%' }} // Removi os limites excessivos de tamanho
            >
              <img
                src={img}
                alt={`Slide ${index}`}
                className="object-contain w-full h-full" // A imagem se ajusta ao contêiner corretamente
                style={{
                  height: '100%', // Ajusta a altura da imagem de acordo com o contêiner
                  width: '100%',  // Largura proporcional ao contêiner
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Contêiner para Bolinhas e Setas */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-auto flex justify-center items-center bg-white bg-opacity-50 p-2 rounded-full shadow-lg">
        {/* Botão para a Esquerda */}
        <button
          onClick={prev}
          className="p-1 text-gray-800 hover:text-[#e9d790] transition-colors duration-300"
        >
          <ChevronLeft size={23} />
        </button>

        {/* Bolinhas do Carrossel */}
        <div className="flex gap-2 mx-4">
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
  );
};

export default Carousel;
