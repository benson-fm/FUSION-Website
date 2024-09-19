import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import BWHD from "../../../assets/BWHD.png";
import BWHDBG from "../../../assets/BWHDBG.png";
import HeaderBG from "../../../assets/FundraisingHeader.jpg";
import Testimonial from "../../../components/Testimonial";
import TalkingIcon from "../../../assets/TalkingIcon.png";
import DollarSign1 from "../../../assets/DollarSign1.png";
import DollarSign2 from "../../../assets/DollarSign2.png";
import Hexagon1 from "../../../assets/Hexagon1.png";
import Hexagon2 from "../../../assets/Hexagon2.png";
import { Reveal } from "../../../lib/Reveal";
import Alexa from "../../../images/Alexa.png";
import Bernard from "../../../images/Bernard.png";

const Fundraising = () => {
  return (
    <>
      <Navbar title="FUNDRAISING" subtitle="PROGRAMS" bg={HeaderBG} />
      <div className="bg-white py-20 -z-50">
        <div className=" mx-72 justify-center text-center flex flex-col items-center pb-20">
          <Reveal className="flex flex-col items-center justify-center">
            <div className="font-karla font-semibold leading-[3.25rem] text-5xl pb-8 text-black">
              How do we <span className="text-[#FFA523] ">Fundraise</span>?
            </div>
            <hr className="w-48 h-1 mx-auto bg-[#FAC80A] my-10 border-0 rounded" />
            <div className="w-full flex items-center justify-center">
              <div className="pt-8 font-inter font-[500] text-[1rem] leading-[2rem] text-black w-1/2">
                Bacon-Wrapped Hot Dogs (BWHD): FUSION’s most popular on-campus
                fundraiser. Come find us on Ring Road throughout the quarter to
                buy a Bacon-Wrapped Hot Dog or stop by for good vibes!
                <br />
                <br />
                Off-Campus Fundraisers: These include fundraisers with
                off-campus restaurants such as Cha, 7Leaves, Wingstop, and
                Jollibee. Off-campus fundraisers are a great way to meet and
                hang out with members in FUSION!
              </div>
            </div>
          </Reveal>
        </div>
        <div
          className="bg-no-repeat bg-cover bg-center flex justify-center px-72"
          style={{ backgroundImage: `url(${BWHDBG})` }}
        >
          <img src={BWHD} />
        </div>
        <div className="relative bg-[#FFF5EB] py-36 z-10 text-black">
          <img className="absolute bottom-0 " src={DollarSign1} width={200} />
          <img
            className="absolute top-0 right-0"
            src={DollarSign2}
            width={200}
          />
          <img
            className="overflow-hidden absolute -bottom-96 "
            src={Hexagon1}
            width={950}
          />
          <img
            className="overflow-hidden absolute -bottom-72 right-0 "
            src={Hexagon2}
            width={1000}
          />
          <div className="relative z-20 space-y-16">
            <div className="grid justify-items-center space-y-4">
              <img src={TalkingIcon} width={96} />
              <div className="text-5xl text-center font-medium">
                A Message from Our <br />
                <span className="text-[#FFA523]">Fundraising Directors</span>
              </div>
            </div>
            <div className="space-y-4">
              <Reveal duration={1500}>
                <Testimonial
                  Name="Alexa Ancheta"
                  Quote="“Fundraisers are one of my favorite parts of FUSION. I love grabbing food and hanging out with my FUSION friends at BWHD or off-campus! If you want to get to know more people in FUSION, coming out to fundraisers is a great tactic.”"
                  Position="Fundraising Co-Director ‘24-’25"
                  Image={Alexa}
                  Mirrored={true}
                />
              </Reveal>

              <Reveal duration={1500}>
                <Testimonial
                  Name="Bernard Tillano"
                  Quote="“As Fundraising Director and an Aerospace Engineering major, I have expanded my skill set beyond engineering, learning valuable lessons in communication, scheduling, and collaboration with off-campus companies!”"
                  Position="Fundraising Co-Director ‘24-’25"
                  Image={Bernard}
                  Mirrored={false}
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Fundraising;
