import Navbar from "../../components/Navbar";
import MainBg from "../../images/AboutUs/AboutUsMain.png";
import Footer from "../../components/Footer";
import AboutUsDesc from "./AboutUsDesc";
import AboutUsValueIntro from "./AboutUsValueIntro";
import AboutUsImages from "./AboutUsImages";
import pinoyR from "./icons/pinoyR.svg"

export default function AboutUsNew() {
  return (
    <>
      <Navbar
        bg={MainBg}
        title={"ABOUT US"}
        subtitle={"OUR HISTORY"}
        homeNav={false}
      />
      <AboutUsDesc />
      <AboutUsValueIntro />
      <AboutUsImages />
      <div className="relative bg-[#F4F4F4]">
        <div className="flex flex-row h-dvh">

        </div>
        <img src={pinoyR} className="absolute max-w-full h-auto right-0 top-0"/>
      </div>
      <Footer />
    </>
  );
}

export function ImgButton() {
  return (
    <div>
      <p>Hello</p>
    </div>
  );
}
