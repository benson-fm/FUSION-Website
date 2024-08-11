import React, { useState, useEffect } from "react";
import CheckOutBackground from "../../../images/CheckOutBackground.png";
import Soldering from "../../../images/Soldering.png";
import Solidworks from "../../../images/Solidworks.png";
import Canva from "../../../images/Canva.png";
import ProfessionalDevelopment from "../../../images/ProfessionalDevelopment.png";



// Left side component
const ProfileCard = ({ image, title, description }) => (
  <div className="flex items-start space-x-4 p-4">
    <img className="w-[100px] h-[75px] object-cover" src={image} alt={title} />
    <div>
      <h3 className="font-bold text-white">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
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
    <div className="relative w-full h-full">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            className="w-full h-full object-cover"
            src={slide.image}
            alt={slide.title}
          />
          <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 w-full">
            <h3 className="text-2xl font-bold">{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const CheckOut = ({ background }) => {
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
      title: "CANVA",
      description: "MODELING • PRESENTATION • DESIGN",
    },
    {
      image: Solidworks,
      title: "Solidworks",
      description: "BUILDING • PROGRAMMING • TESTING",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center p-8"
      style={{ backgroundImage: CheckOutBackground, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h2 className="text-3xl font-bold text-white mb-8">Check Out Our Workshops</h2>
      <div className="flex w-full max-w-6xl">
        {/* Left side with profiles */}
        <div className="flex flex-col space-y-4 w-1/2 bg-gray-800 p-4 rounded-lg">
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
        <div className="relative w-1/2 h-[453px] bg-black rounded-lg ml-4 overflow-hidden">
          <Slideshow slides={slides} />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
