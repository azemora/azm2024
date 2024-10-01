import React, { useState } from 'react';

const AwardsSection = () => {
  const [showImage, setShowImage] = useState(false);

  const handleButtonClick = () => {
    setShowImage(true);
  };

  const handleReturnClick = () => {
    setShowImage(false);
  };

  return (
    <section className="flex items-center justify-center bg-[#E5E7EB] py-10">
      <div
        className="bg-white rounded-lg p-0 flex flex-col md:flex-row shadow-lg w-full"
        style={{ maxWidth: '1900px', minHeight: '600px', maxHeight: '600px' }}
      >
        {/* Seção de Cartões / Conteúdo */}
        <div
          className="flex items-center justify-center bg-gray-800 relative w-full"
          style={{
            minHeight: '600px',
            padding: '0',
          }}
        >
          {!showImage ? (
            <>
              {/* Container dos cartões com alinhamento e centralização */}
              <div className="flex justify-center items-center w-full space-x-8">
                {/* Primeiro Cartão */}
                <div className="flex flex-col items-center justify-center p-6 bg-gray-900 text-white rounded-md shadow-md w-full md:w-1/3 h-[500px]">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/pt/thumb/3/31/Baldur%27s_Gate_Logo.png/220px-Baldur%27s_Gate_Logo.png"
                    alt="Baldur's Gate"
                    className="w-64 h-64 object-contain mb-4"
                  />
                  <button
                    className="relative inline-block py-4 px-8 font-bold text-[#272727] bg-white border-none transition-all duration-300 overflow-hidden group"
                    onClick={handleButtonClick}
                  >
                    <span className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#e9d790] group-hover:w-full transition-all duration-300"></span>
                    <span className="absolute left-[20px] top-1/2 -translate-y-1/2 w-0 h-[2px] bg-black group-hover:w-[20px] transition-all duration-300"></span>
                    <span className="relative z-10 pl-6 group-hover:pl-8 group-hover:translate-x-[-10px] transition-all duration-300 text-black">SHOW ALL</span>
                  </button>
                </div>

                {/* Segundo Cartão */}
                <div className="flex flex-col items-center justify-center p-6 bg-gray-900 text-white rounded-md shadow-md w-full md:w-1/3 h-[500px]">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Divinity_Original_Sin_II_cover_art.jpg/220px-Divinity_Original_Sin_II_cover_art.jpg"
                    alt="Divinity Original Sin"
                    className="w-64 h-64 object-contain mb-4"
                  />
                  <button
                    className="relative inline-block py-4 px-8 font-bold text-[#272727] bg-white border-none transition-all duration-300 overflow-hidden group"
                    onClick={handleButtonClick}
                  >
                    <span className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#e9d790] group-hover:w-full transition-all duration-300"></span>
                    <span className="absolute left-[20px] top-1/2 -translate-y-1/2 w-0 h-[2px] bg-black group-hover:w-[20px] transition-all duration-300"></span>
                    <span className="relative z-10 pl-6 group-hover:pl-8 group-hover:translate-x-[-10px] transition-all duration-300 text-black">SHOW ALL</span>
                  </button>
                </div>

                {/* Linha Divisória Vertical Amarela */}
                <div
                  className="absolute bg-yellow-400"
                  style={{
                    width: '2px', // Largura da linha mais fina
                    height: '80%', // Altura da linha
                    left: '50%', // Posicionamento central no contêiner pai
                    transform: 'translateX(-50%)', // Centralizar a linha horizontalmente
                    borderRadius: '5px', // Borda arredondada
                    zIndex: 10, // Colocar a linha acima dos cartões
                  }}
                ></div>
              </div>
            </>
          ) : (
            <div
              className="flex items-center justify-center bg-gray-800 text-white rounded-md shadow-md w-full h-full relative"
              style={{ padding: '0' }}
            >
              <button
                className="absolute top-4 right-4 text-4xl text-yellow-400 font-bold hover:text-yellow-500"
                onClick={handleReturnClick}
              >
                &#10005;
              </button>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                alt="Novo Conteúdo"
                className="w-full h-full object-cover max-h-full max-w-full"
                style={{ borderRadius: 'inherit', transition: 'none', overflow: 'hidden' }}
              />
            </div>
          )}
        </div>

        {/* Seção de Texto */}
        <div className="flex flex-col justify-center md:p-20 p-10 w-full">
          {/* Subtítulo com linha preta */}
          <div className="flex items-center mb-4">
            <div className="h-[2px] w-[50px] bg-black mr-4"></div>
            <p className="uppercase text-gray-600 font-bold">Our Awards</p>
          </div>

          {/* Título Principal */}
          <h2 className="text-4xl font-bold text-gray-800 mb-4">A SUCCESS DRIVEN BY PASSION</h2>

          {/* Texto Descritivo */}
          {!showImage ? (
            <p className="text-gray-600 text-lg leading-relaxed text-justify">
              Larian Studios has been making critically acclaimed RPGs since 1996, from the award-winning series Divinity: Original Sin to Baldur's Gate 3 - now winner of five BAFTAs including Best Game and Players' Choice Award, The Game Awards' Game of the Year and Players Voice awards, DICE's Game of the Year, the Game Developers Choice Awards' Game of the Year, and the Golden Joysticks' Ultimate Game of the Year.
            </p>
          ) : (
            <p className="text-gray-600 text-lg leading-relaxed text-justify">
              Thank you for exploring our games! This image represents the change triggered by the "SHOW ALL" button. Our dedication to creating exceptional RPGs remains at the core of Larian Studios' vision.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
