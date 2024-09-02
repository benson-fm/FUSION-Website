import FUSION from "../assets/FUSIONSunGear.png";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function renderTitle(title, subtitle, homeNav) {
  if (homeNav) {
    return (
      <div className="relative justify-center content-center text-center justify-items-center space-y-12 p-24 z-50 flex-1 tracking-wide">
        <div className="text-3xl font-light">EST. 2001</div>
        <div className="text-8xl font-light">
          WELCOME TO <br />
          <span className="font-extrabold font-karla">FUSION</span>
        </div>
        {/* Not sure where to route this to yet, just useless for now */}
        <button className="bg-[#fac80a] hover:bg-yellow-500 text-black font-bold py-2 px-6 w-48 tracking-widest">
          LEARN MORE
        </button>
      </div>
    );
  } else {
    return (
      <div className="relative justify-center content-center text-center justify-items-center p-24 z-50 flex-1 tracking-wide font-karla">
        <div className="text-3xl">{subtitle}</div>
        <div className="text-9xl font-extrabold">{title}</div>
      </div>
    );
  }
}

function Navbar({ bg, title, subtitle, homeNav = false }) {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  const handleAbout = () => {
    navigate("/AboutUs");
  };
  const handleProjects = () => {
    navigate("/Projects");
  };
  const handleBoard = () => {
    navigate("/Board");
  };
  const handlePrograms = () => {
    navigate("/programs");
  };
  const handleFusionCon = () => {
    navigate("/fusioncon");
  };

  return (
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-zinc-800 opacity-60 h-dvh"></div>
      <div
        className="bg-cover p-12 text-white h-dvh flex flex-col"
        style={{ backgroundImage: `url(${bg}) ` }}
      >
        <div className="relative flex flex-row justify-between z-50 ">
          <img className="justify-self-start" src={FUSION} width={200} />
          <div className="flex justify-self-end space-x-16 text-xl">
            <button onClick={handleHome}>HOME</button>
            <button onClick={handleAbout}>ABOUT</button>
            <button onClick={handleProjects}>PROJECTS</button>
            <button onClick={handleBoard}>BOARD</button>
            <button onClick={handlePrograms}>PROGRAMS</button>
            <button onClick={handleFusionCon}>FUSIONCON</button>
          </div>
        </div>
        {renderTitle(title, subtitle, homeNav)}
      </div>
    </>
  );
}

Navbar.propTypes = {
  bg: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  homeNav: PropTypes.bool,
};

export default Navbar;
