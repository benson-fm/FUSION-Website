import React from 'react';
import Footer from '../components/Footer';
import placeholderPic from '../assets/placeholderPic.png';
import studyHoursBackground from '../assets/StudyHoursBackground.png';
import studyHoursBackground2 from '../assets/StudyHoursBackground2.png';
import studyHoursSection1 from '../assets/StudyHoursSection1.png';
import studyHoursSection2 from '../assets/StudyHoursSection2.png';
import studyHoursSection3 from '../assets/StudyHoursSection3.png';
import studyHoursSection1Image from '../assets/Section1Image.png';
import studyHoursSection2Image from '../assets/Section2Image.png';
import studyHoursSection3Image from '../assets/Section3Image.png';
import StudyHoursTextWhiteBackground from '../assets/StudyHoursTextWhiteBackground.png'
import StudyHoursTextGreyBackground from '../assets/StudyHoursTextGreyBackground.png'
import Navbar from "../components/Navbar";

const StudyHours = () => {
    return (
        <>
            <div className="min-h-screen bg-white">
                <main>
                <Navbar title="STUDY HOURS" subtitle="PROGRAMS" bg={studyHoursBackground} />

                    <section className="text-center py-24">
                        <h2 className="text-4xl font-bold mb-4 text-black">
                            Empower Your <span className="text-[#FFA523]">Learning</span>
                        </h2>
                        <div className="h-1 w-32 bg-[#FAC80A] mx-auto mb-8"></div>
                        <p className="max-w-2xl mx-auto text-gray-600">
                            Join us for FUSION Study Hours, an ideal space for members to focus, collaborate, and make progress on their work or studies. Workshops are also held during Study Hours to enhance your skills and provide guidance on any struggles you may have. Whether you are aiming to finish an important project, prepare for an exam, or simply catch up on assignments, our supportive environment is designed to help you stay on track!
                        </p>
                    </section>



                    <img src={studyHoursBackground2} alt="Placeholder" className="mx-auto" />

                    <section>
                        <div className="grid grid-cols-1">
                            <div className="relative w-full h-[550px]">
                                <div className="absolute top-0 bottom-0 left-0 right-0 bg-cover bg-center" style={{ backgroundImage: `url(${studyHoursSection1})` }}></div>
                                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center p-8 relative z-10 bg-opacity-90 h-full">
                                    <div className="relative w-full md:mr-6 text-left order-2 md:order-1">
                                        <div className="absolute inset-0 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${StudyHoursTextWhiteBackground})` }}></div>
                                        <div className="relative p-10 z-10">
                                            <h3 className="text-[#FFA523] font-bold tracking-wide mb-2">
                                                INCENTIVIZE &gt;&gt;
                                            </h3>
                                            <h2 className="text-2xl font-bold text-black mb-2">
                                                Earn Big with Study Hours
                                            </h2>
                                            <div className="h-1 w-16 bg-[#FFA523] mb-2"></div>
                                            <p className="text-gray-700">
                                                Our Loyalty Program rewards members for their active participation and engagement in Study Hours. As members attend each Study Hours and contribute to our community, they collect stamps on their loyalty cards. These stamps can be redeemed for fun prizes like stickers, keychains, and more. Join us and start earning rewards while making the most of your FUSION experience!
                                            </p>
                                        </div>
                                    </div>
                                    <img src={studyHoursSection1Image} alt="Placeholder" className="w-full md:w-1/2 object-cover mb-4 md:mb-0 order-1 md:order-2" />
                                </div>
                            </div>

                            <div className="relative w-full h-[550px]">
                                <div className="absolute top-0 bottom-0 left-0 right-0 bg-cover bg-center" style={{ backgroundImage: `url(${studyHoursSection2})` }}></div>
                                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center p-8 relative z-10 bg-opacity-90 h-full">
                                    <img src={studyHoursSection2Image} alt="Placeholder" className="w-full md:w-1/2 object-cover mb-4 md:mb-0 order-1" />
                                    <div className="relative w-full md:ml-6 text-left order-2">
                                        <div className="absolute inset-0 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${StudyHoursTextGreyBackground})` }}></div>
                                        <div className="relative p-10 z-10">
                                            <h3 className="text-[#FFA523] font-bold tracking-wide mb-2">
                                                TEAM UP, LEARN MORE &gt;&gt;
                                            </h3>
                                            <h2 className="text-2xl font-bold text-black mb-2">
                                                FUSION Honor Society:<br />Recognizing Achivement
                                            </h2>
                                            <div className="h-1 w-16 bg-[#FFA523] mb-2"></div>
                                            <p className="text-gray-700">
                                                The FUSION Honor Society recognizes and celebrates the academic achievements of our graduating members. Members who graduate with a GPA above 3.0 are inducted into this prestigious society, highlighting their dedication and hard work. This not only acknowledges their past accomplishments but also inspires them to continue striving for greatness in their professional careers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative w-full h-[550px]">
                                <div className="absolute top-0 bottom-0 left-0 right-0 bg-cover bg-center" style={{ backgroundImage: `url(${studyHoursSection3})` }}></div>
                                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center p-8 relative z-10 bg-opacity-90 h-full">
                                    <div className="relative w-full md:mr-6 text-left order-2 md:order-1">
                                        <div className="absolute inset-0 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${StudyHoursTextWhiteBackground})` }}></div>
                                        <div className="relative p-10 z-10">
                                            <h3 className="text-[#FFA523] font-bold tracking-wide mb-2">
                                                INCENTIVIZE &gt;&gt;
                                            </h3>
                                            <h2 className="text-2xl font-bold text-black mb-2">
                                                FUSION Study Buddies:<br />Succeed Together
                                            </h2>
                                            <div className="h-1 w-16 bg-[#FFA523] mb-2"></div>
                                            <p className="text-gray-700">
                                                This initiative encourages members to form study groups, share resources, and collaborate on coursework, enhancing their learning experience. By studying together, members not only improve their academic performance but also build strong, lasting connections. Join our Study Buddies program and experience the power of collective learning and mutual support!
                                            </p>
                                        </div>
                                    </div>
                                    <img src={studyHoursSection3Image} alt="Placeholder" className="w-full md:w-1/2 object-cover mb-4 md:mb-0 order-1 md:order-2" />
                                </div>
                            </div>
                        </div>
                    </section>


                </main>
            </div>
            <footer className="bg-[#fee270] w-full h-[250px]">
                <Footer />
            </footer>
        </>
    );
};

export default StudyHours;