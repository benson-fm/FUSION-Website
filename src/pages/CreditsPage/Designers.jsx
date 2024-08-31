import React from "react";
import ProfileCard from "../../components/ProfileCard";
import LinkedInIcon from "../../images/LinkedInIcon.png";
import WebsiteIcon from "../../images/WebsiteIcon.png";

import Daniela from "../../images/Daniela.png";
import Leilani from "../../images/Leilani.png";
import Noah from "../../images/Noah.png";

// Sample data for designers
const designers = [
  {
    name: "Daniela Herrera",
    position: "Design Lead",
    photoUrl: Daniela,
    linkedin: "https://www.linkedin.com/in/daniela-herrera/",
    website: "https://danielaherrera.com",
  },
  {
    name: "Leilani Bascos",
    position: "Designer",
    photoUrl: Leilani,
    linkedin: "https://www.linkedin.com/in/leilani-bascos/",
  },
  {
    name: "Noah Tizon",
    position: "Designer",
    photoUrl: Noah,
    linkedin: "https://www.linkedin.com/in/noah-tizon/",
  },
];

const Designers = () => {
  return (
    <div className="bg-[#3C3C3C] text-white py-16">
      <div className="flex items-center justify-center mb-2">
          <div className="border-t border-[#FAC80A] w-[16rem] border-[2px] mr-2"></div>
          <h2 className="text-white text-[32px] font-karla font-bold uppercase leading-[37.41px] tracking-[0.12em] p-10">
            Designers{" "}
          </h2>
          <div className="border-t border-[#FAC80A] w-[16rem] border-[2px] ml-2"></div>
        </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-4/5">
          {designers.map((designer, index) => (
            <div key={index} className="text-center">
              <ProfileCard
                name={designer.name}
                position={designer.position}
                photoUrl={designer.photoUrl}
              />
              <div className="flex justify-center mt-4">
                <a href={designer.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src={LinkedInIcon} alt="LinkedIn" className="h-6 mx-2" />
                </a>
                {designer.website && (
                  <a href={designer.website} target="_blank" rel="noopener noreferrer">
                    <img src={WebsiteIcon} alt="Website" className="h-6 mx-2" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Designers;
