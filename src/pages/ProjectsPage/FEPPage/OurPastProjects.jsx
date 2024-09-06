import React from "react";
import PastProjectsBackground from "../../../images/PastProjectsBackground.png";
import ProjectCard from "./ProjectCard"; // Import ProjectCard
import GestureControlledArm from "../../../images/GestureControlledArm.png";
import AutonomousVacuum from "../../../images/AutonomousVacuum.png";
import HungryHungryHippos from "../../../images/HungryHungryHippos.png";

const PastProjects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat pb-20"
      style={{ backgroundImage: `url(${PastProjectsBackground})` }}
    >
      {/* Title */}
      <div className="flex flex-col items-center pt-20">
        <h2 className="text-center font-karla font-[600] text-[2.5rem] leading-[2.925rem] text-white pb-7">
          Past Projects
        </h2>
        <div className="border-t-4 border-[#FAC80A] w-[10rem] mx-auto"></div>
      </div>

      {/* Project Cards */}
      <div className="flex space-x-16 mt-12">
        <ProjectCard
          title="Gesture Controlled Arm"
          year="2023-2024"
          description="The project involves developing a Mobile Gesture-Controlled Robotic Arm, with teams focusing on the mechanical design and prototyping, software for movement and task execution, and hardware integration via PCBs."
          image={GestureControlledArm}
        />

        <ProjectCard
          title="Autonomous Vacuum"
          year="2022-2023"
          description="The project involves automating a common household device, focusing on designing a cost-efficient autonomous vacuum cleaner, similar to a Roomba, that effectively picks up dirt and debris while avoiding obstacles."
          image={AutonomousVacuum}
        />

        <ProjectCard
          title="Hungry Hungry Hippos"
          year="2021-2022"
          description="The project involves designing an autonomous, controllable robot to sort and dispense coins into specific locations while competing against another robot, ensuring no harm is done to the opponent during coin collection and disposal."
          image={HungryHungryHippos}
        />
      </div>
    </div>
  );
};

export default PastProjects;
