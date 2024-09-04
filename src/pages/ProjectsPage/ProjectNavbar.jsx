  import FUSION from "../../assets/FUSIONSunGear.png";
  import { useNavigate } from "react-router-dom";
  import PropTypes from "prop-types";


  function renderTitle(title, subtitle, homeNav) {
    if (homeNav) {
      return (
        <div className="relative justify-center content-center text-center justify-items-center pt-[250px] z-50">
          <div className="text-2xl ">F.E.P AND F.I.P</div>
              <div className="font-[750] text-8xl">PROJECTS</div>
          </div>
      );
    } else {
      return (
        <div className=" relative justify-center content-center text-center justify-items-center space-y-12 p-24 z-50">
          <div className="text-8xl font-thin">{title}</div>
          <div className="text-2xl ">{subtitle}</div>
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
      navigate("/about");
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
    const handleFusionCon = () => {
      navigate("/fusioncon");
    };
    return (
      <>
        <div className='absolute top-0 left-0 right-0 bottom-0 z-10 bg-zinc-800 opacity-60 h-[975px]'></div>
          <div
            className="bg-cover p-12 text-white h-[975px]"
            style={{ backgroundImage: `url(${bg}) ` }}
          >
            <div className="relative flex flex-row justify-between z-50">
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
