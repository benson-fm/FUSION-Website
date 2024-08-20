{/*  */}
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import fufit_navbar from "../assets/fufit_navbar.png"
import fufit_basketball from "../images/fufit_basketball.png"
import fufit_fever from "../images/fufit_fever.png"
import fufit from "../assets/fufit.png"
import fufit_destress from "../images/fufit_destress.png"
import fufit_nutrition from "../images/fufit_nutrition.png"
import fufit_bg1 from "../assets/fufit_bg1.png"
import fufit_bg2 from "../assets/fufit_bg2.png"
import fufit_bg3 from "../assets/fufit_bg3.png"
import fufit_bg4 from "../assets/fufit_bg4.png"
import fufit_shadow1 from "../assets/fufit_shadow1.png"
import fufit_shadow2 from "../assets/fufit_shadow2.png"
import fufit_dots1 from "../assets/fufit_dots1.png"
import fufit_dot1 from "../assets/fufit_dot1.png"




export function FuFit() {    
    return (
        <div className="flex flex-col">
            <Navbar title="FUSION FIT" subtitle="PROGRAMS" bg={fufit_navbar} />

            {/* FuFuit Overview */}
            <section className="w-full h-[540px] bg-white flex justify-center items-center">
                <div className="w-[58%] h-1/2 text-center">
                    <div className="font-semibold text-5xl">
                        <span className="text-black">Embrace your</span> <span className="text-[#FFA523]">Inner Athelete</span>
                    </div>
                    <hr className="w-48 h-1 mx-auto bg-[#FAC80A] border-0 rounded my-10"/>
                    <div className="h-1/2 flex justify-center items-center">
                        <p className="text-black text-center">
                        FUSION's athletic programs aim to build a strong community, enhance physical well-being, and support mental 
                        health through a range of recreational and organized activities. By providing opportunities for exercise, we 
                        encourage our members to stay active and healthy. Our organized sports activities foster teamwork and camaraderie, 
                        while our workshops offer a supportive space for relaxation and emotional well-being. Together, these programs 
                        ensure that our members have the resources they need to thrive both physically and mentally.
                        </p>
                    </div>
                </div>
            </section>

            {/* Get moving */}
            <section className="w-full bg-white flex flex-row relative pb-10">
                <div className="absolute inset-0 z-5">
                    <img src={fufit_bg1} className="max-w-full h-auto object-cover"></img>
                </div>

                <div className="w-[48%] flex justify-end relative z-10 ">
                    <div className="w-[72%] h-full flex justify-end">
                        <img src={fufit_basketball} className="max-w-full h-auto mt-[6.25rem] mb-[7rem]"></img>
                        <img src={fufit_dots1} className="w-20 h-16 absolute transform translate-y-[600%] z-20"/>
                    </div>
                </div>
                
                <div className="w-[52%] h-full relative z-10"> 
                    <div className="w-[64%] flex flex-col ml-[14%]">
                        <div className="w-full bg-[#F4F4F4] mt-10 rounded-t-[60px] rounded-br-[60px] pb-14">
                            <div className="w-[85%] ml-[7%]">
                                <h1 className="font-[700] text-[#FFA523] mt-[7%] tracking-[.1em]">FUSION FIT &gt;&gt;</h1>
                                <h1 className="text-black text-3xl font-[700] mt-[3%] ">Get Moving and Feel the Momentum</h1>
                                <hr className="w-16 h-1  bg-[#FFA523] border-0 rounded mt-[5%]"/>
                                <p className="text-xs text-black mt-7 leading-6">Our recreational exercise program provides general members 
                                an outlet to stay active and healthy. Participate in a variety of activities designed to suit all fitness levels, 
                                including basketball, volleyball, soccer, flag football, ultimate frisbee, pickleball, kickball, yoga, group workouts, 
                                and many more. Whether you are looking to work on your fitness goals or simply want to stay active, FUSION Fits have 
                                something to offer for everyone at all levels. Join us to stay active, connect with fellow members, and make fitness 
                                an enjoyable part of your routine!</p>
                            </div>
                        </div>
                        <img src={fufit_shadow1} className="w-64 h-8 mt-5 mx-auto"></img>
                    </div>
                </div>
            </section>

            {/* bring the heat */}
            <section className="w-full bg-[#F4F4F4] flex flex-row relative pb-5">
                <div className="absolute inset-0 z-5">
                    <img src={fufit_bg2} className="max-w-full h-auto object-cover"></img>
                </div>

                <div className="w-[53.5%] h-full relative z-10">
                    <div className="w-[63%] flex flex-col ml-[22%]">
                        <div className="w-full bg-white mt-10 rounded-b-[60px] rounded-tl-[60px] pb-9">
                            <div className="w-[85%] ml-[7%]">
                                <h1 className="font-[700] text-[#FAC80A] mt-[7%] tracking-[.1em]">FUSION FIT &gt;&gt;</h1>
                                <h1 className="text-black text-3xl font-[700] mt-[3%] ">Bringing the Heat to Every Game</h1>
                                <hr className="w-16 h-1  bg-[#FAC80A] border-0 rounded mt-[5%]"/>
                                <p className="text-xs text-black mt-[5%] leading-6">Our recreational exercise program provides general 
                                members an outlet to stay active and healthy. Participate in a variety of activities designed to suit all 
                                fitness levels, including basketball, volleyball, soccer, flag football, ultimate frisbee, pickleball, kickball, 
                                yoga, group workouts, and many more. Whether you are looking to work on your fitness goals or simply want to 
                                stay active, FUSION Fits have something to offer for everyone at all levels. Join us to stay active, connect 
                                with fellow members, and make fitness an enjoyable part of your routine!</p>
                            </div>
                        </div>
                        <img src={fufit_shadow1} className="w-64 h-8 mt-5 mx-auto"></img>
                    </div>
                </div>

                <div className="w-[46.5%] relative z-10">
                    <div className="w-[75%] h-full flex justify-end">
                        <img src={fufit_fever} className="max-w-full h-auto mt-[25%] mb-[5.75rem]"></img>
                        <img src={fufit_dot1} className="w-16 h-16 absolute transform translate-x-[50%] translate-y-[540%] z-20"/>
                    </div>
                </div>
            </section>
        

            {/* destress */}
            <section className="w-full bg-[#F4F4F4] flex flex-row relative pb-[1.8rem]">
                <div className="absolute inset-0 z-5">
                    <img src={fufit_bg3} className="max-w-full h-auto object-cover"></img>
                </div>

                <div className="w-[48%] flex justify-end relative z-10">
                    <div className="w-[72%] h-full">
                        <img src={fufit_destress} className="max-w-full h-auto mt-28"></img>
                    </div>
                </div>
                
                <div className="w-[52%] h-full relative z-10"> 
                    <div className="w-[64%] flex flex-col ml-[14%]">
                        <div className="w-full bg-white mt-12 pb-9 pr-2 rounded-t-[60px] rounded-br-[60px]">
                            <div className="w-[85%] ml-[7%]">
                                <h1 className="font-[700] text-[#FAC80A] mt-[7%] tracking-[.1em]">DE-STRESS &gt;&gt;</h1>
                                <h1 className="text-black text-3xl font-[700] mt-[3%] ">Take a Pause: De-stress with FUSION</h1>
                                <hr className="w-16 h-1  bg-[#FAC80A] border-0 rounded mt-6"/>
                                <p className="text-xs text-black mt-5 leading-6">Our de-stress program is designed to support 
                                the overall well-being of our general members. Participate in relaxing and creative activities such 
                                as group painting, meditation, origami, slime-making, and other arts and crafts. These workshops offer 
                                a perfect opportunity to unwind, express creativity, find your outlet, and find balance amidst daily stresses. 
                                Join us to relax, connect with fellow members, and enhance your mental and emotional well-being!</p>
                            </div>
                        </div>
                        <img src={fufit_shadow1} className="w-64 h-8 mt-5 mx-auto"></img>
                    </div>
                </div>
            </section>

            {/* nutrition */}
            <section className="w-full bg-white flex flex-row relative pb-[4.5rem]">
                <div className="absolute inset-0 z-5">
                    <img src={fufit_bg4} className="max-w-full h-auto object-cover"></img>
                </div>

                <div className="w-[53.5%] h-full relative z-10">
                    <div className="w-[63%] flex flex-col ml-[22%]">
                        <div className="w-full bg-[#F4F4F4] mt-[15%] rounded-b-[60px] rounded-tl-[60px] pb-16">
                            <div className="w-[85%] ml-[7%]">
                                <h1 className="font-[700] text-[#FFA523] mt-[7%] tracking-[.1em]">NUTRITION &gt;&gt;</h1>
                                <h1 className="text-black text-3xl font-[700] mt-[3%] ">Nutrition for a Better You</h1>
                                <hr className="w-16 h-1  bg-[#FFA523] border-0 rounded mt-[5%]"/>
                                <p className="text-xs text-black mt-[5%] leading-[22px]">Our Nutrition Program empowers members 
                                to achieve their physical goals while fostering a healthy relationship with food. Learn how to 
                                maintain a balanced diet on a budget, cook Filipino cuisine with your friends, and explore the 
                                essential food groups needed for a healthy meal. Join us to connect with your friends and 
                                Filipino culture through food and better your overall nutrition.</p>
                            </div>
                        </div>
                        <img src={fufit_shadow2} className="w-64 h-8 mt-5 mx-auto"></img>
                    </div>
                </div>

                <div className="w-[46.5%] relative z-10">
                    <div className="w-[75%]">
                        <img src={fufit_nutrition} className="max-w-full h-auto mt-28 "></img>
                    </div>
                </div>
            </section>

            {/* fufit thing at the bottom */}
            <section className="w-full h-[499px] bg-white">
                <img src={fufit} className="max-w-full h-auto"/>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default FuFit;