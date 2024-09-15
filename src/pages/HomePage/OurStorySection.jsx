import React from 'react';
import yellowDownArrow from '../../assets/yellowdownarrow.png';
import dots from '../../assets/dots.png';
import triangle from '../../assets/triangle.png';
import BounceAnimation from '../../lib/Bounce.jsx';
import Scroll from '../../lib/Scroll.jsx'; 
import { Reveal } from '../../lib/Reveal.jsx';

const OurStorySection = () => {
  return (
    <div id='our-story-section' className="relative bg-[#FFFFFF] py-32 flex flex-col items-center justify-center overflow-hidden">
      {/* Background elements */}
      <img src={dots} className="absolute bottom-[9rem] left-[-1rem]" />
      <img src={triangle} className="absolute bottom-0 left-0 w-[13.043125rem] h-[12.918125rem] rotate-180" />
      <img src={triangle} className="absolute top-0 right-0 w-[13.043125rem] h-[12.918125rem]" />
      <img src={dots} className="absolute top-[10.5rem] right-[-2rem]" />

      {/* Content section */}
      <div className="relative max-w-4xl text-center z-10">
        <Reveal duration={1500}>
        {/* Section Title */}
        <div className="mb-4 flex items-center justify-center space-x-2">
          <span className="w-[115px] h-1 bg-[#FAC80A]"></span>
          <span className="text-black font-bold uppercase tracking-wide font-karla px-8">Our Story</span>
          <span className="w-[115px] h-1 bg-[#FAC80A]"></span>
        </div>

        {/* Heading and Subtext */}
        <h2 className="text-4xl font-semibold text-black mb-6 font-karla">
          A network connecting the <span className="text-[#FF9D10]">Filipinx</span> community and <br />
          <span className="text-[#FF9D10]">STEM</span> at UC Irvine.
        </h2>

        <p className="text-gray-700 mb-6 font-inter pb-10">
          Join FUSION, where ambition meets innovation. We’re a vibrant community empowering Filipinx students and aspiring professionals in Science, Technology, Engineering, and Mathematics (STEM) at UC Irvine. Through our five pillars—Support, Professionalism, Academics, Culture, and Science-Engineering—we foster excellence and provide unparalleled opportunities for growth.
        </p>
        </Reveal>
        {/* Call to Action */}
        <div className="mt-8 flex flex-col items-center pt-20">
          <p className="text-lg font-bold text-black font-karla">WHY JOIN?</p>
          <BounceAnimation>
            <Scroll targetId="engineering-excellence" duration={850}>
              <img src={yellowDownArrow} alt="Yellow Down Arrow" className="mt-2" />
            </Scroll>
          </BounceAnimation>
        </div>
      </div>
    </div>
  );
};

export default OurStorySection;
