import FUSION from "../assets/FUSIONSunGear.png";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Scroll from "../lib/Scroll"
function renderTitle(title, subtitle, homeNav) {
  if (homeNav) {
    return (
      <div className="relative justify-center content-center text-center justify-items-center space-y-12 p-24 z-40 flex-1 tracking-wide">
        <div className="text-3xl font-light">EST. 2001</div>
        <div className="text-8xl font-light">
          WELCOME TO <br />
          <span className="font-extrabold font-karla">FUSION</span>
        </div>
        {/* Not sure where to route this to yet, just useless for now */}
        <Scroll targetId={'our-story-section'} duration={850}>
        <button className="bg-[#fac80a] hover:bg-yellow-500 text-black font-bold py-2 px-6 w-48 tracking-widest">
          LEARN MORE
        </button>
        </Scroll>
      </div>
    );
  } else {
    return (
      <div className="relative justify-center content-center text-center justify-items-center p-24 z-40 flex-1 tracking-wide font-karla">
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
    navigate("/aboutUs");
  };
  const handleProjects = () => {
    navigate("/projects");
  };
  const handleBoard = () => {
    navigate("/board");
  };
  const handlePrograms = () => {
    navigate("/programs");
  };
  const handleMeetings = () => {
    navigate("/meetings");
  };

  return (
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-zinc-800 opacity-60 h-dvh"></div>
      <div
        className="bg-cover p-16 text-white h-dvh flex flex-col"
        style={{ backgroundImage: `url(${bg}) ` }}
      >
        <div className="relative flex flex-row justify-between z-50 items-center">
          <img className="justify-self-start h-auto w-56" src={FUSION} />
          <div className="flex justify-self-end space-x-10 2xl:space-x-12 text-xl tracking-widest font-karla">
            <button onClick={handleHome}>HOME</button>
            <button onClick={handleAbout}>ABOUT</button>
            <button onClick={handleMeetings}>MEETINGS</button>
            <button onClick={handleBoard}>BOARD</button>
            {/* <button onClick={handlePrograms}>PROGRAMS</button> */}
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="m-1" onClick={handlePrograms}>
                PROGRAMS
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-[#0F0A0080] rounded-box z-[1] w-52 p-2 shadow"
              >

                <li>
                  <a href="/programs/internship">INTERNSHIP</a>
                </li>
                <li>
                  <a href="/programs/mentorship">MENTORSHIP</a>
                </li>
                <li>
                  <a href="/programs/family">FAMILY</a>
                </li>
                <li>
                  <a href="/programs/fundraising">FUNDRAISING</a>
                </li>
                <li>
                  <a href="/programs/alumni">ALUMNI</a>
                </li>
                <li>
                  <a href="/programs/workshops">WORKSHOPS</a>
                </li>
                <li>
                  <a href="/programs/fufit">FUSION FIT</a>
                </li>
                <li>
                  <a href="/programs/studyHours">STUDY HOURS</a>
                </li>
                <li>
                  <a href="/programs/social">SOCIAL</a>
                </li>
              </ul>
            </div>
            <button onClick={handleProjects}>PROJECTS</button>
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
