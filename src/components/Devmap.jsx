import React from 'react';

const Devmap = () => {
  const roadmapItems = [
    { title: 'Targeting the problem', description: (
      <>
        The project aims to tackle the significant challenges and disinterest among students in Brazilian public schools regarding science. Due to outdated textbooks, 
        a lack of innovative teaching methods, <span className="font-bold">inadequate and precarious lab infrastructure, science is often seen as difficult and unengaging </span>. This project proposes 
        developing a serious game to make learning more engaging and accessible. By using interactive gameplay, the game will simplify complex concepts and enhance
         students'understanding and interest in the subject, ultimately improving their academic performance and attitude towards science.
      </>
    )},
    { title: 'Ethics Committee involving Human Beings', description: (
      <>
        The Research Ethics Committee involving Human Beings (CEP) of the UTFPR institution is composed of a team of professionals with multidisciplinary 
        backgrounds who are working to ensure the respect of your rights as a research participant. Its purpose is to evaluate whether the research has been
        planned and will be conducted ethically.  <span className="font-bold">Our project was approved!</span>.
      </>
    )},
    { title: 'What topic to first address? Research with teachers!', description: (
      <>
        Genetics can be particularly challenging due to its abstract concepts, extensive scientific vocabulary, and the need for a high level of analytical 
        thinking. <span className="font-bold">By focusing on genetics,</span> we aim to address these difficulties directly, making the subject more accessible and engaging through interactive 
        gameplay that simplifies complex concepts and fosters a deeper understanding. Additionally, starting with genetics allows us to test and validate our 
        approach with teachers, ensuring its effectiveness before moving on to other science topics like math
      </>
    )},
    { title: 'Research with Genetic Teachers and Genetic Professionals', description: (
      <>
        To ensure the content of the game was accurate and educationally relevant, we conducted extensive research in collaboration with genetics teachers.
        Through interviews and consultations, we identified the key topics that needed to be addressed to enhance students' understanding of genetics. 
        These topics include<span className="font-bold"> hereditary concepts, Mendel's Laws, genotypes and phenotypes, dominance and recessivity, complete and incomplete dominance,
        codominance, and the use of Punnett squares</span>. By incorporating these topics, we aimed to create a comprehensive and engaging learning tool that aligns 
        with the curriculum and addresses the specific areas where students typically struggle.
      </>
    )},
    { title: 'Not a boring game, an Unreal Engine 5 game!', description: (
      <>
       It is crucial that the game is fun and engaging, as many serious games tend to be boring and fail to capture students' interest. To effectively combat disinterest,
        we need to design the game carefully to ensure it is enjoyable. We incorporated <span className="font-bold">Mihaly Csikszentmihalyi's concept of the flow state,</span> creating challenges that are 
        neither too easy nor too difficult, keeping students fully engaged and motivated. Additionally, using <span className="font-bold">Unreal Engine</span> allows us to explore high-quality visuals that
         can compete with entertainment games in the market, further enhancing the game's appeal and making learning genetics an enjoyable experience
      </>
    )},
    { title: 'Development', description: (
      <>
        The game is structured into multiple levels, each designed to progressively introduce and reinforce key concepts in genetics.  Each level presents challenges that require students to apply their knowledge, reinforcing learning through practice. The mechanics developed and implemented were: 
         <div className="mb-4"></div>

         <span className="font-bold mb-4 block">Player</span>
          <ul className="list-disc list-inside">
            <li>Movement;</li>
            <li>Pickup and drop objects;</li>
            <li>Health points and life/tries system;</li>
          </ul>

          <div className="mb-4"></div>

          <span className="font-bold mb-4 block">Genetics</span>
          <ul className="list-disc list-inside">
            <li>Dynamic punnet square system;</li>
            <li>Genotips and fenotips modular system;</li>
            <li>Recover and fail safety for all systems;</li>
            <li>Dynamic foliage and objects that responds to quest progress and completion;</li>
          </ul>

          <div className="mb-4"></div>

          <span className="font-bold mb-4 block">World:</span>
          <ul className="list-disc list-inside">
            <li>NPC with dialogue and choices system;</li>
            <li>Blockout levels with platforming as part of the gameplay;</li>
            <li>Quest and objective systems;</li>
            <li>Teleports;</li>
            <li>Checkpoints;</li>
            <li>Respawn;</li>
            <li>Options menu system;</li>
            <li>Score system;</li>
          </ul>



      </>
    )},
    { title: 'Testing and results', description: (
      <>
      Participants unanimously reported that the game operated flawlessly, with all functions and instances working correctly. 
      Five out of six participants played through all phases of the game, while one did not due to time constraints. 
      The educational content was effectively integrated, making complex genetics concepts more accessible and engaging.
       Additionally, the artistic direction received high praise for its visual appeal. Most importantly, the game demonstrated 
       significant potential to retain students' attention, suggesting it could be a valuable resource in enhancing genetics
        education in classrooms. Specific feedback included: all six participants reported the system functioned correctly,
         five participants played all phases, three participants found the game fun, and three participants found it very enjoyable.
          Regarding the art direction, five participants found it pleasant. For the genetics concepts, four participants found them
           well presented, and two participants found them excellently presented. The visualization of contextual situations was 
           easily understood by three participants, while three participants found it very clear. The game's narrative was well 
           understood by five participants, and the objectives were clear to four participants, while two participants found them very clear.
            The potential to capture attention regarding genetics content was recognized by four participants, with two participants strongly agreeing.
             Lastly, five participants would use the game in their classes, with one participant agreeing strongly. 
             All six participants were teachers from different public schools in Brazil.
      </>
    )},
    { title: 'Approval and Partnerships', description: (
      <>
       With these positive results, we have established partnerships with two schools, Colégio João Manoel Mondrone and Escola Marcilio Dias. These schools have generously provided us with full access to test the game with their students and consult with their teachers, ensuring that our game continues to be refined and optimized for educational impact.
      </>
    )},
    { title: 'MVP Delivered fo the teachers', description: (
      <>
        Finalize all game elements; Prepare for launch; Test the mobile controls with <span className="font-bold">students and teachers</span>.
      </>
    )},
  ];


  return (
    <div className="p-8">
      <div className="text-center mb-12">
        <h1 className="roadmap-title flex-1 font-poppins font-semibold ss:text-[45px] text-[52px] ss:leading-[40px] leading-[50px]">Our Project Timeline</h1>
        <h2 className="text-[#e9d790] ss:text-[30px]">Starting in 2019</h2>
      </div>
      <div className="relative max-w-6xl mx-auto">
        <div className="absolute w-1 bg-[#e9d790] h-full left-0 transform"></div> {/* Linha amarela à esquerda */}
        {roadmapItems.map((item, index) => (
          <div key={index} className="mb-8 flex items-center w-full">
            <div className="order-1 w-2/12 flex justify-center relative">
              {/* Linha horizontal que toca a bolinha */}
              <div className="absolute top-1/2 -left-8 w-[calc(100%-2rem)] h-[2px] bg-[#e9d790]"></div>
              <div className="z-20 flex items-center bg-[#e9d790] shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-[#272727] font-semibold text-lg">{index + 1}</h1>
              </div>
            </div>
            <div className="order-1 bg-white rounded-lg shadow-xl w-10/12 px-12 py-6 ml-10"> {/* Aumenta a largura e margens */}
              {/* Título e Subtítulo */}
              <h1 className="text-4xl md:text-5xl font-bold text-[#272727] leading-tight">Serious Game.</h1>
              <div className="flex items-center mb-2 mt-4">
                <div className="h-[2px] w-[50px] bg-[#272727] mr-4"></div>
                <p className="uppercase text-black font-bold">{item.title}</p>
              </div>
              
              <p className="text-[#272727] text-base md:text-lg mt-5 leading-relaxed text-justify">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Devmap;