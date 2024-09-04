import { useEffect, useRef } from "react";
import { useIsVisible } from "../../components/useIsVisible"; // Adjust the path as necessary

const OurFusiteTeam = () => {
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    return (
        <div className="bg-[#3C3C3C] text-black pt-[100px] pb-[12rem] min-h-[250px] flex flex-col justify-center items-center">
            <div className={"text-center w-[951px] h-[284px] "}>
                <div ref={ref} className={`transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                <h2 className="text-[#FFFFFF] text-2xl uppercase mb-2 font-karla font-bold tracking-[0.12em] leading-[28.06px] ">OUR FUSITE TEAM</h2>
                    <h1 className="text-white text-5xl font-bold mb-4 font-karla leading-[52px] pt-[44px]">Revamping FUSION&apos;s Website</h1>
                    <p className="text-base text-white max-w-3xl mx-auto pt-[36px] font-inter font-[300] text-[1rem] leading-8">
                    From January to September 2024, the FUSITE team undertook a beta project to redesign our website, laying the groundwork for FUSION’s Information and Computer Science Project (FIP). Using Figma for design and implementing their work with Sketch and CSS, they gained hands-on software development experience and honed skills essential for future FIP leaders. This project significantly enhanced our digital presence and established a strong foundation for upcoming initiatives within FUSION.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OurFusiteTeam;
