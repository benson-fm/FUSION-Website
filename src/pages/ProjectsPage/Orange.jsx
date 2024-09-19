import FEP_Pic from '../../images/FEP_Pic.png';
import lead from '../../images/lead.png';
import mech from '../../images/mech.png';
import software from '../../images/software.png';
import dev from '../../images/dev.png';
import design from '../../images/design.png';
import sublead from '../../images/sublead.png';
import red_dot from '../../images/red_dot.png';
import quotation from '../../images/quotation.png';

import leftBig from './images/leftBig.svg'
import leftDots from './images/leftDots.svg'
import leftSquare from './images/leftSquare.svg'
import rightBig from './images/rightBig.svg'
import rightDots from './images/rightDots.svg'
import rightSquare from './images/rightSquare.svg'

import luigi from './images/luigi.png'
import lex from './images/lex.png'
import yzabella from './images/yzabella.png'

import {Reveal} from '../../lib/Reveal.jsx';

{/* 
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Karla:wght@400;700&display=swap');

.font-inter {
    font-family: 'Inter', sans-serif;
}

.font-karla {
    font-family: 'Karla', sans-serif;
}

*/}

const Project = () => {
    return (
        <div className="flex flex-col">
            {/* Yellow section */}
            <section className="bg-white w-full h-[1504px] flex flex-col items-center justify-start">
                <div style={{ 
                        backgroundImage: `url(${FEP_Pic})`, 
                        backgroundColor: '#FF9700', 
                        backgroundBlendMode: 'lighten' 
                    }} 
                    className="w-full h-[752px] bg-cover bg-center flex items-center justify-center"
                    >
                    <div className="w-[1306px] h-[438px] flex flex-row items-center justify-center">
                        <Reveal duration={1500}>
                            <div className="w-[608px] h-[438px] mr-[63px] flex flex-col gap-10 items-start text-start" >
                                <h1 className="text-[40px] text-white font-karla font-[600] w-[406px] h-[94px] leading-10">The FUSION Engineering Project</h1>
                                <p className="text-base text-white font-inter font-light w-[608px] ">FUSION empowers members to explore their potential through 
                                pioneering projects like the FUSION Engineering Project (FEP) and various STEM initiatives. Committed to fostering leadership 
                                and technical skills, we provide a platform for ideas and solutions. Join us in shaping the future of STEM.
                                <br></br>
                                <br></br>
                                <br></br>
                                Teams rigorously design their robots, drawing inspiration from existing projects and learning about relevant technology. Using 
                                software like TinkerCAD and Solidworks, they create detailed models. Manufacturing involves 3D printing, laser cutting, and 
                                soldering. After assembly, robots are tested to identify issues, optimize design, and practice control for the showcase.</p>
                            </div>
                        </Reveal>

                        <Reveal duration={1500}>
                            <div className="grid grid-cols-2 w-[572px] h-[392px] ml-[63px]">
                                <div className="mr-[16px]"> {/* team lead */}
                                    <div className="flex flex-col bg-black rounded-tl-[45px] rounded-br-[45px] w-[270px] h-[180px]">
                                        <div className="ml-[30.6px]">
                                            <img src={lead} className="w-[27px] h-[23.4px] mt-[25.2px] object-cover"/>
                                            <h1 className="text-white mt-[13.5px] tracking-[.1em] font-[700]  text-start">TEAM LEAD</h1>
                                            <p className="w-full h-[51px] text-white text-[14px] mt-[8px]  text-start">Manage, plan, and lead the entire project, ensuring coordination and successful completion.</p>
                                        </div>
    
                                    </div>
                                </div>
    
                                <div className="ml-[16px]"> {/* mech */}
                                    <div className="flex flex-col bg-black rounded-tl-[45px] rounded-br-[45px] w-[270px] h-[180px]">
                                        <div className="ml-[30.6px]">
                                            <img src={sublead} className="w-[27px] h-[23.4px] mt-[25.2px] object-cover"/>
                                            <h1 className="text-white mt-[13.5px] tracking-[.1em] font-[700] text-start">SUB-TEAM LEAD</h1>
                                            <p className="w-[205.2px] h-[51px] text-white text-[14px] mt-[8px]  text-start">Oversee and guide their specific team (hardware, mechanical), ensuring progress and quality.</p>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="mr-[16px]"> {/* hardware */}
                                    <div className="flex flex-col bg-white rounded-tl-[45px] rounded-br-[45px] w-[270px] h-[180px]">
                                        <div className="ml-[30.6px]">
                                            <img src={software} className="w-[27px] h-[23.4px] mt-[25.2px] object-cover"/>
                                            <h1 className="text-black mt-[13.5px] tracking-[.1em] font-[700] text-start">HARDWARE</h1>
                                            <p className="w-[205.2px] h-[51px] text-black text-[14px] mt-[8px] text-start">Develop and integrate electronic components and systems for the project.</p>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="ml-[16px]"> {/* software */}
                                    <div className="flex flex-col bg-white rounded-tl-[45px] rounded-br-[45px] w-[270px] h-[180px]">
                                        <div className="ml-[30.6px]">
                                            <img src={mech} className="w-[27px] h-[23.4px] mt-[25.2px] object-cover"/>
                                            <h1 className="text-black mt-[13.5px] tracking-[.1em] font-[700] text-start">MECHANICAL</h1>
                                            <p className="w-full h-[51px] text-black text-[14px] mt-[8px] text-start">Design, build, and optimize mechanical structures and systems for functionality and performance.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
                <div style={{ 
                        backgroundImage: `url(${FEP_Pic})`, 
                        backgroundColor: '#FFA523', 
                        backgroundBlendMode: 'plus-lighter' 
                    }} 
                    className="w-full h-[752px] bg-cover bg-center flex items-center justify-center">

                    <Reveal duration={1500}>
                        <div className="w-[1306px] h-[438px] flex flex-row items-center justify-center">
                            <div className="grid grid-cols-2 w-[572px] h-[392px] mr-[63px]">
                                <div className="mr-[16px]"> {/* design lead */}
                                    <div className="flex flex-col bg-black rounded-tl-[45px] rounded-br-[45px] w-[270px] h-[180px]">
                                        <div className="ml-[30.6px]">
                                            <img src={lead} className="w-[27px] h-[23.4px] mt-[25.2px] object-cover"/>
                                            <h1 className="text-white mt-[13.5px] tracking-[.1em] font-[700] text-start">DESIGN LEAD</h1>
                                            <p className="w-[205.2px] h-[51px] text-white text-[14px] mt-[8px] text-start">Manage the design of the project, ensuring a cohesive, user-friendly experience.</p>
                                        </div>
    
                                    </div>
                                </div>
    
                                <div className="ml-[16px]"> {/* dev lead */}
                                    <div className="flex flex-col bg-black rounded-tl-[45px] rounded-br-[45px] w-[270px] h-[180px]">
                                        <div className="ml-[30.6px]">
                                            <img src={lead} className="w-[27px] h-[23.4px] mt-[25.2px] object-cover"/>
                                            <h1 className="text-white mt-[13.5px] tracking-[.1em] font-[700] text-start">DEV LEAD</h1>
                                            <p className="w-[205.2px] h-[51px] text-white text-[14px] mt-[8px] text-start">Guide and coordinate the development team, ensuring efficient coding and integration.</p>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="mr-[16px]"> {/* design */}
                                    <div className="flex flex-col bg-white rounded-tl-[45px] rounded-br-[45px] w-[270px] h-[180px]">
                                        <div className="ml-[30.6px]">
                                            <img src={design} className="w-7 h-7 mt-[25.2px] object-cover"/>
                                            <h1 className="text-black mt-[13.5px] tracking-[.1em] font-[700] text-start">DESIGNERS</h1>
                                            <p className="w-[205.2px] h-[51px] text-black text-[14px] mt-[8px] text-start">Create optimal user interfaces and experiences, focusing on aesthetic usability.</p>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="ml-[16px]"> {/* dev */}
                                    <div className="flex flex-col bg-white rounded-tl-[45px] rounded-br-[45px] w-[270px] h-[180px]">
                                        <div className="ml-[30.6px]">
                                            <img src={dev} className="w-10 mt-[25.2px] object-cover"/>
                                            <h1 className="text-black mt-[13.5px] tracking-[.1em] font-[700] text-start">DEVELOPERS</h1>
                                            <p className="w-[205.2px] h-[51px] text-black text-[14px] mt-[8px] text-start">Write, test, and maintain code, implementing the technical functionality of the project.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div className="w-[608px] h-[438px] ml-[63px] flex flex-col items-start text-start gap-5 justify-center" >
                                <h1 className="text-[40px] text-white font-karla font-[600] w-[601px] h-[94px] leading-10">The FUSION Information & Computer Sciences Project</h1>
                                <p className="text-base text-white font-inter w-[608px]">Teams rigorously develop their software solutions, drawing inspiration from existing projects and learning about relevant technologies. 
                                <br></br>
                                <br></br>
                                The development process involves designing algorithms, writing and testing code, and integrating various software components. Team members utilize collaboration platforms and version control systems to streamline their workflow. After development, software is tested rigorously to identify bugs, optimize performance, and ensure reliability for the final showcase. FIP not only enhances technical skills but also promotes teamwork, problem-solving, and project management, preparing members for successful careers in the tech industry.</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
            
            {/* Voices of Success */}
            <section className="bg-white relative w-full flex flex-col items-center justify-start">
                <div className="flex flex-col items-center justify-start z-50 pb-40">
                    <div className="w-[356px] h-[47px] mt-[115px] text-center">
                        <h1 className="text-[40px] font-karla font-bold">
                            <span className="text-black">Voices of </span>
                            <span className="text-[#FFA523]">Success</span>
                        </h1>                        
                    </div>

                    <div className="w-[482px] h-[64px] mt-[20px] text-center">
                        <p className="text-[#3C3C3C]">Still not convinced? Read the reviews of the various engineers, 
                        <br></br>
                        scientists, and designers who participated in our projects! </p>
                    </div>

                    <Reveal duration={1500}>
                        <div className="flex flex-row w-[1307px] h-[364px] mt-[63px] space-x-[55px]">
                            <div className="bg-white w-1/3 h-[364px] rounded-tr-[64px] rounded-bl-[64px]">
                                <div className="ml-[42px]">
                                    <img src={quotation} className="w-[70px] h-[47px] mt-[35px] object-cover"/>
                                    <p className="w-[314px] h-[140px] text-black text-[14px] mt-[19px]  text-start">“When I started at 
                                    UC Irvine, I lacked a strong cultural identity and knowledge of my field. Joining FEP 
                                    boosted my confidence in my cultural identity and inspired me to learn, surrounded by 
                                    people with similar experiences. If you seek growth, immerse yourself in the FEP community!”</p>
                                    <div className="flex flex-row w-[314px] h-[55px] space-x-[102px] mt-[26px]">
                                        <img src={luigi} className="w-[55px] h-[55px]  object-cover"/>
                                        <div className="w-[157px] h-[42px] mt-[6.5px] text-black text-right">
                                            <p>Luigi Lozano</p>
                                            <p>ENG Project Director</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div className="bg-white w-1/3 h-[364px] rounded-tr-[64px] rounded-bl-[64px]">
                                <div className="ml-[42px]">
                                    <img src={quotation} className="w-[70px] h-[47px] mt-[35px] object-cover"/>
                                    <p className="w-[314px] h-[129px] text-black text-[14px] mt-[19px] text-start">“As someone who had limited technical project experience, the FUSION Engineering Project had provided me many opportunities of learning. With the hands-on and communication experience I gained from FEP, I was able to apply my knowledge to other professional and academic opportunities.” </p>
                                    <div className="flex flex-row w-[314px] h-[55px] space-x-[102px] mt-[37px]">
                                        <img src={yzabella} className="w-[55px] h-[55px]  object-cover"/>
                                        <div className="w-[157px] h-[42px] mt-[6.5px] text-black text-right">
                                            <p>Yzabella Reyes</p>
                                            <p>Hardware Subteam</p>
                                        </div>
                                    </div>                                
                                </div>
                            </div>
    
                            <div className="bg-white w-1/3 h-[364px] rounded-tr-[64px] rounded-bl-[64px]">
                                <div className="ml-[42px]">
                                    <img src={quotation} className="w-[70px] h-[47px] mt-[35px] object-cover"/>
                                    <p className="w-[314px] h-[129px] text-black text-[14px] mt-[19px] text-start">“FEP is an amazing program to learn how the engineering design process works. I learned many technical skills during my time in FEP and it has helped me grow creatively and professionally as well. I highly recommend joining the project if you are a beginner!”</p>
                                    <div className="flex flex-row w-[314px] h-[55px] space-x-[102px] mt-[37px]">
                                        <img src={lex} className="w-[55px] h-[55px]  object-cover"/>
                                        <div className="w-[157px] h-[42px] mt-[6.5px] text-black text-right">
                                            <p>Lex Ibanez</p>
                                            <p>Hardware Subteam</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <img src={rightBig} className="absolute z-1 right-0 bottom-0"/>
                <img src={leftBig} className="absolute z-2 left-0 bottom-0"/>
                <img src={leftSquare} className="absolute z-10 left-0 top-1/4"/>
                <img src={rightSquare} className="absolute z-10 right-0 top-1/12"/>
                <img src={leftDots} className="absolute z-20 left-56 bottom-32"/>
                <img src={rightDots} className="absolute z-20 right-56 top-64"/>
            </section>
        </div>
    );
}

export default Project;
