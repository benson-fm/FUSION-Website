import { useEffect, useRef } from "react";
import { useIsVisible } from "../../../components/useIsVisible"; // Adjust the path as necessary

const JoinWorkshops = () => {
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    return (
        <div className="bg-white w-full h-[487.5px] flex items-center justify-center py-60">
            <div ref={ref} className={`flex flex-col items-center justify-center w-[60rem] h-[30rem] transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                <h1 className="font-karla font-[700] text-5xl text-black pb-3">Boost Your Skills: <span className="text-[#FFA523]">Join Our Workshops</span></h1>
                <div className="mt-[30px] border-t-4 border-[#FAC80A] w-[10rem]"></div> 
                <div className="mt-[40px]">
                    <p className="font-inter text-[16px] leading-8 text-[#3C3C3C    ] text-center">
                    Our Workshops, held during Study Hours, provide a diverse range of learning opportunities designed to boost your knowledge and skills, ensuring there is something for everyone. Learn the latest techniques and tools in engineering and programming within FEP and FIP, or simply learn more technical skills. Engage in workshops that broaden your understanding of different cultures and global perspectives, enhance your abilities in media editing on Canva, or join us on a break away from school to replenish your mental health. Discover and learn how to effectively use the many resources available for students on campus all while bonding with other FUSION general members.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default JoinWorkshops;
