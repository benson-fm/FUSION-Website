import React, { useRef } from 'react';
import AangFam from '../../../images/AangFam.png';
import ZukoFam from '../../../images/ZukoFam.png';
import YueFam from '../../../images/YueFam.png';
import SukiFam from '../../../images/SukiFam.png';
import OrangeBackground from '../../../images/OrangeBackground.png';
import LeftSquare from '../../../images/LeftSquare.png';
import RightSquare from '../../../images/RightSquare.png';
import { useIsVisible } from "../../../components/useIsVisible"; // Adjust the path as necessary

// Reusable FamSection component
const FamSection = ({ title, image, isVisible }) => {
  return (
    <div className={`flex flex-col items-center transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <img className="w-[300px] h-[200px] object-cover rounded-lg" src={image} alt={`${title} Image`} />
      <h2 className="mt-4 text-2xl font-bold text-white">{title}</h2>
    </div>
  );
};

// Main OrangeFam component
const OrangeFam = () => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <section
      className="relative w-full h-[943px] flex flex-col items-center text-white"
      style={{
        backgroundImage: `url(${OrangeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Semi-transparent orange overlay */}
      <div className="absolute inset-0 bg-[#ffa523] opacity-80"></div>

      {/* Left and Right Squares */}
      <div className="absolute left-0 top-0 ">
        <img src={LeftSquare} alt="Left Square" />
      </div>
      <div className="absolute right-0 top-0 ">
        <img src={RightSquare} alt="Right Square"/>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className='pt-24' ref={ref}>
            <div className="flex items-center justify-center mb-2">
                <div className={`border-t border-[#FAC80A] w-60 border-[2px] mr-2 transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
                <h1 className={`text-5xl font-karla font-[700] leading-[52px] text-white transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>‘23 - ‘24 Fams</h1>
                <div className={`border-t border-[#FAC80A] w-60 border-[2px] ml-2 transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
            <p className={`font-inter mt-4 text-center w-[50rem] font-[400] text-[16px] leading-8 transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            For the 2023-2024 school year, our Family theme is inspired by the release of the live-action movie "Avatar: The Last Airbender."
            Each family has been named after a significant character from the series.
            </p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          <FamSection title="Aang Fam" image={AangFam} isVisible={isVisible} />
          <FamSection title="Zuko Fam" image={ZukoFam} isVisible={isVisible} />
          <FamSection title="Yue Fam" image={YueFam} isVisible={isVisible} />
          <FamSection title="Suki Fam" image={SukiFam} isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default OrangeFam;
