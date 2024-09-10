import React from "react";
import ProcessCard from "./ProcessCard"; // Adjust the import path as necessary
import Conceptualization from "../../../images/Conceptualization.png";
import Designing from "../../../images/Designing.png";
import Developing from "../../../images/Developing.png";
import Testing from "../../../images/Testing.png";
import Deployment from "../../../images/Deployment.png";

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
          The Development Process
        </h2>
        <div className="border-t-4 border-[#FAC80A] w-[10rem] mx-auto"></div>
      </div>

      {/* Main Content: Dotted line and Process Cards */}
      <div className="flex items-start w-[83.3125rem] h-[114rem]">
        {/* Wrapper to position dotted line and process cards */}
        <div className="relative flex items-center">
          {/* Dotted line centered vertically */}
          <div className="absolute top-1/2 transform -translate-y-1/2" style={{ left: '-2rem' }}> {/* Adjust the left property here */}
            <img src={DottedOrangeLine} alt="Dotted Line" className="h-full" />
          </div>

          {/* Process Cards */}
          <div className="flex flex-col items-start ml-10"> {/* Optional: add a left margin for more space */}
            <ProcessCard
              title="Conceptualization"
              subtext="Teams begin by defining the problem or application they want to develop, aligned with one of FUSION's five pillars. This phase involves brainstorming ideas, conducting research on existing solutions, and outlining the project's objectives and features."
              image={Conceptualization}
              stepNumberImage={Step1}
            />

            <ProcessCard
              title="Designing"
              subtext="Teams gather detailed requirements from stakeholders and users, ensuring the project addresses specific needs. This phase includes creating design documents, wireframes, and architectural plans that will guide the development process."
              image={Designing}
              stepNumberImage={Step2}
            />

            <ProcessCard
              title="Developing"
              subtext="The core of the project happens in this phase, where teams start coding and building the application. Developers and designers work closely to implement features, build the user interface, and ensure that the backend systems are robust and efficient."
              image={Developing}
              stepNumberImage={Step3}
            />

            <ProcessCard
              title="Testing"
              subtext="Once development is complete, teams move on to rigorous testing. This phase involves debugging, user testing, and performance optimization to ensure the application functions smoothly and meets all requirements. Feedback from this phase is used to make necessary adjustments and improvements."
              image={Testing}
              stepNumberImage={Step4}
            />

            <ProcessCard
              title="Deployment"
              subtext="In the final phase, the application is deployed in a production-like environment. Teams prepare for a formal presentation, demonstrating the application's capabilities, discussing the development journey, and highlighting how the project aligns with FUSION's goals. The presentation also includes a review of the challenges faced and the solutions implemented."
              image={Deployment}
              stepNumberImage={Step5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcess;
