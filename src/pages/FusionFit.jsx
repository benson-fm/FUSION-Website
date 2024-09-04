import React from 'react';
import Footer from '../components/Footer';
import placeholderPic from '../assets/placeholderPic.png';

const FusionFit = () => {
    return (
        <>
            <div className="min-h-screen bg-white">
                <main>
                    <section className="relative mb-16">
                        <div className="relative text-center">
                            <img src={placeholderPic} alt="Placeholder" className="mx-auto" />
                            <div className="absolute inset-0 flex flex-col justify-center items-center">
                                <h2 className="text-7xl font-bold text-black">PROGRAMS</h2>
                                <p className="text-3xl text-black">FUSION FIT</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16 text-center">
                        <h2 className="text-3xl font-bold mb-8 text-black">ATHLETICS PROGRAMS</h2>
                        <p className="max-w-2xl mx-auto text-black">
                            FUSION's athletic programs aim to build a strong community, enhance physical well-being, and support mental health through a range of recreational and organized activities. By providing opportunities for exercise, we encourage our members to stay active and healthy. Our organized sports activities foster teamwork and camaraderie, while our workshops offer a supportive space for relaxation and emotional well-being. Together, these programs ensure that our members have the resources they need to thrive both physically and mentally.
                        </p>
                    </section>

                    <section className="mb-16">
                        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-16">
                            <div className="flex flex-col md:flex-row items-center">
                                <img src={placeholderPic} alt="Placeholder" className="w-full md:w-1/2 object-cover mb-4 md:mb-0" />
                                <div className="md:ml-6 text-left">
                                    <p className="text-black font-bold text-lg tracking-wider">
                                        FUSION FIT
                                    </p>
                                    <p className="text-black mt-2">
                                        Our recreational exercise program provides general members an outlet to stay active and healthy. Participate in a variety of activities designed to suit all fitness levels, including basketball, volleyball, soccer, flag football, ultimate frisbee, pickleball, kickball, yoga, group workouts, and many more. Whether you are looking to work on your fitness goals or simply want to stay active, FUSION Fits have something to offer for everyone at all levels. Join us to stay active, connect with fellow members, and make fitness an enjoyable part of your routine!
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:mr-6 text-left order-2 md:order-1">
                                    <p className="text-black font-bold text-lg tracking-wider">
                                        FUSION FEVER
                                    </p>
                                    <p className="text-black mt-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>

                                </div>
                                <img src={placeholderPic} alt="Placeholder" className="w-full md:w-1/2 object-cover mb-4 md:mb-0 order-1 md:order-2" />
                            </div>

                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-8 text-black">WORKSHOPS</h2>
                        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-16">
                            <div className="flex flex-col md:flex-row items-center">
                                <img src={placeholderPic} alt="Placeholder" className="w-full md:w-1/2 object-cover mb-4 md:mb-0" />
                                <div className="md:ml-6 text-left">
                                    <p className="text-black font-bold text-lg tracking-wider">
                                        DE-STRESS
                                    </p>
                                    <p className="text-black mt-2">
                                        Our de-stress program is designed to support the overall well-being of our general members. Participate in relaxing and creative activities such as group painting, meditation, origami, slime-making, and other arts and crafts. These workshops offer a perfect opportunity to unwind, express creativity, find your outlet, and find balance amidst daily stresses. Join us to relax, connect with fellow members, and enhance your mental and emotional well-being!
                                    </p>

                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:mr-6 text-left order-2 md:order-1">
                                    <p className="text-black font-bold text-lg tracking-wider">
                                        NUTRITION
                                    </p>
                                    <p className="text-black mt-2">
                                        Our Nutrition Program empowers members to achieve their physical goals while fostering a healthy relationship with food. Learn how to maintain a balanced diet on a budget, cook Filipino cuisine with your friends, and explore the essential food groups needed for a healthy meal. Join us to connect with your friends and Filipino culture through food and better your overall nutrition.
                                    </p>

                                </div>
                                <img src={placeholderPic} alt="Placeholder" className="w-full md:w-1/2 object-cover mb-4 md:mb-0 order-1 md:order-2" />
                            </div>

                        </div>
                    </section>
                    <section className="mb-16">
                        <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
                            {/* Volleyball */}
                            <div className="col-span-2 flex flex-col items-center">
                                <img src={placeholderPic} alt="Volleyball" className="w-full object-cover" />
                                <p className="text-black font-bold mt-2">VOLLEYBALL</p>
                            </div>
                            {/* Dodge Ball */}
                            <div className="col-span-2 flex flex-col items-center">
                                <img src={placeholderPic} alt="Dodge Ball" className="w-full object-cover" />
                                <p className="text-black font-bold mt-2">DODGE BALL</p>
                            </div>
                            {/* Basketball */}
                            <div className="col-span-2 flex flex-col items-center">
                                <img src={placeholderPic} alt="Basketball" className="w-full object-cover" />
                                <p className="text-black font-bold mt-2">BASKETBALL</p>
                            </div>
                            {/* Football */}
                            <div className="col-span-2 flex flex-col items-center">
                                <img src={placeholderPic} alt="Football" className="w-full object-cover" />
                                <p className="text-black font-bold mt-2">FOOTBALL</p>
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

export default FusionFit;
