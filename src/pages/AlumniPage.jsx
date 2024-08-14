import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import alum_navbar from "../assets/alum_navbar.png";
import alum_panel from "../images/alum_panel.png";
import alum_scholarship from "../assets/alum_scholarship.png";
import alum_picnic from "../images/alum_picnic.png";
import alum_picnic2 from "../assets/alum_picnic2.png";
import fep_award from "../images/fep_award.png";
import alum_triangle from "../assets/alum_triangle.png";
import alum_dots1 from "../assets/alum_dots1.png";
import alum_dots2 from "../assets/alum_dots2.png";
import alum_dots3 from "../assets/alum_dots3.png";
import alum_vector1 from "../assets/alum_vector1.png";
import alum_vector2 from "../assets/alum_vector2.png";
import alum_circles1 from "../assets/alum_circles1.png";
import alum_circles2 from "../assets/alum_circles2.png";
import alum_circles3 from "../assets/alum_circles3.png";
import alum_circles4 from "../assets/alum_circles4.png";
import alum_shadow1 from "../assets/alum_shadow1.png";
import alum_shadow2 from "../assets/alum_shadow2.png";
import alum_shadow3 from "../assets/alum_shadow3.png";
import alum_rectangle from "../assets/alum_rectangle.png";
import rod from "../images/rod.png";
import alum_facebook from "../assets/alum_facebook.png";
import alum_linkedin from "../assets/alum_linkedin.png";
import alum_email from "../assets/alum_email.png";


export function AlumniPage() {
    return (
        <div className="flex flex-col overflow-x-hidden">
            <Navbar title="ALUMNI" subtitle="PROGRAMS" bg={alum_navbar} />
            {/* Give Back and Get Involved */}
            <div className="w-full h-[540px] bg-white flex justify-center items-center">
                <div className="w-1/2 h-1/2 text-center">
                    <div className="font-semibold text-5xl">
                        <span className="text-[#FFA523]">Give Back</span> <span className="text-black">and Get Involved</span>
                    </div>
                    <hr className="w-48 h-1 mx-auto bg-[#FAC80A] border-0 rounded my-10"/>
                    <div className="h-1/2 flex justify-center items-center">
                        <p className="text-black text-center">
                        At FUSION, we believe in the power of lifelong connections. Our strong alumni network is a testament 
                        to the enduring relationships formed within our community. We actively engage with our alumni through 
                        regular events and networking opportunities, ensuring they remain an integral part of FUSION's growth 
                        and success. By fostering these connections, we provide current members with invaluable guidance and 
                        support, while celebrating the achievements of our alumni in their professional journeys.
                        </p>
                    </div>
                </div>
            </div>

            {/* alumni panel pic */}
            <div className="w-full relative z-10">
                <img src={alum_panel} />
            </div>

            {/* alumni scholarship */}
            <div className="w-full h-[540px] bg-[#fff5eb] flex flex-row">
                <div className="w-3/5 h-full relative">
                    <div className="w-[34rem] h-[26rem] bg-white rounded-b-[60px] rounded-tl-[60px] ml-[27%] mt-20 z-10 relative border-2 border-white">
                        <div className="w-[30rem] ml-[7%]">
                            <h1 className="font-[700] text-[#FFA523] mt-[9%] tracking-[.1em]">EMPOWERING FUTURES &gt;&gt;</h1>
                            <h1 className="text-black text-3xl font-[700] mt-[3%] ">Alumni Scholarships for Tomorrow's Leaders</h1>
                            <hr className="w-16 h-1  bg-[#FFA523] border-0 rounded mt-[5%]"/>
                            <p className="text-xs text-black mt-[5%] leading-[22px]">FUSION is proud to offer alumni-sponsored scholarships, a testament to the strong support and dedication 
                                of our alumni network. These scholarships are designed to empower current members by providing financial 
                                assistance and recognizing their academic and professional achievements. Through the generosity of our 
                                alumni, we continue to foster a culture of excellence and ambition, ensuring that every member has the 
                                opportunity to succeed and make a lasting impact in the STEM fields.</p>
                        </div>
                    </div>
                    <img src={alum_vector1} className="w-80 h-60 absolute top-0 left-0 z-0"/>
                    <img src={alum_circles2} className="w-14 h-16 absolute transform translate-y-[-640%] translate-x-[270%] z-5"/>
                    <img src={alum_shadow1} className="w-80 h-8 absolute transform translate-x-[101%] translate-y-[50%] z-0"/>
                </div>
                <div className="w-2/5 h-full relative">
                    <img src={fep_award} className="w-[28rem] h-[20rem] mt-[24%] rounded-bl-[40px] rounded-tr-[40px] z-10 relative"/>
                    <img src={alum_circles1} className="w-14 h-24 absolute transform translate-x-[728%] translate-y-[-75%] z-0"/>
                </div>
                <div className="flex flex-col flex-grow justify-start items-end">
                    <img src={alum_triangle} className="w-28 h-28"/>
                    <img src={alum_dots1} className="w-28 h-28"/>
                </div>
            </div>

            {/* Network w pros */}
            <div className="w-full h-[540px] bg-white flex flex-row relative">
                <img src={alum_picnic} className="w-[500px] h-[54%] mt-[9%] ml-[16%] z-10"></img>
                <div className="w-1/3 h-[65%] bg-[#f8f8f8] rounded-t-[60px] rounded-br-[60px] ml-[4%] mt-[7.5%] z-10">
                    <div className="w-[85%] ml-[7%]">
                        <h1 className="font-[700] text-[#FFA523] mt-[7%] tracking-[.1em]">CONNECT AND COLLABORATE &gt;&gt;</h1>
                        <h1 className="text-black text-3xl font-[700] mt-[3%] ">Network with Professionals</h1>
                        <hr className="w-16 h-1  bg-[#FFA523] border-0 rounded mt-[5%]"/>
                        <p className="text-xs text-black mt-[5%] leading-[22px]">These events bring together our current undergraduate 
                        members with FUSION alumni, fostering an environment of collaboration and mentorship. Through workshops, panels, 
                        and social gatherings, our members gain invaluable insights, establish professional relationships, and expand 
                        their career prospects. Join us at our networking events and become part of a thriving community dedicated to 
                        mutual growth and success in the STEM fields!</p>
                    </div>
                </div>
                <img src={alum_rectangle} className="w-[30%] absolute transform translate-x-[33%] translate-y-[11%] z-0"/>
                <img src={alum_dots2} className="w-24 h-20 absolute transform translate-x-[204%] translate-y-[100%] z-0"/>
                <img src={alum_dots3} className="w-24 h-20 absolute transform translate-x-[668%] translate-y-[465%] z-0"/>
                <img src={alum_shadow2} className="w-64 h-8 absolute transform translate-x-[352%] translate-y-[1490%] z-0"/>
            </div>

            {/* Celebrating Alum Stories */}
            <div className="w-full h-[540px] bg-[#fff5eb] flex flex-row">
                <div className="w-[54%] h-full relative ">
                    <div className="w-[62%] h-[71%] bg-white rounded-b-[60px] rounded-tl-[60px] ml-[30%] mt-[11%] z-10 relative border-2 border-white">
                        <div className="w-[85%] ml-[7%]">
                            <h1 className="font-[700] text-[#FFA523] mt-[7%] tracking-[.1em]">ALUMNI SPOTLIGHT &gt;&gt;</h1>
                            <h1 className="text-black text-3xl font-[700] mt-[3%] ">Celebrating Success with Alumni Stories</h1>
                            <hr className="w-16 h-1  bg-[#FFA523] border-0 rounded mt-[5%]"/>
                            <p className="text-xs text-black mt-[5%] leading-[22px]">We encourage alumni to share their professional journeys, offering 
                            insights into their experiences, challenges, and successes. These sessions provide a unique opportunity for current members 
                            to learn from those who have walked their path, gaining valuable advice and inspiration. By connecting past and present 
                            members, we foster a supportive community that celebrates achievements and encourages the pursuit of excellence in STEM fields.</p>
                        </div>
                    </div>
                    <img src={alum_circles2} className="w-14 h-16 absolute transform translate-y-[-630%] translate-x-[270%] z-5"/>
                    <img src={alum_shadow3} className="w-72 h-8 absolute transform translate-x-[113%] translate-y-[50%] z-0"/>
                </div>
                <div className="w-[46%] h-full relative">
                    <img src={rod} className="w-[500px] h-[54%] mt-[17%] rounded-bl-[40px] rounded-tr-[40px] z-20 relative"/>
                    <img src={alum_circles3} className="w-28 h-28 absolute transform translate-x-[370%] translate-y-[-75%] z-10"/>
                    <img src={alum_circles4} className="w-8 h-8 absolute transform translate-x-[1580%] translate-y-[-430%] z-10 "/>
                    <img src={alum_vector2} className="w-[80%] h-[130%] absolute transform translate-x-[25%] translate-y-[-53%] z-5 "/>
                </div>
            </div>

            <div className="w-full h-[100px] bg-[#fff5eb]">

            </div>

            {/* connect */}
            <div className="bg-[#fff5eb] w-full flex flex-col items-center justify-start">
                <div style={{ 
                         backgroundColor: '#fff5eb', 
                         backgroundImage: `url(${alum_picnic2})`, 
                         backgroundBlendMode: 'overlay',  
                    }} 
                    className="w-full h-[752px] bg-cover bg-center flex items-center justify-center"
                    >
                    <div className="w-[42%] h-[300px] bg-white flex flex-col justify-start items-center px-12 py-10 rounded-tr-3xl rounded-bl-3xl">
                        <h1 className="font-[700] text-lg text-[#FFA523] tracking-[.1em]">INTERESTED?</h1>
                        <h2 className="font-[600] text-4xl mt-3 text-[#FFA523]">Stay connected to learn more.</h2>
                        <div className="w-[60%] h-1/3 flex flex-row mt-12">
                        <a href="mailto:fusion.uci.networking@gmail.com">
                            <img src={alum_email}/>
                        </a>
                        <a href="https://www.facebook.com/share/g/wjwN8JRRRo87pBLV/" className="ml-9">
                            <img src={alum_facebook}/>
                        </a>
                        <a href="https://www.linkedin.com/in/fusionatuci/" className="ml-9">
                            <img src={alum_linkedin}/>
                        </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default AlumniPage;

            {/* 
alum_facebook
alum_linkedin 
alum_email
         */}


