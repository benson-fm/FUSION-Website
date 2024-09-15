import { Link } from 'react-router-dom';
import EngineeringHubPic from '../../images/EngineeringHubPic.png'; // Adjust the path as needed
import {Reveal} from '../../lib/Reveal.jsx';

const EngineeringExcellence = () => {
  return (
    <div id='engineering-excellence' className="grid grid-cols-[60%_40%] h-[41rem] relative bg-white">
      {/* White Container */}
      <div className="flex justify-center items-center p-8 md:p-16 z-1">
        <Reveal>
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-[2.5rem] leading-[2.9225rem] font-bold mb-4 text-black font-karla pb-2">
            A hub of <span className='text-[#FFA523]'>engineering excellence</span> for all
          </h2>
          <p className="text-black font-[400] text-[1rem] leading-[2rem] mb-6 font-inter">
            From pioneering projects like the FUSION Engineering Project (FEP) to initiatives across STEM disciplines, FUSION empowers members to explore their potential. With a commitment to fostering leadership and technical skills, we provide a platform where ideas flourish and solutions are born. Join us and become part of a collective dedicated to shaping the future of STEM.
          </p>
          <Link
            to="../projects/FEP" 
            className="inline-block w-[13.25rem] h-[3.375rem] bg-[#FFA523] text-white font-inter text-center font-bold text-base tracking-[0.16em] pt-3 transition-colors duration-300 hover:bg-[#ffcc00] border-none cursor-pointer"
          >
            LEARN MORE &gt;
          </Link>
        </div>
        </Reveal>
      </div>

      {/* Orange Container */}
      <div className="bg-[#FFA523] flex items-center justify-center overflow-hidden relative">
      </div>

      {/* Image */}
      <img src={EngineeringHubPic} alt="Engineering Hub" className="w-[39.17rem] h-[25rem] shadow-lg absolute top-1/2 right-[30%] transform translate-x-[50%] -translate-y-[50%] z-2 rounded-bl-[5rem] rounded-tr-[5rem]" />
      
    </div>
  );
};

export default EngineeringExcellence;
