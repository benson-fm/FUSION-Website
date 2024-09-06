import React from "react";
import CollaboratorsBackground from "../../../images/CollaboratorsBackground.png";
import FGNLogo from "../../../images/FGN.png"; // Example logos, update the paths accordingly
import FASAELogo from "../../../images/FASAE.png";
import FACESLogo from "../../../images/FACES.png";

const OurCollaborators = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-28"
      style={{ backgroundImage: `url(${CollaboratorsBackground})` }}
    >
      {/* Title */}
      <h2 className="text-black text-[2.5rem] font-bold mb-4">Our collaborators</h2>

      {/* Subtext */}
      <p className="text-center text-black text-[1.125rem] leading-8 max-w-3xl pb-16">
        We are grateful for the support from organizations dedicated to professional development, 
        cultural enrichment, and community engagement. Their contributions, including workshops, 
        mentorship, and resources, help us enhance our programs and empower future leaders.
      </p>

      {/* Logos */}
      <div className="flex justify-center items-center space-x-8">
        <img src={FGNLogo} alt="FGN Logo" className="w-[15rem] object-contain" />
        <img src={FASAELogo} alt="FASAE Logo" className="w-[12rem] object-contain" />
        <img src={FACESLogo} alt="FACES Logo" className="w-[15rem] object-contain" />
      </div>
    </div>
  );
};

export default OurCollaborators;
