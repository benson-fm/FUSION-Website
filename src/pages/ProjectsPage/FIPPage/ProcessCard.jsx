import React from "react";

const ProcessCard = ({ title, subtext, image, stepNumberImage }) => {
  return (
    <div className="flex items-center w-[77.5625rem] h-[22.8rem]">
      {/* Content with step number image, title, and subtext */}
      <div className="flex flex-1 items-start">
        {/* Step number image next to the title */}
        <div className="flex-shrink-0 mr-4">
          <img src={stepNumberImage} alt="Step Number" className="w-10 h-10" />
        </div>

        {/* Title and subtext */}
        <div className="flex flex-col">
          <h3 className="text-black text-[2.5rem] font-[600] leading-[2.925rem] pb-8">{title}</h3>
          <p className="text-black font-inter font-[300] text-[1rem] leading-8">{subtext}</p>
        </div>
      </div>

      {/* Image */}
      <div className="flex-shrink-0 ml-28">
        <img src={image} alt={title} className=" rounded-lg" />
      </div>
    </div>
  );
};

export default ProcessCard;
