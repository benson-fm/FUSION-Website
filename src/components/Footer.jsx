import LinkedIn from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
import Discord from "../assets/discord.png";
import logo from "../assets/partialLogo.png";
import Tiktok from "../assets/tiktok.png";
import copy from "../assets/copy.png";
import mail from "../assets/mail.png";

const handleLink = (href) => {
  window.open(href, "_blank");
};

const Footer = () => {
  return (
    <footer className="bg-[#0F0A00] text-white pt-16 min-h-[800px] flex flex-col justify-between w-full">
      {/* TODO: Change the gap to ensure that it fits all screens */}
      <div className="flex flex-row gap-32 pt-[115px] px-[120px] items-start max-w-full">
        <div className="flex flex-col gap-7 text-xl tracking-[0.2em] text-[#FAC80A]">
          <p className="text-left font-medium">CONTACT US</p>
          <div className="flex flex-row max-w-full gap-2">
            <img src={mail} alt="mail" className="w-[35px] h-[29px]" />
            <p>fusion@uci.edu</p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col gap-7 w-14 items-center">
            <img
              src={Instagram}
              alt="Instagram"
              className="h-[25px]"
              onClick={handleLink("https://www.instagram.com/ucifusion/")}
            />
            <img
              src={Discord}
              alt="Discord"
              className="h-[25px]"
              onClick={handleLink("https://discord.com/invite/ucifusion")}
            />
            <img
              src={Facebook}
              alt="Facebook"
              className="h-[25px]"
              onClick={handleLink("https://www.facebook.com/ucifusion")}
            />
            <img
              src={LinkedIn}
              alt="LinkedIn"
              className="h-[25px]"
              onClick={handleLink("https://www.linkedin.com/company/ucifusion")}
            />
            <img
              src={Tiktok}
              alt="Tiktok"
              className="h-[25px]"
              onClick={handleLink("https://www.tiktok.com/@ucifusion")}
            />
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
        <div className="flex flex-col space-y-6 text-left">
          <p>JOIN OUR NEWSLETTER</p>
          <div className="grid grid-cols-3 w-[500px]">
            <input
              type="email"
              placeholder="Email Address"
              className="placeholder:text-black col-span-2 h-[50px] bg-[#7D7D7D] rounded-bl-3xl pl-[20px] font-medium"
            />
            <button className="bg-[#FAC80A] h-[50px] col-span-1 rounded-tr-3xl text-black font-medium">
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
          <p className="text-sm text-[#7D7D7D]">Developed by Benson Manzano, Daniela Herrera, Noah Tizon, Arvin Limjoco, Leilani Bascos, Dommenick Lacuata, Arlaghn Cayanan, Ariel Abaincia, Ethan Santos</p>
        </div>
        <img
          src={logo}
          alt="fusion"
          className="absolute w-[500px] h-[500px] right-0 bottom-0"
        />
      </div>
    </footer>
  );
};
export default Footer;
