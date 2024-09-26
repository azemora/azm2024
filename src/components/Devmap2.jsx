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
    <div className=" p-8">
      <div className="text-center mb-12">
      <h1 className="roadmap-title flex-1 font-poppins font-semibold ss:text-[45px] text-[52px] text-white ss:leading-[40px] leading-[50px]">What we want to do</h1>
      <h2 className="roadmap-subtitle ss:text-[30px]">Going forward</h2>
      </div>
      <div className="relative max-w-6xl mx-auto">
        <div className="absolute w-1 bg-custom_yellow h-full left-1/2 transform -translate-x-1/2"></div>
        
        {roadmapItems.map((item, index) => (
          <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-custom_yellow shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-blue-900 font-semibold text-lg">{index + 1}</h1>
            </div>
            <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-blue-900 text-xl">{item.title}</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Devmap2;
