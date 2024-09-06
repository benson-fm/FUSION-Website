import React from "react";

const ProjectCard = ({ title, year, description, image }) => {
  return (
    <div className="w-[22.1875rem] h-[28.9375rem] rounded-tl-[5rem] rounded-br-[5rem] overflow-hidden shadow-lg bg-black text-white flex flex-col justify-end transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Image */}
      <div className="h-[14.375rem] w-[22.1875rem] bg-cover bg-center " style={{ backgroundImage: `url(${image})` }}></div>

      {/* Content */}
      <div className="p-4 h-[14.375rem] w-[22.1875rem]">
        <h3 className="text-[1.5rem] font-semibold leading-[1.75375rem] font-karla mb-2">{title}</h3>
        <p className="text-[#FAC80A] text-[1rem] leading-8 mb-1">{year}</p>
        <p className="text-[0.75rem] font-inter font-[300] leading-6 pt-2">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
