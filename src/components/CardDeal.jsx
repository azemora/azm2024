import React from 'react';
import styles from "../style"; // Ensure this imports your custom styles
import Button from './Button'; // Update with the correct path to your button component
import { gamingBackground2, video } from '../assets';

const CardDeal = () => (
  <section 
    className={`${styles.flexCenter} flex-col items-center justify-center min-h-screen bg-[#E5E7EB] py-16`} 
  >
    {/* Title Section with Similar Styling */}
    <div className="flex items-center mb-4">
      <div className="h-[2px] w-[50px] bg-[#272727] mr-4"></div> {/* Horizontal line */}
      <p className="uppercase text-[black] font-bold text-[18px]">
        Experiencing Transformation
      </p>
    </div>

    {/* Main Title */}
    <h2 className="font-poppins font-bold xs:text-[48px] text-[30px] text-[#272727] xs:leading-[76.8px] leading-[66.8px] w-full text-center mb-8">
      Beyond Consulting.
    </h2>

    {/* Subtitle Paragraph with Added Styling */}
    <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-center mb-10 max-w-2xl">
      We don't just provide consultancy; we guide you through the practical implementation of changes necessary for your company's growth.
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
    
    {/* Button with Similar Styling */}
    <Button title="Saiba mais" className="mt-10 text-[#272727] bg-white hover:bg-[#e9d790] transition-all duration-300 px-8 py-3 font-bold rounded" /> {/* Ensure your Button component accepts these props */}
  </section>
);

export default CardDeal;
