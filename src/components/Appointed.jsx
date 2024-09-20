import ProfileCard from "./ProfileCard";
import ProfilePopout from "./ProfilePopout";
import React, { useState } from "react";
import HalfGear from "../images/HalfGear.png";

import CoICS1 from "../images/CoICS1.png";
import CoCS2 from "../images/CoCS2.png"
import CoEngineering1 from "../images/CoEngineering1.png";
import CoEngineering2 from "../images/CoEngineering2.png";

import CoAthletics1 from "../images/CoAthletics1.png";
import CoAthletics2 from "../images/CoAthletics2.png";
import CoAcademics2 from "../images/CoAcademics2.png";
import CoAcademics1 from "../images/CoAcademics1.png";
import CoPublicity1 from "../images/CoPublicity1.png";
import CoPublicity2 from "../images/CoPublicity2.png";

import CoFund1 from "../images/CoFund1.png";
import CoFund2 from "../images/CoFund2.png";

import Media from "../images/Media.png"

import CoNetworking1 from "../images/CoNetworking1.png";
import CoNetworking2 from "../images/CoNetworking2.png";

import CoSocial1 from "../images/CoSocial1.png";
import CoSocial2 from "../images/CoSocial2.png";

import CulturalDirector from "../images/CulturalDirector.png";
import GrayPlaceholder from "../images/GrayPlaceholder.png";



const teamMembers = [
  {
    name: "Benson Manzano",
    position: "Co-ICS Project Director",
    photoUrl: CoICS1,
    pronouns: "HE/HIM",
    year: "2ND YEAR",
    major: "COMPUTER SCIENCE",
    about:
      "Hey! My name is Benson Manzano, and as one of your ICS Project Directors I oversee the Fusion ICS Project (FIP). I manage project logistics, including team organization, project content, and advisement. My goal is to enhance inclusivity for our ICS members and strengthen our connection with other Alyansa organizations. I also enjoy going on hikes and spending time with friends!",
    contact: "BFMANZAN@UCI.EDU",
    linkedin: "...",
  },
  {
    name: "Jerome Manarang",
    position: "Co-ICS Project Director",
    photoUrl: CoCS2,
    pronouns: "HE/HIM",
    year: "3RD YEAR",
    major: "COMPUTER SCIENCE",
    about: "Hello! My name is Jerome Manarang and I am one of your ICS Project Directors. In my position, I oversee the FUSION ICS Project (FIP) as well as the internal tools committee within FUSION. When it comes to FIP, I help come up with an idea for the project as well as the overall organization of it. In my free time, I enjoy theme parks and films and work as a community assistant at Puerta Del Sol.",
    contact: "JEMANARA@UCI.EDU",
    linkedin: "...",
  },
  {
    name: "Luigi Lozano",
    position: "Co-Engineering Project Director",
    photoUrl: CoEngineering1,
    pronouns: "HE/HIM",
    year: "3TH YEAR",
    major: "INFORMATICS",
    about:
      "Hi! My name is Luigi Lozano, and as one of your Project Engineering Directors, I help lead this year's engineering project. My goal under this position is to provide members the academic and professional experience they deserve to have, enabling an environment that members can feel comfortable in. ",
    contact: "FRANCILL@UCI.EDU",
    linkedin: "...",
  },
  {
    name: "Dommenick Lacuata",
    position: "Co-Engineering Project Director",
    photoUrl: CoEngineering2,
    pronouns: "HE/HIM",
    year: "2ND YEAR",
    major: "CIVIL ENGINEERING",
    about:
      "Hi, I'm Dommenick Lacuata, and I am serving as one of your Engineering Project Directors this year. Along with my co, I run the yearly FUSION Engineering Project (FEP), where members are split into teams to compete over who can make the best robot. I run workshops, organize build meetings, and plan annual projects. I aim to create a challenging program for all majors to strengthen their engineering skills.",
    contact: "DLACUATA@UCI.EDU",
    linkedin: "...",
  },
  {
    name: "Maleyna Isabelle Aquino",
    position: "Co-Athletics Director",
    photoUrl: CoAthletics1,
    pronouns: "SHE/HER",
    year: "2ND YEAR",
    major: "COGNITIVE SCIENCES",
    about:
      "Hi! I'm Maleyna Aquino, one of your Athletics Directors at FUSION. I prioritize the physical and mental well-being of members through programs like Fitness, Nutrition, and De-stress Workshops, along with the FUSION Intramural teams. I aim to support members in achieving their health goals, enhancing their lives within and beyond FUSION. Outside of my role, I find joy in outdoor activities and powerlifting. ",
    contact: "MIAQUINO@UCI.EDU",
    linkedin: "...",
  },
  {
    name: "Arlaghn Cayanan",
    position: "Co-Athletics Director",
    photoUrl: CoAthletics2,
    pronouns: "HE/HIM",
    year: "2ND YEAR",
    major: "COMPUTER SCIENCE",
    about:
      "Hello! My name is Arlaghn Cayanan, and I am one of your Co-Athletic Directors. I oversee the physical and emotional wellbeing of FUSION members! My goals for the year are to help members achieve their fitness goals, have an outlet to relax and destress, and meet and connect with others in a welcoming environment. Outside of my role I like going to the gym, playing basketball and volleyball.",
    contact: "APCAYANA@UCI.EDU",
    linkedin: "...",
  },
  {
    name: "Janice Ho",
    position: "Co-Academics Director",
    photoUrl: CoAcademics1,
    pronouns: "SHE/HER",
    year: "2ND YEAR",
    major: "COMPUTER ENGINEERING",
    about:
      "I’m Janice Ho and I am thrilled to serve as one of your Co-Academics Directors! We aim to create a welcoming and supportive environment that encourages your academic and professional growth. Through engaging workshops and study hours, our goal is to help all members refine their technical skills and provide reliable, academic resources. I also enjoy thrifting, discovering new music, and cafe hopping!",
    contact: "JANICEH6@UCI.EDU",
    linkedin: "...",
  },
  {
    name: "Vivienne Catarroja",
    position: "Co-Academics Director",
    photoUrl: CoAcademics2,
    pronouns: "SHE/HER",
    year: "3RD YEAR",
    major: "INFORMATICS",
    about:
      "Hi! My name is Vivienne Catarroja and I'm one of your Academics directors. I help host FUSION study hours, organize workshops, collaborate with the IVP with the mentorship program, and provide academic support. I plan to uphold the Academics pillar and offer guidance to everyone in any way that I can. Other than that, I enjoy listening to music, playing The Sims, and spontaneous hangouts!",
    contact: "VCATARRO@UCI.EDU",
    linkedin: "...",
  },
  {
    name: "Alexa Ancheta",
    position: "Co-Fundraising Director",
    photoUrl: CoFund1,
    pronouns: "SHE/HER",
    year: "3RD YEAR",
    major: "BUSINESS ECONOMICS",
    about:
        "Hi everyone! My name is Alexa Ancheta, and I will be serving as one of your Fundraising Directors this year. I am responsible for planning on-campus fundraisers including Bacon Wrapped Hot Dogs, raffles, and merchandise. I hope to fundraise in fun and creative ways to help fund FUSION's exciting events throughout the year. In my free time, I enjoy thrifting, trying new restaurants, and spontaneous late night drives!",
    contact: "AMANCHE1@UCI.EDU",
    linkedin: "...",
  },
  {
    name: "Bernard Tilano",
    position: "Co-Fundraising Director",
    photoUrl: CoFund2,
    pronouns: "HE/HIM",
    year: "4TH YEAR",
    major: "AEROSPACE ENGINEERING",
    about:
    "Hello! my name is Bernard Tillano, and I serve as one of your Co-Fundraising Directors. My focus is on spearheading off-campus fundraising initiatives to cultivate relationships with companies and secure funds, all aimed at expanding opportunities and enhancing the FUSION experience for all members. Outside of my role, I enjoy hiking, snowboarding, and playing with my dog, Toto.",
    contact: "BTILLANO@UCI.EDU",
    linkedin: "...",
  },
  {
    name: "Marcus Cayas",
    position: "Co-Publicity Director",
    photoUrl: CoPublicity1,
    pronouns: "ANY PRONOUNS",
    year: "4TH YEAR",
    major: "COGNITIVE SCIENCES",
    about:
      "Hello everyone! My name is Marcus Cayas, and I am one of your Publicity Directors this year. As a Publicity Director, I am responsible for making sure that all FUSION events are well-publicized as well as maintaining FUSION's public image. Other than designing banners and doodling on photos, we also design cool merch and assist with media intake. Outside of my role, I enjoy bowling and ripstik-ing!",
    contact: "MCAYAS@UCI.EDU",
    linkedin: "...",
  },
  {
    name: "Audrey Estrella",
    position: "Co-Publicity Director",
    photoUrl: CoPublicity2,
    pronouns: "SHE/HER",
    year: "2ND YEAR",
    major: "CHEMICAL ENGINEERING",
    about:
      "Hello! My name is Audrey Estrella Martin and as one of your Publicity Directors, I oversee the public relations side of FUSION! Alongside my co-director, I help create  banners and flyers to promote our club! My aim is to target different audiences to feel safe coming into our FUSION space through the images they see on campus. Outside my role, I enjoy watching shows and going on hikes!",
    contact: "AUDREEM1@UCI.EDU",
    linkedin: "...",
  },
  {
    name: "Noah Tizon",
    position: "Co-Networking Director",
    photoUrl: CoNetworking1,
    pronouns: "HE/HIM",
    year: "2ND YEAR",
    major: "INFORMATICS",
    about:
      "Hello! My name is Noah Tizon, and as one of your Networking Directors, I oversee the professional development of FUSION members.I organize industry panels, workshops, and networking to connect club members with engineering and technology professionals, enhancing our organization’s professional growth. Outside of my role, I enjoy playing bass guitar and reading!",
    contact: "NTIZON@UCI.EDU",
    linkedin: "...",
  },
  {
    name: "Andrew Hauber",
    position: "Co-Networking Director",
    photoUrl: CoNetworking2,
    pronouns: "HE/HIM",
    year: "4TH YEAR",
    major: "INFORMATION TECHNOLOGY",
    about:
      "Hi, my name is Andrew Hauber and I am glad to be one of FUSION's Networking Directors for this year. As a Networking Director, I plan on improving FUSION's connection to our alumni network and hosting professional development workshops that provide members with the resources necessary to help everyone achieve their professional goals. Apart from that, I enjoy basketball, hip-hop, and philosophy.",
    contact: "AHAUBER@UCI.EDU",
    linkedin: "...",
  },
  {
    name: "Klhoe Antolin",
    position: "Co-Social Director",
    photoUrl: CoSocial2,
    pronouns: "SHE/HER",
    year: "3RD YEAR",
    major: "BIOMEDICAL ENGINEERING",
    about: "Hi! I'm Khloe Antolin, one of your Social Directors. My role entails organizing social events for FUSION members. In order to build connections and foster relationships within the FUSION community. My goal is to create a safe space for FUSION members to be themselves and build lasting memories through events. Apart of my role, I enjoy making leis, riding dirt bike, and going to the beach!",
    contact: "KANTOLIN@UCI.EDU",
    linkedin: "...",
  },
  {
    name: "Matthew Simbillo",
    position: "Co-Social Director",
    photoUrl: CoSocial1,
    pronouns: "THEY/THEM",
    year: "? YEAR",
    major: "???",
    about: "Hello! I'm Matthew Jorel Simbillo. I started as an Aerospace Engineering major but switched to Cognitive Sciences with a minor in Urban Planning and Public Policy. As one of this year's Social Directors, I plan to introduce activities from intimate hangouts to fun group outings. My goal is to connect FUSION’s leadership with our members. Outside of FUSION, I enjoy photography, video editing, and being a foodie :)",
    contact: "MSIMBILL@UCI.EDU",
    linkedin: "...",
  },
  {
    name: "Lourdes Buwan",
    position: "Media Director",
    photoUrl: Media,
    pronouns: "SHE/HER",
    year: "3RD YEAR",
    major: "CHICANO/LATINO STUDIES",
    about: 
"Hi! My name is Lourdes Buwan and I am your media director who helps in documenting the growth of Fusion. I take pictures, make videos and work on Fusionbook alongside Publicity as well as many other responsibilities. As media director I plan to showcase Fusion in a professional and friendly light. Outside of being Media Director I do enjoy photography and videography as well as reading and crochet!",
    contact: "...",
    linkedin: "...",
  },
  {
    name: "Gavin Bautista",
    position: "Cultural Director",
    photoUrl: CulturalDirector,
    pronouns: "HE/HIM",
    year: "2ND YEAR",
    major: "MECHANICAL ENGINEERING",
    about:
      "Hello! I’m Gavin Bautista and I am FUSION’s cultural director. I prioritize enhancing our organization's Cultural Pillar, guiding members in understanding cultural identity. I aim to foster a welcoming environment by sharing Filipino culture through workshops and resources, including history, traditions, languages, and more. Collaborating with the Alyansa Board, I seek to strengthen connections with sister organizations.",
    contact: "GCBAUTIS@UCI.EDU",
    linkedin: "...",
  },
];

const Appointed = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <div className="bg-white text-black py-16">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-2">
          <img src={HalfGear} alt="Half Gear" className="h-16 justify-center" />
        </div>
        <div className="flex items-center justify-center mb-2">
          <div className="border-t border-[#FAC80A] w-[115px] border-[2px] mr-2"></div>
          <h2 className="text-black text-[32px] font-karla font-bold uppercase leading-[37.41px] tracking-[0.12em]">
            Appointed
          </h2>
          <div className="border-t border-[#FAC80A] w-[115px] border-[2px] ml-2"></div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[40px] lg:gap-[60px] 2xl:gap-[80px] justify-items-center pb-[20px]">
          {teamMembers.map((member, index) => (
            <ProfileCard
              key={index}
              name={member.name}
              position={member.position}
              photoUrl={member.photoUrl}
              onClick={() => setSelectedProfile(member)}
              exec={false}
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

export default Appointed;
