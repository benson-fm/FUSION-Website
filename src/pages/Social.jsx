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
import {Reveal} from "../lib/Reveal";
import FusionFrenzyBackground from "../images/FusionFrenzyBackground.png";

export default function Social() {
    return (
        <div>
            <Navbar bg={SocialHeaderPic} title="SOCIAL" subtitle="PROGRAMS"/>
            
            <div className="flex flex-col items-center justify-center w-full h-[30.46875rem] bg-white">
                <Reveal>
                <div className="max-w-[1088px] w-full flex flex-col justify-center items-center gap-10">
                    
                    {/* Title */}
                    <h1 className="text-black text-center font-karla text-4xl font-bold">
                    Make <span className="text-[#FFA523]">Connections</span> in the FUSION Space
                    </h1>

                    {/* Yellow Divider Line */}
                    <div className="w-40 border-t-4 border-solid" style={{ borderColor: '#FAC80A', opacity: 1 }}></div>

                    {/* Description */}
                    <p className="text-black text-center font-inter text-base leading-7 px-28 w-[60rem]">
                    FUSION&apos;s social programs are designed to enrich the member experience by fostering community, 
                    connection, and fun. These events create opportunities for members to engage with one another 
                    outside of academic and professional settings, building strong relationships and enhancing the 
                    sense of camaraderie within our organization. By offering a diverse range of activities, our 
                    social programs encourage participation, promote a balanced lifestyle, and contribute to a vibrant
                    and supportive community.
                    </p>        
                </div>
                </Reveal>
            </div>

            <div className="w-full bg-[#F4F4F4] flex justify-center items-center px-[5rem] h-[45rem] relative">
                {/* Background White Half Sun */}
                <img src={WhiteHalfSun} alt="White Half Sun" className="absolute top-0 left-0 w-[40%] h-full z-0" />

                <div className="flex items-center z-10 space-x-14">
                    
                    {/* Left Image */}
                    <div className="flex justify-center">
                    <img src={FusionFridays} alt="Fusion Friday Karaoke" className="w-[41.4375rem] h-[24.9375rem] rounded-tl-[1.875rem] rounded-br-[1.875rem]" />
                    </div>
                    
                    {/* Right Text Content */}
                    <div className="w-[39.8125rem] h-[32.125rem] flex flex-col p-10 bg-white rounded-[3.75rem] shadow-lg relative">
                        <h1 className="font-karla text-[1.5rem] font-bold leading-[1.75rem] tracking-[0.12em] text-left" style={{ color: '#FFA523' }}>
                            FUSION FRIDAYS {'>>'}
                        </h1>
                        <h2 className="text-black text-left font-karla text-[2.5rem] font-bold mt-5">
                            FUSION Fridays: Socials That Spark Connection
                        </h2>
                        <div className="w-[5rem] border-t-4 border-solid mt-5" style={{ borderColor: '#FFA523' }}></div>
                        <p className="text-black text-left font-inter text-[1rem] leading-7 mt-5">
                            FUSION Fridays are all about unwinding and having fun with our vibrant community. We host a variety of social events, 
                            from karaoke and bowling to bonfires and beyond. These gatherings provide a relaxed atmosphere where members can bond, 
                            enjoy themselves, and build lasting friendships outside of the academic setting. Join us for FUSION Fridays and make the 
                            most of your FUSION experience with exciting activities and great company!
                        </p>

                        {/* Shadow Underneath the Text Box */}
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                            <img src={ShadowEllipse} alt="Shadow Ellipse" className="w-[12rem] h-auto" />
                        </div>
                    </div>
                </div>
                </div>


                <div className="w-full h-[45rem] bg-white flex justify-center items-center overflow-hidden relative" style={{ backgroundImage: `url(${FusionFrenzyBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="w-full flex flex-row justify-center items-center relative p-10"> {/* Reduced padding to p-10 */}
                        
                        {/* Left Content */}
                        <div className="flex flex-col shadow-lg w-[39.8125rem] h-[28.125rem] bg-[#F4F4F4] rounded-[72px] rounded-tr-none p-12 relative mr-10"> {/* Added margin-right to reduce space */}
                        <h1 className="font-karla text-[24px] font-bold leading-[28.06px] tracking-[0.12em] text-left" style={{ color: '#FFA523' }}>
                            GAMING {'>>'}
                        </h1>
                        <h2 className="text-black font-karla text-4xl font-bold mt-5 w-[32.0625rem]">
                            FUSION Frenzy: Play, Compete, and Collaborate
                        </h2>
                        <div className="w-20 border-t-4 border-solid mt-10" style={{ borderColor: '#FFA523' }}></div>
                        <p className="text-black font-inter text-base leading-7 mt-10">
                            Whether you're strategizing in a team battle or exploring new worlds, FUSION Frenzy offers a chance to unwind, bond with fellow members, and enjoy the thrill of gaming. Join us for FUSION Frenzy and level up your FUSION experience with some friendly competition and camaraderie!
                        </p>
                        {/* Shadow Underneath the Text Box */}
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                            <img src={OrangeShadowEllipse} alt="Shadow Ellipse" className="w-[12rem] h-auto" />
                        </div>
                        </div>

                        {/* Right Video Game Logos */}
                        <div className="flex flex-wrap justify-center items-center">
                        <img src={GamingLogos} alt="Gaming Logos" className="w-full h-full" />
                        </div>
                    </div>
                </div>


                <div className="w-full bg-[#F4F4F4] flex justify-center items-center px-[5rem] h-[45rem] relative">
                    {/* Background White Half Gear */}
                    <img src={WhiteHalfGear} alt="White Half Gear" className="absolute top-0 left-0 w-[40%] h-full z-0" />

                    <div className="flex items-center z-10 space-x-14">
                        
                        {/* Left Image */}
                        <div className="flex justify-center">
                        <img src={FtekPic} alt="F-Tek Dance Workshop" className="w-[41.4375rem] h-[24.9375rem] rounded-tl-[1.875rem] rounded-br-[1.875rem]" />
                        </div>
                        
                        {/* Right Text Content */}
                        <div className="w-[39.8125rem] h-[32.125rem] flex flex-col p-10 bg-white rounded-[3.75rem] shadow-lg relative">
                        <h1 className="font-karla text-[1.5rem] font-bold leading-[1.75rem] tracking-[0.12em] text-left" style={{ color: '#FFA523' }}>
                            F-TEK {'>>'}
                        </h1>
                        <h2 className="text-black text-left font-karla text-[2.5rem] font-bold mt-5">
                            Groove Into the Future: F-Tek Dance Workshops
                        </h2>
                        <div className="w-[5rem] border-t-4 border-solid mt-5" style={{ borderColor: '#FFA523' }}></div>
                        <p className="text-black text-left font-inter text-[1rem] leading-7 mt-5">
                        F-Tek is FUSION&apos;s dance workshop series designed to energize and inspire our members. Whether you&apos;re a seasoned dancer or just looking to have fun, 
                        F-Tek offers engaging dance sessions that cater to all skill levels. Our workshops cover a variety of styles and techniques, providing a vibrant 
                        space to learn new moves, express yourself, and stay active!
                        </p>

                        {/* Shadow Underneath the Text Box */}
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                            <img src={ShadowEllipse} alt="Shadow Ellipse" className="w-[12rem] h-auto" />
                        </div>
                        </div>
                    </div>
                </div>
                <Footer />    
        </div>
        
    );
}