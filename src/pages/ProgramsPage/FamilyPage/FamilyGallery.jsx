import React, { useEffect, useRef } from 'react';
import FamGallery from '../../../images/FamGallery.png';
import BottomLeftShapes from '../../../images/BottomLeftShapes.png';
import TopRightShapes from '../../../images/TopRightShapes.png';
import VerticalRectangle from '../../../images/VerticleRectangle.png';
import HorizontalRectangle from '../../../images/HorizontalRectangle.png';
import { useIsVisible } from "../../../components/useIsVisible"; // Adjust the path as necessary

const FamilyGallery = () => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <section className="relative w-full h-auto flex flex-col items-center justify-center py-16 bg-white">
      {/* Background Shapes */}
      <img src={BottomLeftShapes} alt="Bottom Left Shapes" className="absolute bottom-0 left-0 w-[20%] h-auto" />
      <img src={TopRightShapes} alt="Top Right Shapes" className="absolute top-0 right-0 w-[20%] h-auto" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <p ref={ref} className={`text-sm uppercase tracking-wide font-semibold text-gray-600 transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Memories in Frames
        </p>
        <h1 className={`mt-2 text-4xl font-bold text-black transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Our Fam Gallery
        </h1>
      </div>

      {/* Gallery Image with Rectangles */}
      <div className="relative mt-10 flex items-center justify-center transition-opacity duration-700 ease-in-out" ref={ref}>
        {/* Yellow Rectangles */}
        <img src={VerticalRectangle} alt="Vertical Rectangle" className="absolute left-[-20px] top-[-20px] w-auto h-auto" />
        <img src={HorizontalRectangle} alt="Horizontal Rectangle" className="absolute bottom-[-20px] right-[-20px] w-auto h-auto" />

        {/* Main Gallery Image */}
        <img src={FamGallery} alt="Family Gallery" className={`relative z-10 rounded-lg shadow-lg transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* Browse Gallery Button */}
      <button className={`relative z-10 mt-8 px-8 py-3 bg-black text-white font-[600] text-[16px] leading-8 tracking-[0.16em] uppercase hover:bg-gray-800 transition-colors duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        Browse Gallery {">"}
      </button>
    </section>
  );
};

export default FamilyGallery;
