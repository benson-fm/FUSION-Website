import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


const CarouselItem = ({bg, title, description, link}) => {
    return(
        <div
        className="relative bg-cover p-12 text-black h-[928px] w-full content-end"
        style={{ backgroundImage: `url(${bg}) `, borderTop: '32px solid #FFA523', borderBottom: '32px solid #FFA523'}}
        >
            <div className="absolute top-0 left-0 h-full w-2/5 bg-black opacity-60"></div>

            <div className="relative h-90 z-10 px-56 py-56">
                <h1 className="font-karla text-[24px] font-bold leading-[28.06px] tracking-[0.12em] text-left" style={{color: '#FFA523'}}>
                    OUR PROGRAMS
                </h1>
                <div className="font-karla text-white left-0 font-bold text-8xl mt-2">{title}</div>
                <br/>
                <div className="text-white text-left text-[20px] font-inter w-2/5">{description}</div>
                <br/>
                <button onChange={useNavigate(link)} className="bg-[#fac80a] hover:bg-yellow-500 text-black font-bold py-2 px-6 tracking-[0.12em] mt-10">
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
