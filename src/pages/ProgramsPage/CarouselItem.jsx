import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


const CarouselItem = ({bg, title, description, link}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log(link)
        navigate(link); // Replace with the actual link you want to navigate to
    };

    return(
        <div
        className="relative bg-cover px-12 text-black w-full bg-no-repeat"
        style={{ backgroundImage: `url(${bg}) `, borderTop: '32px solid #FFA523', borderBottom: '32px solid #FFA523'}}
        >
            <div className="absolute top-0 left-0 h-full w-3/5 bg-black opacity-60"></div>

            <div className="relative h-90 z-10 px-20 py-20">
                <h1 className="font-karla text-[24px] font-bold leading-[28.06px] tracking-[0.12em] text-left" style={{color: '#FFA523'}}>
                    OUR PROGRAMS
                </h1>
                <div className="font-karla text-white left-0 font-bold text-8xl mt-2">{title}</div>
                <br/>
                <div className="text-white text-left text-[20px] font-inter w-2/5">{description}</div>
                <br/>
                <button onClick={handleClick} className="bg-[#fac80a] hover:bg-yellow-500 text-black font-bold py-2 px-6 tracking-[0.12em] mt-10">
                    LEARN MORE
                </button>           
            </div>
        </div>
    );
};


CarouselItem.propTypes = {
    bg: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string
};


export default CarouselItem;
