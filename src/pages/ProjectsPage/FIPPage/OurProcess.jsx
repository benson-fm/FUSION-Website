import React from "react";
import TheProcessBackground from "../../../images/TheProcess.png"; // Update the path if necessary

const TheFIPProject = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Top orange bar */}
      <div className="w-full h-3 bg-[#FFA523]"></div>

      {/* Image container */}
      <div className="relative w-full">
        <img src={TheProcessBackground} alt="Process Background" className="w-full" />
      </div>

      {/* Bottom orange bar */}
      <div className="w-full h-3 bg-[#FFA523]"></div>
    </div>
  );
};

export default TheFIPProject;
