import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar.jsx";
import fam_placeholder from '../images/fam_placeholder.png';
import family_background from '../images/FamilyBackground.png';
import WhatIsFam from '../pages/ProgramsPage/FamilyPage/WhatIsFam.jsx';
import OrangeFam from "./ProgramsPage/FamilyPage/OrangeFam.jsx";
import FamilyGallery from './ProgramsPage/FamilyPage/FamilyGallery.jsx';

const FamPic = ({ title, image }) => (
    <div className="flex items-center justify-center w-[225px] h-[453px]">
        <div className="flex flex-col items-center">
            <div className="w-[622px] h-[469px]">
                <img className="w-full h-full" src={image} alt={title} />
            </div>
            <div className="mt-[60px]">
                <p className="text-center text-black tracking-[.1em]">{title}</p>
            </div>
        </div>
    </div>
);

const Family = () => {
    return (
        <div className="flex flex-col"> {/* parent container */}
            <Navbar 
                bg={family_background} 
                title="FAMILY" 
                subtitle="PROGRAMS" 
                homeNav={false} 
                className="z-20"
            />

            {/* Entire white section 3352 */}
            <WhatIsFam />

            {/* Individual fam section 1540 */}
            <OrangeFam />

            {/* Fam gallery section 1218 */}
            <FamilyGallery />
            
            <footer className="bg-[#fee270] w-full h-[250px]">
                <Footer />
            </footer>
        </div>
    );
}

export default Family;
