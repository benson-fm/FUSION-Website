import React from "react";
import "./WhatFusionOffers.css"; // Import the CSS file for fonts
import PillarIcon1 from "../../images/PillarIcon1.png";
import PillarIcon2 from "../../images/PillarIcon2.png";
import Ellipse from "../../images/Ellipse.png";
import InnerCircle from "../../images/InnerCircle.png";
import Wrench from "../../images/wrench.png";
import PC from "../../images/pc.png";
import {Reveal} from '../../lib/Reveal.jsx';

const WhatFusionOffers = () => {
  return (
    <div className="bg-white flex body relative h-[1204px] items-center flex-col">
      <div className="circle-container">
        <img src={Ellipse} className="circle" alt="Ellipse" />
        <img src={InnerCircle} className="inner-circle" alt="Inner Circle" />
        <img
          src={PillarIcon1}
          className="pillar-icon pillar-icon1"
          alt="Pillar Icon 1"
        />
        <img
          src={PillarIcon2}
          className="pillar-icon pillar-icon2"
          alt="Pillar Icon 2"
        />
        
        <div className="text-content">
          <Reveal duration={1500}>
          <h2 className="font-karla text-[#7D7D7D] font-[600] text-[24px] leading-[28.06px] tracking-[0.12em]">
            OUR PROJECTS
          </h2>
          <h3 className="font-karla font-[600] text-[48px] leading-[52px] text-black pt-[40px]">
            <span className="text-[#FFA523]">Innovate</span> with FUSION
          </h3>
          <p className="font-inter pt-[30px] font-[400] text-[16px] leading-[32px] text-black">
            FUSION supports the growth of STEM skills through innovative
            projects like the FUSION Engineering Project (FEP) and the FUSION
            Information and Computer Science Project (FIP). By participating in
            FEP and FIP, members enhance their problem-solving abilities and
            technical skills while being part of a vibrant, supportive
            community. Both projects culminate in FUSIONCON, our annual
            conference, where members showcase their projects to the community
            and industry professionals.
          </p>
          </Reveal>
        </div>
      </div>
      <div className="w-full h-[604px] flex items-center justify-evenly px-10">
        
       <Reveal duration={1500}>
          <di className="program flex flex-col items-center">
            <img
              src={Wrench}
              className="program-icon"
              alt="Engineering Project"
            />
            <h3 className="font-karla font-[600] text-[24px] leading-[28px] text-black pt-[20px] tracking-[0.12em] spread-out w-[500px] text-center">
              ENGINEERING PROJECT
            </h3>
            <p className="font-inter pt-[10px] font-[400] text-[16px] leading-[24px] text-black w-[312px] text-center">
              The FUSION Engineering Project (FEP) is a two-quarter program
              offering FUSION members the opportunity to participate in teams and
              enhance their engineering and programming knowledge{" "}
            </p>
            <a href="/projects/FEP">
              <button className="learn-more text-ellipsis font-inter font-[500] text-[16px] leading-[30px] tracking-[0.16em]">
                LEARN MORE
              </button>
            </a>
          </di>
       </Reveal>

       <Reveal duration={1500}>
          <div className="program flex flex-col items-center">
            <img src={PC} className="program-icon" alt="ICS Project" />
            <h3 className="font-karla font-[600] text-[24px] leading-[28px] text-black pt-[20px] tracking-[0.12em] w-[500px] text-center">
              ICS PROJECT
            </h3>
            <p className="font-inter pt-[10px] font-[400] text-[16px] leading-[24px] text-black w-[312px] text-center">
              The FUSION Information & Computer Sciences Project is a two-quarter
              program designed for FUSION designers and developers to enhance
              their skills in coding and system design{" "}
            </p>
            <a href="/projects/FIP">
              <button className="learn-more font-inter font-[500] text-[16px] leading-[30px] tracking-[0.16em]">
                LEARN MORE
              </button>
            </a>
          </div>
       </Reveal>
      </div>
    </div>
  );
};

export default WhatFusionOffers;
