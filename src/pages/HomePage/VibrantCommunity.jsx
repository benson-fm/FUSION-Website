import VibrantCommunityPic from "../../images/VibrantCommunityPic.png";
import GrayBackground from "../../images/GrayBackground.png"
import { Link } from 'react-router-dom';
import {Reveal} from '../../lib/Reveal.jsx';
const VibrantCommunity = () => {
  return (
    <div className="flex items-center justify-between h-[41rem] bg-gray-200 bg-cover bg-center p-20 relative" style={{ backgroundImage: GrayBackground }}>
      {/* Image Wrapper */}
      <div className="flex-1 flex justify-center items-center z-2">
        <img 
          src={VibrantCommunityPic} 
          alt="Engineering Hub" 
          className="rounded-bl-[5rem] rounded-tr-[5rem] w-[39.17rem] h-[25rem] shadow-lg" 
        />
      </div>
      
      {/* Content */}
      <div className="flex-1 max-w-lg text-left z-2">
        <Reveal>
        <h2 className="text-[2.5rem] leading-[2.9225rem] font-bold mb-4 text-black font-karla pb-2">
        A vibrant community celebrating <span className="text-[#FFA523]">diversity</span>
        </h2>
        <p className="text-black font-[400] text-[1rem] leading-[2rem] mb-6 font-inter">
        At FUSION, diversity is our strength. We celebrate inclusivity and encourage representation from all cultures in STEM fields. Through our supportive network, we empower members to excel academically and professionally, fostering an environment where every voice is valued. Together, we champion diversity in technology and engineering, ensuring our collective knowledge enriches our initiatives. Join us in building a community where diversity thrives and innovation knows no boundaries.
        </p>
        <Link
            to="../aboutUs" 
            className="inline-block w-[13.25rem] h-[3.375rem] bg-[#FAC80A] text-black font-inter text-center font-bold text-base tracking-[0.16em] pt-3.5 transition-colors duration-300 hover:bg-[#FFD700] border-none cursor-pointer"
          >
            LEARN MORE &gt;
          </Link>
        </Reveal>
      </div>
    </div>
  );
};

export default VibrantCommunity;
