import React from "react";
import ProfileCard from "../../components/ProfileCard";
import LinkedInIcon from "../../images/LinkedInIcon.png";
import WebsiteIcon from "../../images/WebsiteIcon.png";

import Benson from "../../images/CoICS1.png";
import Arvin from "../../images/Treasurer.jpg";
import Dommenick from "../../images/CoEngineering2.png";
import Arlaghn from "../../images/CoAthletics2.png";
import Aariel from "../../images/Aariel.png";
import Ethan from "../../images/Ethan.png";

// Sample data for developers
const developers = [
  {
    name: "Benson Manzano",
    position: "Developer Lead",
    photoUrl: Benson,
    linkedin: "https://www.linkedin.com/in/benson-manzano/",
    website: "https://bensonmanzano.com",
  },
  {
    name: "Arvin Limjoco",
    position: "Developer",
    photoUrl: Arvin,
    linkedin: "https://www.linkedin.com/in/arvin-limjoco/",
  },
  {
    name: "Dommenick Lacuata",
    position: "Developer",
    photoUrl: Dommenick,
    linkedin: "https://www.linkedin.com/in/dommenick-lacuata/",
  },
  {
    name: "Arleigh Cayanan",
    position: "Developer",
    photoUrl: Arlaghn,
    linkedin: "https://www.linkedin.com/in/arleigh-cayanan/",
  },
  {
    name: "Aariel Abaincia",
    position: "Developer",
    photoUrl: Aariel,
    linkedin: "https://www.linkedin.com/in/aariel-abaincia/",
  },
  {
    name: "Ethan Santos",
    position: "Developer",
    photoUrl: Ethan,
    linkedin: "https://www.linkedin.com/in/ethan-santos/",
  },
];

const Developers = () => {
  return (
    <div className="bg-[#3C3C3C] text-white py-16">
      <div className="flex items-center justify-center mb-2">
        <div className="border-t border-[#FAC80A] w-[16rem] border-[2px] mr-2"></div>
        <h2 className="text-white text-[32px] font-karla font-bold uppercase leading-[37.41px] tracking-[0.12em] p-10">
          Developers{" "}
        </h2>
        <div className="border-t border-[#FAC80A] w-[16rem] border-[2px] ml-2"></div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-4/5">
          {developers.map((developer, index) => (
            <div key={index} className="text-center">
              <ProfileCard
                name={developer.name}
                position={developer.position}
                photoUrl={developer.photoUrl}
              />
              <div className="flex justify-center mt-4">
                <a href={developer.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src={LinkedInIcon} alt="LinkedIn" className="h-6 mx-2" />
                </a>
                {developer.website && (
                  <a href={developer.website} target="_blank" rel="noopener noreferrer">
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

export default Developers;
