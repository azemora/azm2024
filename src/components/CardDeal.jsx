import React from 'react';
import styles from "../style"; // Certifique-se de que este arquivo tenha os estilos necessários
import { gamingBackground2, video } from '../assets';

const CardDeal = () => (
  <section 
    className="flex justify-center items-center min-h-screen bg-[#E5E7EB] py-2"
  >
    {/* Container Principal com fundo branco */}
    <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-center padding: '20px 0' w-full max-w-[1900px]">
      
      {/* Título e Subtítulo com linha e estilo similar à página anterior */}
      <div className="flex items-center mb-4">
        <div className="h-[2px] w-[50px] bg-[#272727] mr-4"></div> {/* Linha horizontal */}
        <p className="uppercase text-[black] font-bold text-[18px]">
          Experiencing Transformation
        </p>
      </div>

      {/* Título Principal */}
      <h2 className="font-poppins font-bold xs:text-[48px] text-[30px] text-[#272727] xs:leading-[76.8px] leading-[66.8px] w-full text-center mb-8">
        Beyond Consulting.
      </h2>

      {/* Parágrafo Subtítulo */}
      <p className="font-poppins font-normal text-[#272727] text-[18px] leading-[30.8px] text-center mb-10 max-w-2xl">
        We don't just provide consultancy; we guide you through the practical implementation of changes necessary for your company's growth.
      </p>

      {/* Player de Vídeo */}
      <div className="w-full px-4 flex justify-center mb-8">
        <video 
          controls 
          muted 
          loop 
          style={{ 
            width: '100%', 
            maxWidth: '1400px', 
            borderRadius: '8px'
          }}
          poster={gamingBackground2} // Certifique-se de que o caminho esteja correto
        >
          <source src={video} type="video/mp4" /> {/* Certifique-se de que o caminho para o vídeo esteja correto */}
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Botão com estilo e animação igual ao do Business */}
      <div className="mt-8">
        <a
          href="#"
          className="relative inline-block py-3 px-6 font-bold text-[#272727] bg-white border-none transition-all duration-300 overflow-hidden group"
        >
          {/* Animação de borda lateral */}
          <span className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#e9d790] group-hover:w-full transition-all duration-300"></span>
          
          {/* Animação de linha superior */}
          <span className="absolute left-[20px] top-1/2 -translate-y-1/2 w-0 h-[2px] bg-black group-hover:w-[20px] transition-all duration-300"></span>
          
          {/* Texto do Botão */}
          <span className="relative z-10 pl-6 group-hover:pl-8 group-hover:translate-x-[-10px] transition-all duration-300">
            Saiba Mais
          </span>
        </a>
      </div>

    </div>
  </section>
);

export default CardDeal;
