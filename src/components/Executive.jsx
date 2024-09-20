import ProfileCard from "./ProfileCard";
import ProfilePopout from "./ProfilePopout";
import React, { useState } from "react";
import HalfSun from "../images/HalfSun.png";

import President from "../images/President.png";
import IVP from "../images/IVP.png";
import GrayPlaceholder from "../images/GrayPlaceholder.png";
import Treasurer from "../images/Treasurer.jpg";
import Secretary from "../images/Secretary.png";
import EVP from "../images/EVP.png";

const teamMembers = [
  {
    name: "Hailey Gwen Gumanab",
    position: "President",
    photoUrl: President,
    pronouns: "SHE/HER",
    year: "4TH YEAR",
    major: "COGNITIVE SCIENCE",
    about:
      "Hello! My name is Hailey Gwen Gumanab, and I serve as the President of FUSION. I provide oversight to the entire organization, ensuring the maintenance of an inclusive environment. My responsibilities involve upholding our organizational pillars and mission statement. I am committed to providing access to resources, creating opportunities, and fostering lasting connections among our club members.",
    contact: "HGUMANAB@UCI.EDU",
    linkedin: "https://www.linkedin.com/in/hailey-gwen-gumanab/",
  },
  {
    name: "Jhaneen Uy",
    position: "Internal Vice President",
    photoUrl: IVP,
    pronouns: "SHE/HER",
    year: "3RD YEAR",
    major: "BIOMEDICAL ENGINEERING",
    about:
      "Hello! I am Jhaneen Uy, the Internal Vice President of FUSION. I oversee programs like Mentorship, Membership, and our Family System, as well as handle the Internship Experience and Membership Novelty. My aim is to foster a nurturing and inclusive environment within FUSION, ensuring all members feel they belong. Beyond my position, I enjoy thrift shopping and spending time creating as a creative and self-expression outlet.",
    contact: "UYJP@UCI.EDU",
    linkedin: "https://www.linkedin.com/in/jhaneen-uy/",
  },
  {
    name: "Justin",
    position: "External Vice President",
    photoUrl: EVP,
    pronouns: "HE/HIM",
    year: "4TH YEAR",
    major: "MECHANICAL ENGINEERING",
    about: "Hey everyone! My name is Justin Marasigan, and as EVP, I serve as the main point of contact between FUSION and outside organizations. By maintaining connections with these orgs and informing general members of any upcoming events/opportunities that they offer, I intend to foster the professional, cultural, and social growth of both the club as a whole and its members.",
    contact: "marasij1@uci.edu",
    linkedin: "...",
  },
  {
    name: "Arvin Limjoco",
    position: "Treasurer",
    photoUrl: Treasurer,
    pronouns: "HE/HIM",
    year: "2ND YEAR",
    major: "DATA SCIENCE",
    about:
      "Hello! I am Arvin Limjoco, Treasurer of FUSION, responsible for overseeing our club's financial health in areas such as finances, budgets, handle reimbursements, and organize fundraising events, both on- and off-campus, ensuring financial stability for hosting events. I collaborate with other lead members to plan mixers, workshops, socials, and more. As a person, I enjoy video games and cooking.",
    contact: "AJLIMJO@UCI.EDU",
    linkedin: "https://www.linkedin.com/in/arvin-limjoco/",
  },
  {
    name: "Cayz Paclibar",
    position: "Secretary",
    photoUrl: Secretary,
    pronouns: "SHE/HER",
    year: "3RD YEAR",
    major: "BIOMEDICAL ENGINEERING",
    about:
      "Hi, everyone! I’m Cayz Paclibar, and I’m serving as your Secretary this year. In this role, I organize most of the logistical and administrative information behind FUSION. My goal is to help keep everything streamlined behind-the-scenes so that our members are able to enjoy FUSION to its fullest. Other than that, you can find me working on anything artsy or digital related.",
    contact: "CPACLIB@UCI.EDU",
    linkedin: "https://www.linkedin.com/in/cayz-paclibar/",
  },
];

const Executive = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <div className="bg-white text-black py-16">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-2">
          <img src={HalfSun} alt="Half Sun" className="h-16 justify-center" />
        </div>
        <div className="flex items-center justify-center mb-2">
          <div className="border-t border-[#FAC80A] w-[115px] border-[2px] mr-2"></div>
          <h2 className="text-black text-[32px] font-karla font-bold uppercase leading-[37.41px] tracking-[0.12em]">
            Executive{" "}
          </h2>
          <div className="border-t border-[#FAC80A] w-[115px] border-[2px] ml-2"></div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center pb-[20px] w-4/5">
          {teamMembers.map((member, index) => (
            <ProfileCard
              key={index}
              name={member.name}
              position={member.position}
              photoUrl={member.photoUrl}
              onClick={() => setSelectedProfile(member)}
              exec={true}
            />
          ))}
        </div>
      </div>
      {selectedProfile && (
        <ProfilePopout
          isOpen={!!selectedProfile}
          onClose={() => setSelectedProfile(null)}
          profile={selectedProfile}
        />
      )}
    </div>
  );
};

export default Executive;
