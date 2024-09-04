import { useEffect, useRef } from "react";
import { useIsVisible } from "../../../components/useIsVisible"; // Adjust the path as necessary

const WhatIsFusion = () => {
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    return (
        <div className="bg-white w-full h-[487.5px] flex items-center justify-center py-60">
            <div ref={ref} className={`flex flex-col items-center justify-center w-[816px] h-[258px] transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                <h1 className="font-karla font-[700] text-5xl text-black pb-3">What is our <span className="text-[#FFA523]">Fam System?</span></h1>
                <div className="mt-[30px] border-t-4 border-[#FAC80A] w-[10rem]"></div> 
                <div className="mt-[40px]">
                    <p className="font-inter text-[16px] leading-8 text-[#3C3C3C    ] text-center">
                        General members are assigned to a FUSION Family, referred to as “Fams,” 
                        with each named according to the theme of the school year. This system promotes camaraderie, professional 
                        development, and cultural enrichment through social gatherings, challenges, and friendly competition. The 
                        FUSION Family system significantly contributes to creating a strong sense of community within the organization.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhatIsFusion;
