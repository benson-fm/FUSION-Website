import PatternTL from "../../images/AboutUs/FrameTL_AU.png";
import PatternBR from "../../images/AboutUs/FrameBR_AU.png";
import PatternBox from "../../images/AboutUs/Box_AU.png";
import FCPhoto from "../../images/AboutUs/Pillars_AU.png";

export default function AboutUsValueIntro() {
    return (
        <div className="relative flex flex-row w-auto h-[657px] bg-white justify-center items-center ">
        <img
          src={PatternTL}
          className="absolute left-0 top-0 z-10 max-h-full"
        />
        <img
          src={PatternBR}
          className="absolute right-0 bottom-0 z-20 max-h-full"
        />
        <img
          src={PatternBox}
          className="absolute right-0 z-10 max-h-full object-cover"
        />
        <div className="relative flex flex-row gap-28 justify-center z-20">
          <div className="flex flex-col text-left w-1/3 text-[48px]">
          <div className="pb-10">
            <p className="text-[#0F0A00] font-bold">What we value -</p>
            <p className="text-[#FFA523] font-bold">Our Pillars</p>
            </div>
            <p className="text-[#3C3C3C] text-[16px]">
              At FUSION, we pride ourselves on upholding our 5 pillars that
              holistically shape each of our members. As fellow undergraduate
              students, we understand that college is about finding balance
              between work, school, and social life. FUSION offers various
              programs and events that cater to one or more of the following
              pillars..
            </p>
          </div>
          <div>
            <img src={FCPhoto} className="h-96"></img>
          </div>
        </div>
      </div>
    )
}