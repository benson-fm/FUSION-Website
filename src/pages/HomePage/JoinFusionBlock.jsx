import { useState } from 'react';
import joinBackground from '../../images/joinbackground.png';

const JoinFusionBlock = () => {
  // State to track hover
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen relative text-center ${
        isHovered ? 'bg-[#FFD700]' : 'bg-white'
      } transition-colors duration-500`}
      style={{
        background: isHovered
          ? ''
          : `url(${joinBackground}) no-repeat center center`,
        backgroundSize: 'cover',
        backgroundColor: isHovered ? '#FFD700' : '#F0F0F0',
      }}
    >
      {/* Overlay */}
      {!isHovered && (
        <>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[rgba(229,229,229,0.6)] via-transparent to-[#FFA523] z-10"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-white opacity-45 z-10"></div>
        </>
      )}

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center">
        <p className="text-lg font-bold mb-2 tracking-widest whitespace-nowrap font-inter text-black">
          INTERESTED?
        </p>
        <h1 className="text-[8rem] font-extrabold mb-4 tracking-wider whitespace-nowrap font-karla text-black">
          JOIN FUSION
        </h1>
        <p className="text-lg font-bold mb-8 tracking-widest whitespace-nowrap font-inter text-black">
          WE ARE ALWAYS OPEN TO MORE PEOPLE JOINING US!
        </p>
        <button
          className="bg-[#FFA523] hover:bg-[#FFD700] text-white font-inter font-[600] text-[1.5rem] leading-[2.1875rem] tracking-[0.16em] py-2 px-8 border-none cursor-pointer rounded-bl-[25px] rounded-tr-[25px] transition-colors duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          SIGN UP HERE {'>'}
        </button>
      </div>
    </div>
  );
};

export default JoinFusionBlock;
