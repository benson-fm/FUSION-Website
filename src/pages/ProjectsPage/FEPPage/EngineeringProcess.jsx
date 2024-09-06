import React from "react";
import ProcessCard from "./ProcessCard"; // Adjust the import path as necessary
import Planning from "../../../images/Planning.png";
import Designing from "../../../images/Designing.png";
import Building from "../../../images/Building.png";
import Testing from "../../../images/Testing.png";
import Presentation from "../../../images/Presentation.png";

import Step1 from "../../../images/Step1.png";
import Step2 from "../../../images/Step2.png";
import Step3 from "../../../images/Step3.png";
import Step4 from "../../../images/Step4.png";
import Step5 from "../../../images/Step5.png";
import DottedOrangeLine from "../../../images/DottedOrangeLine.png";

const DevelopmentProcess = () => {
  return (
    <div className="relative p-8 bg-white w-full flex flex-col items-center pb-32">
      {/* Title */}
      <div className="flex flex-col items-center pt-20">
        <h2 className="text-center font-karla font-[600] text-[2.5rem] leading-[2.925rem] text-black pb-7">
          The Engineering Process
        </h2>
        <div className="border-t-4 border-[#FAC80A] w-[10rem] mx-auto"></div>
      </div>

      {/* Main Content: Dotted line and Process Cards */}
      <div className="flex items-start w-[83.3125rem] h-[114rem] pt-9">
        {/* Wrapper to position dotted line and process cards */}
        <div className="relative flex items-center">
          {/* Dotted line centered vertically */}
          <div className="absolute top-1/2 transform -translate-y-1/2" style={{ left: '-2rem' }}>
            <img src={DottedOrangeLine} alt="Dotted Line" className="h-full" />
          </div>

          {/* Process Cards */}
          <div className="flex flex-col items-start ml-10">
            <ProcessCard
              title="Planning"
              subtext="Teams start by thoroughly understanding the given challenge, breaking it down into core problems and identifying key requirements. They then develop a strategic plan, including timelines, resource allocation, and initial design concepts."
              image={Planning}
              stepNumberImage={Step1}
            />

            <ProcessCard
              title="Designing"
              subtext="In this phase, teams focus on detailed design work, creating blueprints, schematics, and prototypes. Mechanical and hardware components are modeled and tested to ensure they meet the challenge’s specifications. Iterative testing and refinement are crucial at this stage."
              image={Designing}
              stepNumberImage={Step2}
            />

            <ProcessCard
              title="Building"
              subtext="Teams proceed to the construction and assembly of their solution. Mechanical systems and hardware components are built, integrated, and rigorously tested for functionality. Teams work collaboratively to ensure all parts work together seamlessly and address the challenge effectively."
              image={Building}
              stepNumberImage={Step3}
            />

            <ProcessCard
              title="Testing"
              subtext="Teams rigorously test their solution under real-world conditions to ensure functionality and reliability, refining their design based on performance data and feedback."
              image={Testing}
              stepNumberImage={Step4}
            />

            <ProcessCard
              title="Presentation"
              subtext="The final phase involves a comprehensive presentation of their project, showcasing their design process, technical achievements, and how their solution effectively meets the challenge."
              image={Presentation}
              stepNumberImage={Step5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcess;
