import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MentorshipHeader from "../images/MentorshipHeader.png"
import MentorshipInfo from '../images/MentorshipInfo.png';
import MentorshipBackground from "../images/MentorshipBackground.png"
import TestimonialQuote from "../assets/TestimonialQuote.png"
import AarielPic from "../images/AarielPic.png"
import GericPic from "../images/GericPic.png"
import MentorshipReveal from "../images/MentorshipReveal.png"
import RevealPic from "../images/RevealPic.png"
import MentorQuestion from "../images/MentorQuestion.png"

export function MentorshipPage() {
    const testimonials = [
        {
            Name: "Geric Capili",
            Quote: "“The mentorship program has provided the perfect opportunity to pass on guidance, knowledge, and support to a new FUSION member. Luckily, this experience has blossomed into one of my favorite friendships, turning a mentee into a lifelong friend.”",
            Position: "Finish Line Mentor",
            Image: GericPic,
            Mirrored: true
        },
        {
            Name: "Aariel Abaincia",
            Quote: "“My mentor has given unwavering source by helping me pass classes, navigate university life, and try food spots in Irvine.  Joining the FUSION mentorship program has definitely been one of the best decisions I’ve made.”",
            Position: "Finish Line Mentee",
            Image: AarielPic,
            Mirrored: false
        }
    ];
    return (
        <div className="bg-white">
            <Navbar title="MENTORSHIP" subtitle="PROGRAMS" bg={MentorshipHeader} />

            <section className="text-center py-36">
                <h2 className="text-4xl font-bold mb-8 text-black">
                    What is our <span className="text-[#FFA523]">Mentorship</span> Program?
                </h2>
                <div className="h-1 w-36 bg-[#FAC80A] mx-auto mb-8"></div>
                <p className="max-w-2xl mx-auto text-gray-600">
                    General members are assigned a mentor during Mentorship Reveal, based on compatibility and majors, though not limited exclusively to science and engineering disciplines. Having a mentor provides members with an experienced guide, fostering a sense of belonging throughout their college experience.
                </p>
            </section>

            <img src={MentorshipInfo} alt="Placeholder" className="mx-auto" />

            <div className="relative">
                <img src={MentorshipBackground} alt="Mentorship background" className="w-full h-auto" />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center p-10">
                    <h2 className="text-6xl py-12 text-white z-10 text-center">
                        A Word from our <br />
                        <span className="text-[#FAC80A]">Mentors/Mentees</span>
                    </h2>

                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={"flex h-80 w-3/5 mx-72 my-4 " + (testimonial.Mirrored ? "flex-row" : "flex-row-reverse")} style={{ backgroundColor: '#7D7D7D' }}>
                            <div className="basis-3 bg-[#FFA523]"></div>
                            <img className="basis-1/4 object-cover overflow-hidden h-full w-full" src={testimonial.Image} style={{ aspectRatio: '1 / 1' }} />
                            <div className="flex-col basis-3/4 p-12 space-y-4 text-white">
                                <img src={TestimonialQuote} />
                                <div className="text-lg font">{testimonial.Quote}</div>
                                <div className="text-xl font-semibold">
                                    {testimonial.Name}
                                    <div className="text-white font-light text-lg">
                                        {testimonial.Position}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>

            <div className="relative text-center" style={{ position: 'relative' }}>
                <img src={MentorshipReveal} alt="Background" className="w-full h-auto" />
                <div className="absolute inset-0 flex flex-col items-center justify-start pt-10">
                    <h1 className="text-xl font-normal text-[#7D7D7D]">MEMORIES IN FRAMES</h1>
                    <h2 className="text-3xl font-bold text-black">Mentorship Reveal</h2>
                    <img src={RevealPic} alt="Placeholder" className="w-1/2 mt-10 mb-10" />
                    <button className="bg-black text-white font-light py-2 px-6 mt-4">
                        BROWSE GALLERY &gt;
                    </button>
                </div>
            </div>

            <div className="relative text-center">
                <img src={MentorQuestion} alt="Mentorship Background" className="w-full h-auto" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
                    <h1 className="text-xl font-normal mb-8" style={{ color: '#FAC80A' }}>WANT TO BECOME A MENTOR/MENTEE?</h1>
                    <h2 className="text-4xl font-semibold text-white mb-12">
                        Apply to our FUSION <br /> Mentorship Program Below!
                    </h2>
                    <button className="bg-[#FAC80A] text-black font-semibold py-4 px-16 text-2xl">
                        APPLY HERE &gt;
                    </button>
                </div>
            </div>


            <Footer />
        </div>
    );
}