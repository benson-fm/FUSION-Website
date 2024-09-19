import culture from "./imageCarousel/culture.png";
import academics from "./imageCarousel/academics.png";
import social from "./imageCarousel/social.png";
import professional from "./imageCarousel/professional.png";
import science from "./imageCarousel/science.png";
import cultureIcon from "./icons/culture.svg";
import academicsIcon from "./icons/academics.svg";
import professionalIcon from "./icons/professional.svg";
import scienceIcon from "./icons/science.svg";
import socialIcon from "./icons/social.svg";

export default function AboutUsImages() {
    return (
        <div className="flex flex-row">
        <div className="carousel basis-1/2">
          <div id="item1" className="carousel-item w-full">
            <img src={culture} className="w-full h-auto" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src={academics} className="w-full h-auto" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src={social} className="w-full h-auto" />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img src={professional} className="w-full h-auto" />
          </div>
          <div id="item5" className="carousel-item w-full">
            <img src={science} className="w-full h-auto" />
          </div>
        </div>
        <div className="flex flex-col basis-1/2 text-white">
          <a
            href="#item1"
            className="basis-1/5 bg-[#3C3C3C] hover:bg-[#2f2f2f]"
          >
            <div className="flex flex-col gap-4 w-full p-10">
              <div className="flex flex-row gap-4 items-center">
                <img src={cultureIcon} className="h-auto max-w-full" />
                <p className="text-white text-2xl tracking-widest">CULTURE</p>
              </div>
              <p className="w-3/4">
                As UC Irvine`&apos;`s sole Filipino-led science and engineering
                organization, we deeply value Filipino traditions and culture,
                incorporating them into various events, including our weekly,
                general meetings.
              </p>
            </div>
          </a>
          <a
            href="#item2"
            className="basis-1/5 bg-[#3C3C3C] hover:bg-[#2f2f2f]"
          >
            <div className="flex flex-col gap-4 w-full p-10">
              <div className="flex flex-row gap-4 items-center">
                <img src={academicsIcon} className="h-auto max-w-full" />
                <p className="text-white text-2xl tracking-widest">ACADEMICS</p>
              </div>
              <p className="w-3/4">
                Being a STEM-based organization, we ensure our members focus on
                their academic careers by hosting study hours throughout the
                week and offering academic resources.
              </p>
            </div>
          </a>
          <a
            href="#item3"
            className="basis-1/5 bg-[#3C3C3C] hover:bg-[#2f2f2f]"
          >
            <div className="flex flex-col gap-4 w-full p-10">
              <div className="flex flex-row gap-4 items-center">
                <img src={socialIcon} className="h-auto max-w-full" />
                <p className="text-white text-2xl tracking-widest">SOCIAL SUPPORT</p>
              </div>
              <p className="w-3/4">
                Each week, we host general meetings where people from all walks
                of life can socialize and bond through FUSION. Our diverse
                internal programs ensure that all members can find a niche they
                enjoy and feel included.
              </p>
            </div>
          </a>
          <a
            href="#item4"
            className="basis-1/5 bg-[#3C3C3C] hover:bg-[#2f2f2f]"
          >
            <div className="flex flex-col gap-4 w-full p-10">
              <div className="flex flex-row gap-4 items-center">
                <img src={professionalIcon} className="h-auto max-w-full" />
                <p className="text-white text-2xl tracking-widest">PROFESSIONALISM</p>
              </div>
              <p className="w-3/4">
                We prepare our members for a successful future by hosting
                workshops that provide networking opportunities, teach soft and
                hard skills, and help them successfully secure internships or
                jobs.
              </p>
            </div>
          </a>
          <a
            href="#item5"
            className="basis-1/5 bg-[#3C3C3C] hover:bg-[#2f2f2f]"
          >
            <div className="flex flex-col gap-4 w-full p-10">
              <div className="flex flex-row gap-4 items-center">
                <img src={scienceIcon} className="h-auto max-w-full" />
                <p className="text-white text-2xl tracking-widest">SCIENCE & ENGINEERING</p>
              </div>
              <p className="w-3/4">
                Our two annual programs, FEP and FIP, enable engineers and
                scientists to sharpen their hard skills, practice teamwork, and
                present a final product at FUSIONCON, our yearly competition.
              </p>
            </div>
          </a>
        </div>
      </div>
    )
}