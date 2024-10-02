import React, { useState } from 'react';
import { img_test1, img_test2, wp_contato } from '../assets';

const AwardsSection = () => {
  const [activePanel, setActivePanel] = useState(null);

  const handleButtonClick = (panelNumber) => {
    setActivePanel(panelNumber);
  };

  const handleReturnClick = () => {
    setActivePanel(null);
  };

  return (
    <section className="flex items-center justify-center bg-[#E5E7EB] py-10">
      <div
        className={`bg-white rounded-lg p-0 flex flex-col md:flex-row shadow-lg w-full ${
          activePanel ? 'overflow-hidden' : ''
        }`}
        style={{
          maxWidth: '1900px',
          height: '600px',
          transition: 'height 0.3s ease-in-out',
        }}
      >
        {/* Seção de Cartões / Conteúdo */}
        <div
          className={`flex items-center justify-center bg-gray-800 relative w-full h-full`}
          style={{ padding: '0' }}
        >
          {!activePanel ? (
            <div className="flex flex-col md:flex-row justify-center items-center w-full md:space-x-8 space-y-4 md:space-y-0">
              {/* Primeiro Cartão */}
              <div className="relative bg-gray-900 rounded-md shadow-md w-full md:w-1/3 h-[300px] md:h-[500px] overflow-hidden">
                <img
                  src={img_test1}
                  alt="PAINEL 1"
                  className="w-full h-full object-cover"
                />
                <button
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-block py-2 px-6 font-bold text-[#272727] bg-white border-none text-sm transition-all duration-300 overflow-hidden group z-20"
                  onClick={() => handleButtonClick(1)}
                >
                  <span className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#e9d790] group-hover:w-full transition-all duration-300"></span>
                  <span className="absolute left-[20px] top-1/2 -translate-y-1/2 w-0 h-[2px] bg-black group-hover:w-[20px] transition-all duration-300"></span>
                  <span className="relative z-10 pl-4 group-hover:pl-6 group-hover:translate-x-[-10px] transition-all duration-300 text-black">
                    Show more
                  </span>
                </button>
              </div>

              {/* Segundo Cartão */}
              <div className="relative bg-gray-900 rounded-md shadow-md w-full md:w-1/3 h-[300px] md:h-[500px] overflow-hidden">
                <img
                  src={img_test2}
                  alt="PAINEL 2"
                  className="w-full h-full object-cover"
                />
                <button
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-block py-2 px-6 font-bold text-[#272727] bg-white border-none text-sm transition-all duration-300 overflow-hidden group z-20"
                  onClick={() => handleButtonClick(2)}
                >
                  <span className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#e9d790] group-hover:w-full transition-all duration-300"></span>
                  <span className="absolute left-[20px] top-1/2 -translate-y-1/2 w-0 h-[2px] bg-black group-hover:w-[20px] transition-all duration-300"></span>
                  <span className="relative z-10 pl-4 group-hover:pl-6 group-hover:translate-x-[-10px] transition-all duration-300 text-black">
                    Show more
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div
              className="flex items-center justify-center bg-gray-800 text-white rounded-md shadow-md w-full h-full relative"
              style={{
                padding: '0',
                maxHeight: '600px',
                maxWidth: '100%',
              }}
            >
              <button
                className="absolute top-4 right-4 text-4xl text-yellow-400 font-bold hover:text-yellow-500"
                onClick={handleReturnClick}
              >
                &#10005;
              </button>
              {activePanel === 1 && (
                <img
                  src={img_test1}
                  alt="Novo Conteúdo"
                  className="max-w-full max-h-full object-contain md:max-h-full md:max-w-full"
                  style={{
                    borderRadius: 'inherit',
                    transition: 'none',
                    overflow: 'hidden',
                  }}
                />
              )}
              {activePanel === 2 && (
                <img
                  src={img_test2}
                  alt="Novo Conteúdo"
                  className="max-w-full max-h-full object-contain md:max-h-full md:max-w-full"
                  style={{
                    borderRadius: 'inherit',
                    transition: 'none',
                    overflow: 'hidden',
                  }}
                />
              )}
            </div>
          )}
        </div>

        {/* Seção de Texto */}
        <div className="flex flex-col justify-center md:p-20 p-10 w-full text-center md:text-left">
          <div className="flex items-center mb-4 justify-center md:justify-start">
            <div className="h-[2px] w-[50px] bg-black mr-4"></div>
            <p className="uppercase text-gray-600 font-bold">Our Awards</p>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">A SUCCESS DRIVEN BY PASSION</h2>

          {!activePanel ? (
            <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
              Larian Studios has been making critically acclaimed RPGs since 1996, from the award-winning series Divinity: Original Sin to Baldur's Gate 3.
            </p>
          ) : (
            <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
              {activePanel === 1 ? 'Texto do painel 1' : 'Texto do painel 2'}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
