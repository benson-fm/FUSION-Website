import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ProgramCarousel from './ProgramCarousel';
import ProgramCards from './ProgramCards';
import PersonPlaceholder from '../../assets/PersonPlaceholder.png'
import ProgramsHeader from '../../assets/ProgramsHeader.png'
import ProgramsMentorship from '../../assets/ProgramsMentorship.png'
import ProgramsInternship from '../../assets/ProgramsInternship.png'
import ProgramsWorkshops from '../../assets/ProgramsWorkshops.png'
import ProgramsFamily from '../../assets/ProgramsFamily.png'
import ProgramsSocial from '../../assets/ProgramsSocial.png'
import ProgramsFusionFit from '../../assets/ProgramsFusionFit.png'
import ProgramsFundraising from '../../assets/ProgramsFundraising.png'
import ProgramsAlumni from '../../assets/ProgramsAlumni.png'
import ProgramsStudyHours from '../../assets/ProgramsStudyHours.png'
import ProgramSeeBG from '../../assets/ProgramSeeBG.png'
import InternshipCard from '../../assets/InternshipCard.png'
import MentorshipCard from '../../assets/MentorshipCard.png'
import FamilyCard from '../../assets/FamilyCard.png'
import FundraisingCard from '../../assets/FundraisingCard.png'
import AlumniCard from '../../assets/AlumniCard.png'
import WorkshopsCard from '../../assets/WorkshopsCard.png'
import FusionFitCard from '../../assets/FusionFitCard.png'
import StudyHoursCard from '../../assets/StudyHoursCard.png'
import SocialCard from '../../assets/SocialCard.png'
import VoicesSatisfactionBG from '../../assets/VoicesSatisfactionBG.png'
import EthanTestimonial from '../../assets/EthanTestimonial.png'
import DanielaTestimonial from '../../assets/DanielaTestimonial.png'
import ProgramLeftTriangle from '../../assets/ProgramLeftTriangle.png'
import ProgramRightTriangle from '../../assets/ProgramRightTriangle.png'

const ProgramSlideInfo = [
    {title:"MENTORSHIP",
     description:"FUSION's Mentorship Program offers general members the opportunity to receive personalized peer guidance and support, encompassing academic, professional, and social aspects, from an experienced mentor.",
     link:"/mentorship",
     bg: ProgramsMentorship
    },
    {title:"INTERNSHIP",
     description:"FUSION’s internship program is an opportunity for general members to develop essential leadership skills by experiencing the workload and responsibilities of certain board positions!",
     link:"/Intership",
     bg: ProgramsInternship
    },
    {title:"FAMILY",
        description:"FUSION’s Family System is a welcoming and inclusive environment for general members to cultivate relationships, receive guidance, and foster bonds in a smaller, more approachable setting.",
        link:"/Family",
        bg: ProgramsFamily
    },
    {title:"WORKSHOPS",
        description:"Want to learn about many diverse topics? FUSION hosts a multitude of workshops for general members to attend to grow their knowledge on a wide range of subjects!",
        link:"/programs",
        bg: ProgramsWorkshops
    },
    {title:"STUDY HOURS",
        description:"Study hours are hosted twice a week for all general members to study and socialize in an academic setting in addition to FUSION’s weekly general meetings!",
        link:"/programs",
        bg: ProgramsStudyHours
    },
    {title:"SOCIAL",
        description:"To end a stressful week and start a relaxing weekend, come hang out with FUSION on Friday evenings, dance the night way in F-TEK, or simply let loose in the FUSION space.",
        link:"/Social",
        bg: ProgramsSocial
    },
    {title:"FUSIONFIT",
        description:"We here at FUSION like to make sure our members are healthy both mentally AND physically! Held weekly, join us as we host sporting events, dance, zumba, and more!",
        link:"/programs",
        bg: ProgramsFusionFit
    },
    {title:"FUNDRAISING",
        description:"The Fundraising Directors are responsible for organizing on-campus and off-campus fundraisers to raise money for FUSION’s events and programs throughout the year.",
        link:"/programs/fundraising",
        bg: ProgramsFundraising
    },
    {title:"ALUMNI",
        description:"Connect with past FUSION members and get to know the lifestyle of post-undergrad! We've been a club since 2001.",
        link:"/alumni",
        bg: ProgramsAlumni
    },
];

const ProgramCardInfo = [
    {title:"INTERNSHIP",
        backgroundImage: InternshipCard
    },
    {title:"MENTORSHIP",
        backgroundImage: MentorshipCard
    },
    {title:"FAMILY",
        backgroundImage: FamilyCard
    },
    {title:"FUNDRAISING",
        backgroundImage: FundraisingCard
    },
    {title:"ALUMNI",
        backgroundImage: AlumniCard
    },
    {title:"WORKSHOPS",
        backgroundImage: WorkshopsCard
    },
    {title:"FUSION FIT",
        backgroundImage: FusionFitCard
    },
    {title:"STUDY HOURS",
        backgroundImage: StudyHoursCard
    },
    {title:"SOCIAL",
        backgroundImage: SocialCard
    },
];

const Programs = () => {
    return(
    <>
        <Navbar title="PROGRAMS" subtitle="INTERNAL" bg={ProgramsHeader}/>

        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white">
            <div className="max-w-[1088px] w-full flex flex-col justify-center items-center gap-10">
                <h1 className="font-karla text-[24px] text-center font-bold leading-[28.06px] tracking-[0.12em]" style={{color: '#7D7D7D'}}>
                    OUR PROGRAMS
                </h1>
                <h1 className="font-karla text-black text-[48px] text-center text-4xl font-bold">
                    What <span className="font-karla" style={{ color: '#FFA523' }}>FUSION</span> has to offer
                </h1>
                <p className="text-black text-center font-inter text-base leading-7 px-16">
                    At FUSION, we offer many unique programs designed to help our members socialize and form lasting connections. Whether you're honing your athletic skills with FUSION Fit at the ARC, 
                    connecting through our Mentorship Program, or supporting our Fundraising Program with a tasty bacon-wrapped hotdog, our internal programs provide a space for everyone to find their 
                    place in the FUSION community.
                </p>   
            </div>
        </div>

        <ProgramCarousel Programs= {ProgramSlideInfo}/>


        <div className="text-center "style={{ backgroundImage: `url(${ProgramSeeBG})`, backgroundSize: 'cover', backgroundPosition: 'center 40%' }}>
 
            <div className="flex items-center justify-center mb-20">
                <div className='flex mt-96 items-center'>
                    <div className="border-t-2 w-[200px] border-[#FAC80A]"></div>
                    <div className="flex-col px-10">
                        <h1 className="font-karla text-black text-[48px] text-center text-4xl font-bold">
                            See what we have in store
                        </h1>
                        <h1 className="font-karla text-black text-[24px] text-center font-bold leading-[28.06px] tracking-[0.12em] px-4 mt-5">
                            OUR <span className="font-karla" style={{ color: '#FFA523' }}>FUSION</span> PROGRAMS
                        </h1>
                    </div>
                    <div className="border-t-2 w-[200px] border-[#FAC80A]"></div>
                </div>
            </div>

            <ProgramCards Programs={ProgramCardInfo}/>

            <div className="relative mt-96">
                <img src={VoicesSatisfactionBG} alt="Background" className="absolute inset-0 w-full h-auto object-cover" />
                <div className="relative text-left py-20 pl-20 mb-56">
                    <div className="font-karla text-white left-0 font-light text-[64px] ml-56"> 
                        VOICES OF  <span className="font-extrabold" >SATISFACTION</span> 
                    </div>

                    <div className="flex row gap-0 w-[55%] h-auto p-10 mt-10"style={{borderRadius: '50px 50px 50px 50px',backgroundColor: '#FE9600'}}>
                        <img src={EthanTestimonial} className='w-48 h-48 mr-10'/>
                        <div className="flex flex-col text-left w-full">
                            <h1 className="font-karla text-white text-[20px] text-left font-bold leading-[28.06px] tracking-[0.12em]">
                                Ethan Madjus
                            </h1>
                            <h1 className="font-karla text-white text-[14px] text-left font-bold leading-[28.06px] tracking-[0.25em]">
                                GENERAL MEMBER
                            </h1>
                            <p1 className="font-karla text-white text-[20px] text-left font-bold leading-[28.06px] tracking-[0.12em]">
                                “FUSION broke me out of my shell and I gained a community that I could study, share laughs, and grow professionally with. 
                                Even as a commuter, FUSION’s numerous programs and welcoming community provided me a rich college experience!”
                            </p1>
                        </div>
                    </div>

                    <div className="flex row gap-0 w-[55%] h-auto p-10 mt-10"style={{borderRadius: '50px 50px 50px 50px',backgroundColor: '#FE9600'}}>
                        <div className="flex flex-col text-left w-full">
                            <h1 className="font-karla text-white text-[20px] text-left font-bold leading-[28.06px] tracking-[0.12em]">
                                Daniela Herrera
                            </h1>
                            <h1 className="font-karla text-white text-[14px] text-left font-bold leading-[28.06px] tracking-[0.25em]">
                                GENERAL MEMBER
                            </h1>
                            <p1 className="font-karla text-white text-[20px] text-left font-bold leading-[28.06px] tracking-[0.12em]">
                                “Initially, I struggled to find a club that balanced professionalism and social activities. FUSION offered the best of both worlds, 
                                letting me hone my UI/UX skills through FIP while socializing every Friday. Joining FUSION is a decision I'll never regret.”
                            </p1>
                        </div>
                        <img src={DanielaTestimonial} className='w-48 h-48 ml-10'/>
                    </div>

                    <img src={ProgramLeftTriangle} className='absolute top-0 left-0 w-24 h-24 mt-5 ml-5'/>
                    <img src={ProgramRightTriangle} className='absolute bottom-0 right-0 w-48 h-48 mr-2'/>

                </div>
            </div>

        </div>

        <Footer/>
    </>
    );
}

export default Programs