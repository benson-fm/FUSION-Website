import FusionFriday from '../assets/fusionFriday.png';
import Ftek from '../assets/ftek.png';
import BlueDiscord from '../assets/blueDiscord.png';
import Valorant from '../assets/valorant.png';
import Overwatch from '../assets/overwatch.png';
import League from '../assets/league.png';
import WhiteHalfSun from '../images/WhiteHalfSun.png';
import FusionFridays from '../images/FusionFridays.png';
import ShadowEllipse from '../images/ShadowEllipse.png';
import GamingTopRight from '../images/GamingTopRight.png';
import GamingBottomLeft from '../images/GamingBottomLeft.png';
import OrangeShadowEllipse from '../images/OrangeShadowEllipse.png';
import GamingLogos from '../images/GamingLogos.png';
import WhiteHalfGear from '../images/WhiteHalfGear.png';
import FtekPic from '../images/FTekPic.png';
import SocialHeaderPic from '../images/SocialHeaderPic.png';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Social() {
    return (
        <div>
            <Navbar bg={SocialHeaderPic} title="SOCIAL" subtitle="PROGRAMS"/>
            <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white">
                <div className="max-w-[1088px] w-full flex flex-col justify-center items-center gap-10 mt-40">
                    <h1 className="text-black text-center font-karla text-4xl font-bold">
                        Make <span style={{ color: '#FFA523' }}>Connections</span> in the FUSION Space
                    </h1>
                    <div className="w-40 border-t-4 border-solid" style={{ borderColor: '#FAC80A', opacity: 1}}></div>
                    <p className="text-black text-center font-inter text-base leading-7 px-28">
                        FUSION's social programs are designed to enrich the member experience by fostering community, 
                        connection, and fun. These events create opportunities for members to engage with one another 
                        outside of academic and professional settings, building strong relationships and enhancing the 
                        sense of camaraderie within our organization. By offering a diverse range of activities, our 
                        social programs encourage participation, promote a balanced lifestyle, and contribute to a vibrant
                        and supportive community.
                    </p>        
                </div>
            </div>
                <div className="w-full bg-[#F4F4F4] flex mt-40 overflow-x-hidden">
                    <div className="max-w-[1088px] w-full flex flex-col gap-10 relative">
                        <img src={WhiteHalfSun} alt={`White Half Sun`} className="w-full h-full left-0 object-cover flex-shrink-0 z-0"/>
                        
                        <img src={FusionFridays} alt={`Fusion Friday Karaoke`} className="w-2/3 h-auto object-cover flex-shrink-0 absolute left-1/4 top-60 z-10" />
                        <div className="w-2/3 h-1/2 p-[44px_0_0_0] gap-[32px] rounded-[72px_72px_72px_0] bg-white flex-shrink-0 absolute left-full top-40 z-10" > 
                            <h1 className="font-karla text-[24px] font-bold leading-[28.06px] tracking-[0.12em] text-left w-[478px] h-[28px] ml-10" style={{color: '#FFA523'}}>
                                FUSION FRIDAYS >>
                            </h1>
                            <h1 className="text-black text-left font-karla text-4xl font-bold ml-10 mr-40 mt-5">
                                FUSION Fridays: Socials That Spark Connection
                            </h1>
                            <div className="w-20 border-t-4 border-solid mt-10 ml-10" style={{ borderColor: '#FFA523', opacity: 1}}></div>
                            <p className="text-black text-left font-inter text-base leading-7 ml-10 mr-10 mt-10">
                                FUSION Fridays are all about unwinding and having fun with our vibrant community. 
                                We host a variety of social events, from karaoke and bowling to bonfires and beyond. 
                                These gatherings provide a relaxed atmosphere where members can bond, enjoy themselves, 
                                and build lasting friendships outside of the academic setting. Join us for FUSION 
                                Fridays and make the most of your FUSION experience with exciting activities and great company!
                            </p>   
                        </div>
                        
                        <img src={ShadowEllipse} alt={`Shadow Ellipse`} className="w-1/3 h-auto object-cover flex-shrink-0 absolute left-full bottom-60 mt-10 ml-20"/>
                    </div>
                </div>

                <div className="w-full bg-white flex overflow-hidden relative">
                    <img src={GamingTopRight} alt="Gaming Graphics Top Right" className="w-1/6 h-1/2 absolute top-0 right-0 object-cover z-0"/>
                    <img src={GamingBottomLeft} alt="Gaming Graphics Bottom Left" className="w-1/6 h-1/2 absolute bottom-0 left-0 object-cover z-0"/>

                    <div className="max-w-[1088px] w-full flex flex-col gap-10 relative">
                        <div className="w-1/2 h-2/3 p-[44px_0_0_0] gap-[32px] rounded-[72px_0px_72px_72px] bg-[#F4F4F4] flex-shrink-0 z-10 left-1/4 mt-20 relative"> 
                            <h1 className="font-karla text-[24px] font-bold leading-[28.06px] tracking-[0.12em] text-left ml-10" style={{color: '#FFA523'}}>
                                GAMING
                            </h1>
                            <h1 className="text-black text-left font-karla text-4xl font-bold ml-10 mr-20 mt-5">
                                FUSION Frenzy: Play, Compete, and Collaborate
                            </h1>
                            <div className="w-20 border-t-4 border-solid mt-10 ml-10" style={{ borderColor: '#FFA523', opacity: 1}}></div>
                            <p className="text-black text-left font-inter text-base leading-7 ml-10 mr-10 mt-10">
                                Whether you're strategizing in a team battle or exploring new worlds, FUSION Frenzy offers a chance to unwind, bond with fellow members, and enjoy the thrill of gaming. 
                                Join us for FUSION Frenzy and level up your FUSION experience with some friendly competition and camaraderie!
                            </p>   
                        </div>
                        <img src={GamingLogos} alt="Discord, League, Overwatch, Valorant" className="w-3/5 h-auto object-cover absolute left-[85%] top-24 flex-shrink-0"/>
                        <img src={OrangeShadowEllipse} alt="Shadow Ellipse" className="w-1/3 h-auto object-cover absolute left-1/3 bottom-20 flex-shrink-0 z-10" /> 
                        <div className='mt-40 z-0'></div>
                    </div>
                </div>
                
                <div className="w-full bg-[#F4F4F4] flex overflow-x-hidden">
                    <div className="max-w-[1088px] w-full flex flex-col gap-10 relative">
                        <img src={WhiteHalfGear} alt={`White Half Gear`} className="w-3/5 h-auto left-0 object-cover flex-shrink-0 z-0"/>
                        
                        <img src={FtekPic} alt={`F-Tek Dance Workshop`} className="w-2/3 h-auto object-cover flex-shrink-0 absolute left-1/4 top-60 z-10"/>
                        <div className="w-2/3 h-1/2 p-[44px_0_0_0] gap-[32px] rounded-[72px_72px_72px_0] bg-white flex-shrink-0 absolute left-full top-40 z-10"> 
                            <h1 className="font-karla text-[24px] font-bold leading-[28.06px] tracking-[0.12em] text-left w-[478px] h-[28px] ml-10" style={{color: '#FFA523'}}>
                                F-TEK
                            </h1>
                            <h1 className="text-black text-left font-karla text-4xl font-bold ml-10 mr-44 mt-5">
                                Groove Into the Future: F-Tek Dance Workshops
                            </h1>
                            <div className="w-20 border-t-4 border-solid mt-10 ml-10" style={{ borderColor: '#FFA523', opacity: 1}}></div>
                            <p className="text-black text-left font-inter text-base leading-7 ml-10 mr-12 mt-10">
                                F-Tek is FUSION's dance workshop series designed to energize and inspire our members. Whether you're a seasoned dancer or just looking to have fun, 
                                F-Tek offers engaging dance sessions that cater to all skill levels. Our workshops cover a variety of styles and techniques, providing a vibrant 
                                space to learn new moves, express yourself, and stay active!
                            </p>   
                        </div>
                        <img src={ShadowEllipse} alt={`Shadow Ellipse`} className="w-1/3 h-auto object-cover flex-shrink-0 absolute left-full bottom-60 mt-10 ml-20"/>
                    </div>
                </div>
                <Footer />    
        </div>
        
    );
}