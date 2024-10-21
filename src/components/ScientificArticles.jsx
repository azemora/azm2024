import React from 'react';
import { img_test1 } from '../assets';

const ScientificArticles = () => {
  const articles = [
    {
      id: 1,
      title: 'Estudo sobre a Biodiversidade Biodiversidade Biodiversidade Biodiversidade',
      description: 'Um estudo abrangente sobre a biodiversidade e suangente sobre a biodiversidade e sngente sobre a biodiversidade e sngente sobre a biodiversidade e s importância para o ecossistema global.',
      imageUrl: img_test1, // Adicionei uma URL de imagem
      downloadLink: '#',
    },
    {
      id: 2,
      title: 'Estudo sobre a Biodiversidade Biodiversidade Biodiversidade Biodiversidade',
      description: 'Relatório detalhado sobre as últimas inovações na agricultura e suas implicações.es na agricultura e suas implicações.es na agricultura e suas implicações.es na agricultura e suas implicações.',
      imageUrl: img_test1,
      downloadLink: '#',
    },
    {
      id: 3,
      title: 'Estudo sobre a Biodiversidade Biodiversidade Biodiversidade Biodiversidade',
      description: 'Uma análise do impacto das mudanças climáticas em diferentes regiões do mundo.climáticas em diferentes regiões do mundo.climáticas em diferentes regiões do mundo.climáticas em diferentes regiões do mundo.',
      imageUrl: img_test1,
      downloadLink: '#',
    },
  ];

  return (
    <section className="flex items-center justify-center py-2">
      <div className="bg-white rounded-lg p-5 flex flex-col shadow-lg w-full max-w-[1900px]">
        <div className="flex-1 flex flex-col items-center px-6 p-10 pt-6">
          {/* Subtítulo com linha preta */}
          <div className="flex items-center mb-2 justify-center">
            <div className="h-[2px] w-[50px] bg-[#272727] mr-4"></div>
            <p className="uppercase text-[black] font-bold">Artigos Científicos</p>
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#272727] leading-tight text-center">Serious Game.</h1>

          {/* Lista de Artigos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">{article.title}</h2>
                  <p className="text-gray-600 text-base mb-4 text-justify">{article.description}</p>
                  {/* Imagem do artigo */}
                  <div className="flex justify-center mb-4">
                    <img src={article.imageUrl} alt={article.title} style={{ width: '500px', height: '300px' }} className="object-cover max-w-full max-h-full" />
                  </div>
                </div>
                <a
                  href={article.downloadLink}
                  className="relative inline-block py-2 px-4 font-bold text-[#272727] bg-white border-none transition-all duration-300 overflow-hidden group mt-auto"
                  download
                >
                  <span className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#e9d790] group-hover:w-full transition-all duration-300"></span>
                  <span className="absolute left-[20px] top-1/2 -translate-y-1/2 w-0 h-[2px] bg-black group-hover:w-[20px] transition-all duration-300"></span>
                  <span className="relative z-10 pl-6 group-hover:pl-8 group-hover:translate-x-[-10px] transition-all duration-300">Download</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScientificArticles;
