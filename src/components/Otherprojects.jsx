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
    <section className="flex items-center justify-center bg-[#E5E7EB] py-2">
      <div
        className={`bg-white rounded-lg p-0 flex flex-col md:flex-row shadow-lg w-full overflow-hidden`}
        style={{
          maxWidth: '1900px',
          height: activePanel && window.innerWidth >= 768 ? '600px' : 'auto',
          transition: 'height 0.3s ease-in-out',
          
        }}
      >
        {/* Seção de Cartões / Conteúdo */}
        <div
          className={`flex items-center justify-center bg-gray-800 relative w-full h-full`}
          style={{ padding: '0' }}
        >
          {!activePanel ? (
            <div className="flex flex-col md:flex-row justify-center items-center w-full md:space-x-12 space-y-4 md:space-y-0">
              {/* Primeiro Cartão */}
              <div className="relative bg-gray-900 rounded-md shadow-md w-full md:w-1/3 h-[600px] overflow-hidden">
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
              <div className="relative bg-gray-900 rounded-md shadow-md w-full md:w-1/3 h-[600px] overflow-hidden">
                <img
                  src={img_test1}
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
                height: window.innerWidth >= 768 ? '600px' : 'auto',
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
                  className="w-full h-full object-cover"
                  style={{
                    borderRadius: 'inherit',
                    transition: 'none',
                    overflow: 'hidden',
                  }}
                />
              )}
              {activePanel === 2 && (
                <img
                  src={img_test1}
                  alt="Novo Conteúdo"
                  className="w-full h-full object-cover"
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
        <div className="flex flex-col justify-start md:p-20 p-8 w-full text-left md:text-left">
          <div className="flex items-center mb-4 justify-start">
            <div className="h-[2px] w-[50px] bg-black mr-4"></div>
            <p className="uppercase text-gray-600 font-bold">
              {!activePanel ? 'Our Awards' : activePanel === 1 ? 'Prêmios do Painel 1' : 'Prêmios do Painel 2'}
            </p>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Lorem ipsum psoa
            {!activePanel ? 'A SUCCESS DRIVEN BY PASSION' : activePanel === 1 ? 'Título do Painel 1' : 'Título do Painel 2'}
          </h2>

          {!activePanel ? (
            <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
              Lorem ipsum psoaLorem ipsum psoaLorem ipsum psoaLorem ipsum psoaLorem ipsum psoaLorem ipsum psoaLorem ipsum psoaLorem ipsum psoa
            </p>
          ) : (
            <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
              {activePanel === 1 ? 'Texto do painel 1' : 'Lorem ipsum psoaLorem ipsum psoaLorem ipsum psoaLorem ipsum psoaLorem ipsum psoaLorem ipsum psoaLorem ipsum psoaLorem ipsum psoaLorem ipsum psoaLorem ipsum psoaLorem ipsum psoaLorem ipsum psoaLorem ipsum psoa'}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
