import styles from "../style";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`relative flex md:flex-row flex-col ${styles.paddingY}`}
      style={{
        height: '100vh', // Hero page ocupa 100% da altura da viewport
        width: '100vw', // Ocupa 100% da largura da viewport
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(https://www.your-image-url.com)', // Substitua pelo URL da imagem de fundo
      }}
    >
      <div className={`flex-1 z-10 ${styles.flexStart} flex-col xl:px-12 sm:px-12 px-6`}> {/* Ajuste das margens laterais */}
        
        {/* Subtítulo com linha amarela */}
        <div className="flex items-center mb-2">
          <div className="h-[2px] w-[50px]  bg-[#e9d790] mr-4"></div> {/* Linha amarela */}
          <p className="uppercase text-[#e9d790] font-bold">UNREAL 5</p> {/* Subtítulo */}
        </div>
        
        {/* Título */}
        <h1 className={`text-4xl md:text-5xl font-bold text-white leading-tight`}>
          Serious Game.
        </h1>
        
        {/* Parágrafo */}
        <p className="text-white text-base md:text-lg mt-5 max-w-lg leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam, quam et mollis egestas, sapien erat maximus massa.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam, quam et mollis egestas, sapien erat maximus massa,
        </p>
        
        {/* Botão estilizado */}
        <div className="mt-8">
        <a
    href="#"
    className="relative inline-block py-3 px-6 font-bold text-black bg-white border-none transition-all duration-300 overflow-hidden group"
  >
    {/* Linha amarela lateral */}
    <span className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#e9d790] group-hover:w-full transition-all duration-300"></span>

    {/* Linha horizontal preta que cresce ao hover */}
    <span className="absolute left-[20px] top-1/2 -translate-y-1/2 w-0 h-[2px] bg-black group-hover:w-[20px] transition-all duration-300"></span>

    {/* Texto do botão com movimento à esquerda */}
    <span className="relative z-10 pl-6 group-hover:pl-8 group-hover:translate-x-[-10px] transition-all duration-300">Read More</span>
  </a>
        </div>
      </div>

      <div className={`flex-1 flex z-10 ${styles.flexCenter} md:my-0 my-10`}></div>

    </section>

    
  );

};

export default Hero;
