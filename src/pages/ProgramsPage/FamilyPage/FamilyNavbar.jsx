import FUSION from "../../../assets/FUSIONSunGear.png";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function renderTitle(title, subtitle, homeNav) {
  if (homeNav) {
    return (
      <div className="relative justify-center content-center text-center justify-items-center z-50 h-screen">
        <div className="font-karla font-[700] text-2xl leading-9 tracking-[0.12em]">PROGRAMS</div>
        <div className="font-karla font-[800] text-9xl pt-9">FAMILY</div>
      </div>
    );
  } else {
    return (
      <div className="relative justify-center content-center text-center justify-items-center space-y-12 p-24 z-50 h-screen">
        <div className="text-2xl tracking-[.25em]">{subtitle}</div>
        <div className="text-8xl font-bold tracking-[.25em]">{title}</div>
      </div>
    );
  }
}

function Navbar({ bg, title, subtitle, homeNav = false }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10"></div>
        <div
          className="bg-cover p-12 text-white relative h-[840px] flex flex-col items-center justify-center"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 z-50">
            <img className="justify-self-start" src={FUSION} width={200} alt="FUSION Logo" />
            <div className="flex justify-self-end space-x-16 text-xl">
              <button onClick={() => handleNavigation("/")}>HOME</button>
              <button onClick={() => handleNavigation("/about")}>ABOUT</button>
              <button onClick={() => handleNavigation("/meetings")}>MEETINGS</button>
              <button onClick={() => handleNavigation("/board")}>BOARD</button>
              <button onClick={() => handleNavigation("/programs")}>PROGRAMS</button>
              <button onClick={() => handleNavigation("/fusioncon")}>FUSIONCON</button>
            </div>
          </div>
          {renderTitle(title, subtitle, homeNav)}
        </div>
      </div>
    </>
  );
}

Navbar.propTypes = {
  bg: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  homeNav: PropTypes.bool,
};

export default Navbar;
