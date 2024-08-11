import LinkedIn from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
import Discord from "../assets/discord.png";
import logo from "../assets/partialLogo.png";
import Tiktok from "../assets/tiktok.png";
import copy from "../assets/copy.png";
import mail from "../assets/mail.png";

// const handleLink = (href) => {
//   window.open(href, "_blank");
// };

const Footer = () => {
  return (
    <footer className="bg-[#0F0A00] text-white pt-16 min-h-[800px] flex flex-col justify-between min-w-full overflow-x-hidden">
      <div className="flex flex-col lg:flex-row gap-7 md:gap-12 lg:gap-14 xl:gap-16 2xl:gap-24 3xl:gap-48 pt-28 px-28 items-start max-w-full lg:text-md md:text-sm">
        <div className="flex flex-col gap-7 lg:text-md xl:text-xl tracking-[0.2em] text-[#FAC80A]">
          <p className="text-left font-medium">CONTACT US</p>
          <div className="flex flex-row max-w-full gap-2">
            <img src={mail} alt="mail" className="w-[20px] h-[20px] xl:w-[35px] xl:h-[29px]" />
            <p>fusion@uci.edu</p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col gap-7 w-14 items-center">
          <a href="https://www.instagram.com/ucifusion/" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="Instagram" className="h-[25px]" />
            </a>
            <a href="https://discord.com/invite/ucifusion" target="_blank" rel="noopener noreferrer">
              <img src={Discord} alt="Discord" className="h-[25px]" />
            </a>
            <a href="https://www.facebook.com/ucifusion" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} alt="Facebook" className="h-[25px]" />
            </a>
            <a href="https://www.linkedin.com/company/ucifusion" target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn} alt="LinkedIn" className="h-[25px]" />
            </a>
            <a href="https://www.tiktok.com/@ucifusion" target="_blank" rel="noopener noreferrer">
              <img src={Tiktok} alt="Tiktok" className="h-[25px]" />
            </a>
          </div>
          <div className="flex flex-col gap-7 w-24 text-left">
            <p className="h-[25px]">Instagram</p>
            <p className="h-[25px]">Discord</p>
            <p className="h-[25px]">Facebook</p>
            <p className="h-[25px]">LinkedIn</p>
            <p className="h-[25px]">Tiktok</p>
          </div>
        </div>
        <nav>
          <ul className="flex flex-col gap-7 text-left">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">ABOUT</a>
            </li>
            <li>
              <a href="/">MEETINGS</a>
            </li>
            <li>
              <a href="/">BOARD</a>
            </li>
            <li>
              <a href="/">PROGRAMS</a>
            </li>
            <li>
              <a href="/">FUSIONCON</a>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col space-y-6 text-left w-3/6">
          <p>JOIN OUR NEWSLETTER</p>
          <div className="flex flex-row w-full min-w-32">
            <input
              type="email"
              placeholder="Email Address"
              className="placeholder:text-black basis-2/3  h-12 bg-[#7D7D7D] rounded-bl-3xl pl-[20px] font-medium"
            />
            <button className="bg-[#FAC80A] h-12 basis-1/3 rounded-tr-3xl text-black font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="relative px-0">
        <div className="flex flex-col absolute bottom-20 left-[120px] text-left gap-4">
          <div className="flex flex-row  items-center gap-4">
            <img src={copy} alt="fusion" className="h-[24px]"/>
            <p className="text-sm text-[#7D7D7D]">
              Copyright FUSION 2024
            </p>
          </div>
          <p className="text-sm text-[#7D7D7D] z-50 text-wrap">Developed by Benson Manzano, Daniela Herrera, Noah Tizon, Arvin Limjoco, Leilani Bascos, Dommenick Lacuata, Arlaghn Cayanan, Ariel Abaincia, Ethan Santos</p>
        </div>
        <img
          src={logo}
          alt="fusion"
          className="absolute w-[300px] h-[300px] right-0 bottom-0"
        />
      </div>
    </footer>
  );
};
export default Footer;
