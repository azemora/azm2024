// Business.js
import React, { useState } from 'react';
import Carousel from "./Carousel"; // Make sure this component is properly imported
import Button from "./Button"; // Make sure this component is properly imported
import { img1_c, img2_c, img3_c } from '../assets'; // Ensure these are your image imports
import styles, { layout } from "../style"; // Ensure you have these styles defined

const Business2 = () => {
  // Images, titles, and paragraphs for the carousel
  const carouselData = [
    {
      img: img1_c,
      title: "Jogos de Impacto",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae justo dictum, molestie nisl a, aliquet nisl. Aenean pharetra vestibulum tellus, vel mattis est porttitor id. "
    },
    {
      img: img2_c,
      title: "Além da Consultoria",
      paragraph: "Vamos além da consultoria, facilitando a implementação prática das mudanças necessárias."
    },
    {
      img: img3_c,
      title: "Transformação Vivencial",
      paragraph: "Com a OptSec, você vivencia a transformação, posicionando sua empresa para prosperar na era digital."
    }
  ];

  // State to keep track of the current index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to update the current slide index
  const updateCurrentSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="features" className={`${layout.section} flex`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          {carouselData[currentSlide].title}
        </h2>
        <p className={`${styles.paragraph} ${styles.justified} max-w-[470px] mt-5`}>
          {carouselData[currentSlide].paragraph}
        </p>

        <Button styles={`mt-10`}>Entre em contato</Button>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <Carousel 
          slides={carouselData.map(data => data.img)} 
          autoSlide={true} 
          autoSlideInterval={5000} 
          updateCurrentSlide={updateCurrentSlide} 
    
        />
      </div>

    </section>
    
  );
};

export default Business2;
