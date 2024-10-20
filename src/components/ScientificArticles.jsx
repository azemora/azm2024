import React from 'react';

const ScientificArticles = () => {
  const articles = [
    {
      id: 1,
      title: 'Estudo sobre a Biodiversidade',
      description: 'Um estudo abrangente sobre a biodiversidade e sua importância para o ecossistema global.',
      downloadLink: '#',
    },
    {
      id: 2,
      title: 'Inovações na Agricultura',
      description: 'Relatório detalhado sobre as últimas inovações na agricultura e suas implicações.',
      downloadLink: '#',
    },
    {
      id: 3,
      title: 'Impacto das Mudanças Climáticas',
      description: 'Uma análise do impacto das mudanças climáticas em diferentes regiões do mundo.',
      downloadLink: '#',
    },
    // Adicione mais artigos conforme necessário
  ];

  return (
    <section className="flex items-center justify-center py-20 px-8" style={{ padding: '50px 0' }}>
      <div className="bg-white rounded-lg p-10 flex flex-col shadow-lg" style={{ width: '100%', maxWidth: '1900px', maxHeight: '800px' }}>
        <div className="flex-1 flex flex-col items-center xl:px-50 sm:px-12 px-6 pt-10 md:pt-0">
          {/* Subtítulo com linha preta */}
          <div className="flex items-center mb-2 justify-center">
            <div className="h-[2px] w-[50px] bg-[#272727] mr-4"></div>
            <p className="uppercase text-[black] font-bold">Artigos Científicos</p>
          </div>
          
          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#272727] leading-tight text-center">Serious Game.</h1>

          {/* Lista de Artigos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">{article.title}</h2>
                  <p className="text-gray-600 text-base mb-6">{article.description}</p>
                </div>
                <a
                  href={article.downloadLink}
                  className="relative inline-block py-3 px-6 font-bold text-[#272727] bg-white border-none transition-all duration-300 overflow-hidden group mt-auto"
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
