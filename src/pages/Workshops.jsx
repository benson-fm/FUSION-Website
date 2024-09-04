import React from 'react';
import Footer from '../components/Footer';
import placeholderPic from '../assets/placeholderPic.png';

const Workshops = () => {
    return (
        <>
            <div className="min-h-screen bg-white">
                <main>
                    <section className="relative mb-16">
                        <div className="relative text-center">
                            <img src={placeholderPic} alt="Placeholder" className="mx-auto" />
                            <div className="absolute inset-0 flex flex-col justify-center items-center">
                                <h2 className="text-7xl font-bold text-black">PROGRAMS</h2>
                                <p className="text-3xl text-black">WORKSHOPS</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16 text-center">
                        <h2 className="text-3xl font-bold mb-8 text-black">CATCHY WORKSHOP PHRASE</h2>
                        <p className="max-w-2xl mx-auto text-black">
                            Our Workshops, held during Study Hours, provide a diverse range of learning opportunities designed to boost your knowledge and skills, ensuring there is something for everyone. Learn the latest techniques and tools in engineering and programming within FEP and FIP, or simply learn more technical skills. Engage in workshops that broaden your understanding of different cultures and global perspectives, enhance your abilities in media editing on Canva, or join us on a break away from school to replenish your mental health. Discover and learn how to effectively use the many resources available for students on campus all while bonding with other FUSION general members.
                        </p>
                    </section>

                    <section className="mb-16 text-center">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="relative flex flex-col justify-center items-center h-96">
                                <img src={placeholderPic} alt="Placeholder" className="absolute inset-0 w-full h-full object-cover" />
                                <div className="relative z-10">
                                    <h3 className="text-6xl font-bold text-black">50%</h3>
                                    <p className="text-lg text-black mt-4">FOCUSED ON MENTAL HEALTH</p>
                                </div>
                            </div>
                            <div className="relative flex flex-col justify-center items-center h-96">
                                <img src={placeholderPic} alt="Placeholder" className="absolute inset-0 w-full h-full object-cover" />
                                <div className="relative z-10">
                                    <h3 className="text-6xl font-bold text-black">XX+</h3>
                                    <p className="text-lg text-black mt-4">IN ATTENDANCE</p>
                                </div>
                            </div>
                            <div className="relative flex flex-col justify-center items-center h-96">
                                <img src={placeholderPic} alt="Placeholder" className="absolute inset-0 w-full h-full object-cover" />
                                <div className="relative z-10">
                                    <h3 className="text-6xl font-bold text-black">50%</h3>
                                    <p className="text-lg text-black mt-4">FOCUSED ON PROFESSIONAL DEVELOPMENT</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="w-full flex justify-center">
                        <section className="bg-[#D9D9D9] p-8 w-full max-w-4xl">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                                <div className="md:col-span-2 space-y-8">
                                    <h3 className="text-xl font-bold text-black">WORKSHOP NAME</h3>
                                    <div className="flex space-x-4">
                                        <img src={placeholderPic} alt="Placeholder" className="w-1/3 h-24 object-cover" />
                                        <div>
                                            <h4 className="font-bold text-black">WORKSHOP NAME</h4>
                                            <p className="text-black text-sm">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-4">
                                        <img src={placeholderPic} alt="Placeholder" className="w-1/3 h-24 object-cover" />
                                        <div>
                                            <h4 className="font-bold text-black">WORKSHOP NAME</h4>
                                            <p className="text-black text-sm">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-4">
                                        <img src={placeholderPic} alt="Placeholder" className="w-1/3 h-24 object-cover" />
                                        <div>
                                            <h4 className="font-bold text-black">WORKSHOP NAME</h4>
                                            <p className="text-black text-sm">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:col-span-2 relative">
                                    <img src={placeholderPic} alt="Placeholder" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                                        <h3 className="text-4xl font-bold text-black">Workshop Name</h3>
                                        <p className="text-lg text-black">SKILL • SKILL • SKILL</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                </main>
            </div>
            <footer className="bg-[#fee270] w-full h-[250px]">
                <Footer />
            </footer>
        </>
    );
};

export default Workshops;
