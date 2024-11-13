import React from 'react';

const Devmap2 = () => {
  const roadmapItems = [
    { title: 'Moving Forward', description: (
      <>
        Moving forward we would like to reskin some systems, optimize others. 
        The game right now is an mvp, we would like to make a full release. Include more maps, include more dialogues,
         include more mechanics and make it even more entretaining and fun. We want to develop our assets and characters
          for it to really come to life and look unique.
      </>
    )},
    { title: 'Federal University of Technology of Paraná Partnership for Hiring help', description: (
      <>
        This project began using the unreal 4.8 and when unreal 5 released i just did not care, i upgraded it instantly, unreal 5 was just too much fun to miss it. But, the project is using an outdated movement system, the first to target will be to adjust for the new input system released. 
      </>
    )},
    { title: 'More of everything', description: (
      <>
        
Our dialogue is very modular and perform as expected, but we can polish it and make it better. The same goes for the quests, we want to make more, more dialogues, more quests, explore even further all the genetic content. 
      </>
    )},
    { title: 'New Genetic Mechanics', description: (
      <>
        To ensure the content of the game was accurate and educationally relevant, we conducted extensive research in collaboration with genetics teachers.
        Through interviews and consultations, we identified the key topics that needed to be addressed to enhance students' understanding of genetics. 
        These topics include<span className="font-bold"> hereditary concepts, Mendel's Laws, genotypes and phenotypes, dominance and recessivity, complete and incomplete dominance,
        codominance, and the use of Punnett squares</span>. By incorporating these topics, we aimed to create a comprehensive and engaging learning tool that aligns 
        with the curriculum and addresses the specific areas where students typically struggle.
      </>
    )},
    { title: 'Testing with schools partners students', description: (
      <>
      “We have successfully tested our MVP with teachers, receiving unanimous approval and acceptance. However, this is just the beginning. Our primary goal is to test the MVP with students, who are the true target audience. Thanks to our partnerships with schools, we have the opportunity to gather valuable feedback from students. This input will be crucial in refining the tool to ensure it meets their needs effectively.”
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
     
      </>
    )},
    { title: 'Approval and Partnerships', description: (
      <>
       With these positive results, we have established partnerships with two schools, Colégio João Manoel Mondrone and Escola Marcilio Dias. These schools have generously provided us with full access to test the game with their students and consult with their teachers, ensuring that our game continues to be refined and optimized for educational impact.
      </>
    )},
    { title: 'Seeking Finance', description: (
      <>
        Finalize all game elements; Prepare for launch; Test the mobile controls with <span className="font-bold">students and teachers</span>.
      </>
    )},
  ];

  return (
    <div className="p-4 md:p-8">
      <div className="relative max-w-6xl mx-auto">
        {/* Linha amarela na lateral para mobile */}
        <div className="absolute w-[2px] bg-[#e9d790] h-full left-2 md:left-0 transform"></div>
        {roadmapItems.map((item, index) => (
          <div key={index} className="mb-8 flex flex-col md:flex-row items-start md:items-center w-full">
            <div className="order-1 w-full md:w-2/12 flex justify-center relative mb-4 md:mb-0">
              {/* Linha horizontal que toca a bolinha */}
              <div className="absolute top-1/2 -left-8 w-[calc(100%-2rem)] md:w-10 h-[2px] bg-[#e9d790] hidden md:block"></div>
              <div className="z-20 flex items-center bg-[#e9d790] shadow-xl w-6 h-6 md:w-8 md:h-8 rounded-full">
                <h1 className="mx-auto text-[#272727] font-semibold text-sm md:text-lg">{index + 1}</h1>
              </div>
            </div>
            <div className="order-1 bg-white rounded-lg shadow-xl w-full md:w-10/12 px-6 py-4 md:px-12 md:py-6 ml-0 md:ml-10">
              {/* Título e Subtítulo com tamanhos reduzidos no mobile */}
              <h1 className="text-2xl md:text-4xl font-bold text-[#272727] leading-tight">Serious Game.</h1>
              <div className="flex items-center mb-2 mt-2 md:mt-4">
                <div className="h-[2px] w-[30px] md:w-[50px] bg-[#272727] mr-2 md:mr-4"></div>
                <p className="uppercase text-black font-bold text-sm md:text-base">{item.title}</p>
              </div>
              
              <p className="text-[#272727] text-sm md:text-lg mt-3 md:mt-5 leading-relaxed text-justify">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Devmap2;