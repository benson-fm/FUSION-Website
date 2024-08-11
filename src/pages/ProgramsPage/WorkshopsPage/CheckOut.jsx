import React, { useState, useEffect } from "react";
import CheckOutBackground from "../../../images/CheckOutBackground.png";
import Soldering from "../../../images/Soldering.png";
import Solidworks from "../../../images/Solidworks.png";
import Canva from "../../../images/Canva.png";
import ProfessionalDevelopment from "../../../images/ProfessionalDevelopment.png";

// Left side component
const ProfileCard = ({ image, title, description }) => (
  <div className="flex items-start w-[42.3125rem] h-[15rem] bg-[#3C3C3C] p-6">
    <img className="w-[16.13rem] h-[10rem] object-cover" src={image} alt={title} />
    <div className="flex flex-col justify-center w-[19.25rem] h-[8.5rem] text-left ml-4">
      <h3 className="font-[600] text-2xl leading-[1.75rem] tracking-[0.12em] font-karla text-white">{title}</h3>
      <p className="text-[1rem] leading-[1.5rem] font-inter font-[300] text-white">{description}</p>
    </div>
  </div>
);

// Right side slideshow component
const Slideshow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-[39.3125rem] h-[47rem]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            className="w-full h-[47rem] object-cover"
            src={slide.image}
            alt={slide.title}
          />
          <div className="absolute bottom-20 left-0 p-4 text-white w-[34.8125rem] h-[3.52rem]">
            <h3 className="text-5xl font-[600] font-karla leading-[3.25rem]">{slide.title}</h3>
            <p className="text-2xl font-[600] font-karla leading-[1.75375rem] tracking-[0.12em] pt-5">{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const CheckOut = () => {
  // Placeholder data
  const profileCards = [
    {
      image: Solidworks,
      title: "SOLIDWORKS",
      description:
        "Participants learned to create detailed 3D models and designs using SolidWorks, enhancing their CAD skills.",
    },
    {
      image: ProfessionalDevelopment,
      title: "PROFESSIONAL DEVELOPMENT",
      description:
        "Attendees practiced crafting effective elevator pitches, navigating career fairs, and building professional networks.",
    },
    {
      image: Canva,
      title: "CANVA",
      description:
        "Members explored Canva's design tools to create engaging graphics and presentations to boost their visual skills.",
    },
  ];

  const slides = [
    {
      image: Soldering,
      title: "Soldering",
      description: "WIRING • ASSEMBLY • SAFETY",
    },
    {
      image: Canva,
      title: "Canva",
      description: "PRESENT • DESIGN • CREATE",
    },
    {
      image: Solidworks,
      title: "Solidworks",
      description: "BUILD • PROGRAM • TEST",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center p-8"
      style={{ 
        backgroundImage: `url(${CheckOutBackground})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <div className="flex items-center justify-center mb-8">
        <div className="border-t border-[#FAC80A] w-[24.38rem] border-[2px] mr-2"></div>
        <h1 className="text-2xl font-karla font-[600] leading-[1.75rem] tracking-[0.12em] text-white">
          CHECK OUT OUR WORKSHOPS
        </h1>
        <div className="border-t border-[#FAC80A] w-[24.38rem] border-[2px] ml-2"></div>
      </div>
      <div className="flex w-full max-w-6xl">
        {/* Left side with profiles */}
        <div className="flex flex-col space-y-4 w-[40.8125rem] bg-[#3C3C3C]">
          {profileCards.map((card, index) => (
            <ProfileCard
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        {/* Right side with slideshow */}
        <div className="relative w-[39.3125rem] h-[47rem] bg-[#3C3C3C] ml-[-0.5px] overflow-hidden">
          <Slideshow slides={slides} />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
