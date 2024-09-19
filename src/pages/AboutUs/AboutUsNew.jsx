import Navbar from "../../components/Navbar";
import MainBg from "../../images/AboutUs/AboutUsMain.png";
import Footer from "../../components/Footer";
import AboutUsDesc from "./AboutUsDesc";
import AboutUsValueIntro from "./AboutUsValueIntro";
import AboutUsImages from "./AboutUsImages";
import pinoyR from "./icons/pinoyR.svg";
import pinoyL from "./icons/pinoyL.svg";
import Kaba from "./imageCarousel/Kaba.png"
import Pass from "./imageCarousel/Pass.png"
import Puso from "./imageCarousel/Puso.png"

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
      <div className="relative bg-[#F4F4F4] text-black">
       <div className="flex flex-col items-center justify-center z-50">
          <div className="flex flex-col h-dvh justify-center items-center gap-20">
          <div className="w-1/2 flex flex-col items-center justify-center gap-10">
            <p className="text-xl font-bold">ALYANSA</p>
            <p className="text-4xl font-bold text-center">
              An education community brimming with <span className="text-[#FFA523]">Filipino culture.</span>
            </p>
            <p className="text-center">
              Alyansa (Alliance) is a vibrant collective of Filipinx culture
              enthusiasts. As one of the diverse clubs under the UCI Filipinx
              umbrella organization, we invite you to explore our sister
              organizations that we frequently collaborate with.
            </p>
          </div>
            <div className="flex flex-row items-center justify-center gap-20 z-50">
              <div className="flex flex-col items-center justify-evenly w-1/6 h-[400px] bg-white rounded-tl-3xl">
                  <img src={Puso} />
                  <p className="text-3xl font-bold">PUSO</p>
                  <p className="text-center px-5">The Pilipinx Pre-health Undergraduate Student Organization (PUSO) focuses on pre-health and pre-medical career paths for the Filipinx community.</p>
                  <div className="bg-[#FFA523] w-1/2 h-10 items-center justify-center flex">
                   <a href="https://www.instagram.com/pusoatuci/"> <p className="text-center text-white font-medium">LEARN MORE</p></a>
                  </div>
              </div>
              <div className="flex flex-col items-center justify-evenly w-1/6  h-[400px] bg-white">
                  <img src={Kaba} />
                  <p className="text-3xl font-bold">KABA</p>
                  <p className="text-center px-5">Kababayan (KABA) is one of the largest collegiate Pilipinx-American organizations in California and nationwide, focusing on Filipino culture.</p>
                  <div className="bg-[#FFA523] w-1/2 h-10 items-center justify-center flex">
                    <a href="https://www.instagram.com/kabaatuci/"><p className="text-center text-white font-medium">LEARN MORE</p></a>
                  </div>
              </div>
              <div className="flex flex-col items-center justify-evenly w-1/6  h-[400px] bg-white rounded-br-3xl">
                  <img src={Pass} />
                  <p className="text-3xl font-bold">Pass</p>
                  <p className="text-center px-5">Pilipinx-Americans in Social Studies (PASS) is an organization that focuses on fields relating to law, humanities, social sciences, and social ecology.</p>
                  <div className="bg-[#FFA523] w-1/2 h-10 items-center justify-center flex">
                    <a href="https://www.instagram.com/passatuci/"><p className="text-center text-white font-medium">LEARN MORE</p></a>
                  </div>
              </div>
            </div>
          </div>
       </div>
        <img
          src={pinoyR}
          className="absolute max-w-full h-auto right-0 top-0 z-10"
        />
        <img
          src={pinoyL}
          className="absolute max-w-full h-auto left-0 bottom-0 z-10"
        />
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
