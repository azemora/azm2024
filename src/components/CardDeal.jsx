import React from 'react';
import styles from "../style"; // Adjust if you have specific styles to import
import Button from './Button'; // Update with the path to your button component
import { gamingBackground2, video } from '../assets';

const CardDeal = () => (
  <section 
    className={`${styles.flexCenter} flex-col items-center justify-center min-h-screen`} 
    style={{ backgroundColor: "bg-custom-gradient1" }} // Ensure this is a valid color or gradient
  >
    {/* Title */}
    <h2 className="font-poppins font-semibold xs:text-[48px] text-[30px] text-white xs:leading-[76.8px] leading-[66.8px] w-full text-center">
      Lorem Pisum Lordetr
    </h2>
    
    {/* Paragraph with added margin bottom */}
    <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-center mb-10"> {/* Adjust the mb-10 to increase or decrease the space */}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae justo dictum, vel mattis est porttitor id. 
    </p>
    
    {/* Video Player */}
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
        poster={gamingBackground2} // Ensure this is the correct path to your placeholder image
      >
        <source src={video} type="video/mp4" /> {/* Ensure this is the correct path to your video file */}
        Your browser does not support the video tag.
      </video>
    </div>
    
    {/* Button */}
    <Button title="Saiba mais" className="mt-10" /> {/* Ensure your Button component accepts these props */}

  </section>
);

export default CardDeal;
