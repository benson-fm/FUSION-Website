import Navbar from "../components/Navbar"
import React from "react";
import Footer from "../components/Footer";
import HeaderBG from "../assets/InternHeaderBG.jpg"
import Gear from "../assets/FullGear.svg"
import SunGear from "../assets/SunGear.svg"
import Sun from "../assets/FullSun.svg"
import Divider from "../assets/InternDutyDivider.png"
import Testimonial from "../components/Testimonial";
import CayzPhoto from "../assets/CayzIntern.jpg"
import JhaneenPhoto from "../assets/JhaneenIntern.jpg"
import ArlaghnPhoto from "../assets/ArlaghnIntern.jpg"
import InternPhoto1 from "../assets/InternPhoto1.png"
import InternPhoto2 from "../assets/InternPhoto2.png"
import InternAppBg from "../assets/SiOnClass.png"
import GrayDiamond from "../assets/GrayDiamond.png"
import CornerTriangles from "../assets/CornerTriangles.png"
import Dots1 from "../assets/Dots1.png"
import Dots2 from "../assets/Dots2.png"
import WhyInternBG from "../assets/WhyInternBG.png"
import WhyInternRectangle1 from "../assets/WhyInternRectangle1.png"
import WhyInternRectangle2 from "../assets/WhyInternRectangle2.png"
import WhyInternRectangle3 from "../assets/WhyInternRectangle3.png"
import BorderDetails1 from "../assets/BorderDetails1.svg"
import BorderDetails2 from "../assets/BorderDetails2.svg"
import YellowDiamond from "../assets/YellowDiamond.svg"

const Internship = () => {
    return (
        <>
            <Navbar title="INTERNSHIP" subtitle="PROGRAMS" bg={HeaderBG}/>
            <div className="my-40 mx-72 space-y-12 justify-center text-center bg-white">
                <div className="font-semibold text-5xl">
                    <span className="text-[#FFA523] ">Intern</span> with FUSION!
                </div>
                <hr className="w-48 h-1 mx-auto my-4 bg-[#FAC80A] border-0 rounded"/>
                <div className="text-xl">
                    Our 10-week internship program enables interns to shadow three board positions of their choice. The first six weeks <br/>
                    involve rotating through these roles, followed by a focus on one preferred position during the final four weeks, <br/>
                    culminating in an intern-led general meeting in the last week. Interns are expected to attend both general meetings <br/>
                    and board meetings throughout the program.
                </div>
            </div>
            <div className="relative bg-[#F4F4F4] py-32">
                <div className="text-center text-4xl font-bold tracking-wide py-14">
                    <span className="text-[#7D7D7D]">&lt;&lt;</span> INTERN DUTIES <span className="text-[#7D7D7D]" >&gt;&gt;</span>
                </div>
                <div className="relative flex w-3/4 mx-auto flex-row justify-center space-x-10 z-10">
                    <div className="flex flex-col w-1/4 bg-white text-center p-8 space-y-4 rounded-tl-[80px]">
                        <img src={Gear} className="w-1/2 mx-auto"/>
                        <div className="text-3xl font-bold">
                            Support
                        </div>
                        <img src={Divider} className="w-1/8 mx-auto"/>
                        <div >
                            Attend all general meetings and board meetings, and generally
                            be an active member in the community
                        </div>
                    </div>
                    <div className="flex flex-col w-1/4 bg-white text-center p-8 space-y-4">
                        <img src={SunGear} className="w-1/2 mx-auto"/>
                        <div className="text-3xl font-bold">
                            Innovate
                        </div>
                        <img src={Divider} className="w-1/8 mx-auto"/>
                        <div >
                            Create and host an event based on your chosen
                            board position during the final three weeks of the program
                        </div>
                    </div>
                    <div className="flex flex-col w-1/4 bg-white text-center p-8 space-y-4 rounded-br-[80px]">
                        <img src={Sun} className="w-1/2 mx-auto"/>
                        <div className="text-3xl font-bold">
                            Organize
                        </div>
                        <img src={Divider} className="w-1/8 mx-auto"/>
                        <div >
                            Plan intern week, organizing a general meeting and programs throughout the week
                            with your intern class 
                        </div>
                    </div>
                </div>
                <img src={Dots2} className="absolute bottom-20 left-64"/>
                <img src={CornerTriangles} className="absolute bottom-0 left-0"/>
                <img src={CornerTriangles} className="absolute top-0 right-0 rotate-180"/>
                <img src={Dots1} className="absolute top-48 right-44"/>
            </div>
            <div className="flex flex-col relative space-y-4 py-40 bg-white items-center">
                <div className="text-center text-5xl font-semibold pb-16">
                    <span className="text-[#FAC80A] text-6xl font-bold">?</span> <span className="text-[#FFA523] text-8xl font-bold">?</span> <span className="text-[#FAC80A] text-6xl font-bold">?</span>
                    <br/>
                    Why Intern for FUSION
                </div>
                <Testimonial
                    Name="Cayz Paclibar"
                    Quote="“The FUSION internship was my stepping stone to becoming a better leader,
                     teaching me vital skills in public speaking, communication, and organization.
                      FUSION has been the heart of my college experience because of everything it’s taught me <3”"
                    Position="FU Class >> Secretary ‘24-’25"
                    Image= {CayzPhoto}
                    Color= "#F4F4F4"
                    Mirrored={true}
                />
                <Testimonial
                    Name="Jhaneen Uy"
                    Quote="“Participating in FUSION's internship broadened my perspective of the organization,
                     pushing me beyond my comfort zone to engage more confidently in larger social environments and develop my stage presence. “"
                    Position="SI Class >> Internal Vice President ‘24-’25"
                    Image= {JhaneenPhoto}
                    Color= "#F4F4F4"
                    Mirrored={false}
                />
                <Testimonial
                    Name="Arlaghn Cayanan"
                    Quote="“Becoming an intern gave me hands-on experience with FUSION's programs, allowing me to grow both professionally 
                    and personally in this space. My intern experience inspired me to pursue a bigger role, ultimately leading to my application for a board position.”"
                    Position="ON Class >> Athletics Co-Director ‘24-’25"
                    Image= {ArlaghnPhoto}
                    Color= "#F4F4F4"
                    Mirrored={true}
                />
                <img src={Dots2} className="absolute top-0 left-0 opacity-50"/>
                <img src={WhyInternBG} className="absolute bottom-0 right-0 -z-10"/>
                <img src={WhyInternRectangle1} className="absolute top-32 left-32"/>
                <img src={WhyInternRectangle2} className="absolute bottom-64 left-48"/>
                <img src={WhyInternRectangle3} className="absolute bottom-32 left-32"/>
                <img src={WhyInternRectangle2} className="absolute top-64 right-48"/>
                <img src={WhyInternRectangle3} className="absolute top-32 right-32"/>
            </div>
            <div className="relative bg bg-center bg-cover flex flex-row margin py-36"
            style={{ backgroundImage: `url(${InternAppBg}) `}}>
                <img src={BorderDetails1} className="absolute bottom-0"/>
                <img src={BorderDetails2} className="absolute bottom-0 right-0"/>
                <div className="absolute inset-0 w-full h-full bg-white bg-opacity-90"/>
                <div className="relative flex basis-1/4 justify-end z-10">
                    <img src={InternPhoto1}/>
                    <img src={GrayDiamond} className="absolute left-1/3 -top-4"/>
                    <img src={YellowDiamond} className="absolute left-1/4 top-3/4"/>
                </div>
                <div className="text-center basis-1/2 space-y-14 z-10">
                    <div className="text-[#7D7D7D] text-2xl font-semibold tracking-wider">
                        EAGER TO COLLABORATE AND CONNECT?
                    </div>
                    <div className="text-5xl font-semibold">
                        Apply to our FUSION <br/>
                        Internship Program Below!
                    </div>
                    <button className="bg-[#FFA523] text-white text-2xl font-semibold  py-4 px-10 tracking-widest"> APPLY HERE ❯</button>
                </div>
                <div className="relative basis-1/4">
                    <img src={InternPhoto2}/>
                    <img src={GrayDiamond} className="absolute right-1/3 -bottom-3"/>
                    <img src={YellowDiamond} className="absolute right-1/3 top-0"/>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Internship;
