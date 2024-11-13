import styles from "../style";
import GetStarted from "./GetStarted";

import { timead } from '../assets';


const Hero2 = () => {
  return (
    <section
      id="home"
      className={`relative flex items-center justify-center ${styles.paddingY}`}
      style={{ minHeight: '50vh' }} // Reduzindo a altura vertical da página
    >
      <div className={`flex-1 ${styles.flexCenter} flex-col sm:px-12 px-6 text-center items-center`}> {/* Centralizando o texto */}
        
        {/* Título */}
        <h1 className={`text-4xl md:text-5xl font-bold text-[#fbf7ea] leading-tight mb-2`} style={{ fontFamily: 'fatfrank, sans-serif', fontWeight: 400, fontStyle: 'normal' }}> {/* Cor do título alterada e fonte atualizada */}
          Our Project Timeline
        </h1>

        {/* Subtítulo */}
        <div className="flex items-center justify-center mb-4">
          <div className="h-[2px] w-[50px] bg-[#e9d790] mr-4"></div> {/* Linha amarela */}
          <p className="uppercase text-[#e9d790] font-bold">Starting in 2019</p> {/* Subtítulo atualizado */}
        </div>

        {/* Imagem */}
        <div className="w-full flex items-center justify-center">
        <img src={timead} alt="Timeline Advertisement" style={{ transform: 'scale(0.75)' }} /> {/* Imagem adicionada */}
        </div>
      </div>
    </section>
  );
};

export default Hero2;