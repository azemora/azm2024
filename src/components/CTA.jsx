import styles from "../style";
import BTdownload from "./BTdownload";
import Button from "./Button";

const CTA = () => (
  <section 
    className={`flex items-center justify-center py-0`} 
    style={{ backgroundColor: '#E5E7EB', padding: '50px 0' }}
  >
    <div 
      className="bg-[white] rounded-lg p-10 flex flex-col md:flex-row"
      style={{ width: '100%', maxWidth: '1900px', maxHeight: '800px' }}
    >
      <div 
        className={`flex-1 flex flex-col xl:px-50 sm:px-12 px-6 pt-10 md:pt-0`} 
      >
        {/* Subtítulo com linha preta */}
        <div className={`flex items-center mb-2`}>
          <div className="h-[2px] w-[50px] bg-[#272727] mr-4"></div>
          <p className={`uppercase text-[black] font-bold`}>Entre em contato conosco!</p>
        </div>

        {/* Título */}
        <h1 className={`text-4xl md:text-5xl font-bold text-[#272727] leading-tight`}>
          Serious Game.
        </h1>

        {/* Parágrafo */}
        <p className={`text-[#272727] text-base md:text-lg mt-5 max-w-lg leading-relaxed`}>
          Tenha equipes produtivas que dominem ferramentas de gestão do tempo e de tarefas, reduzindo a procrastinação e aumentando os resultados do dia a dia.
        </p>

        {/* Botão estilizado com animação */}
        <div className={`mt-8`}>
          <a
            href="#"
            className="relative inline-block py-3 px-6 font-bold text-[#272727] bg-white border-none transition-all duration-300 overflow-hidden group"
          >
            <span className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#e9d790] group-hover:w-full transition-all duration-300"></span>
            <span className="absolute left-[20px] top-1/2 -translate-y-1/2 w-0 h-[2px] bg-black group-hover:w-[20px] transition-all duration-300"></span>
            <span className="relative z-10 pl-6 group-hover:pl-8 group-hover:translate-x-[-10px] transition-all duration-300">Entre em Contato</span>
          </a>
        </div>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <BTdownload />
      </div>
    </div>
  </section>
);

export default CTA;
