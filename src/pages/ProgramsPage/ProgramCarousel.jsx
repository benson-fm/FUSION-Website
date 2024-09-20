import CarouselItem from "./CarouselItem";
import PropTypes from "prop-types";

const ProgramCarousel = ({Programs}) => {
    let programList = [];
    let size = Programs.length;

    Programs.forEach((program, index) => {
        programList.push(
            <div id={"slide" + index} className="carousel-item relative w-full">
                <CarouselItem
                bg = {program.bg}
                title= {program.title}
                description={program.description}
                link = {program.link}
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between text-4xl text-white">
                    <a href={"#slide" + ((((index-1) % size) + size) % size)}>❮</a>
                    <a href={"#slide" + ((((index+1) % size) + size) % size)}>❯</a>
                </div>
            </div>
        )
    });
    return(
        <div className="carousel w-full h-dvh">
            {programList}
        </div>
    );
}

ProgramCarousel.propTypes = {
    Programs: PropTypes.array
};

export default ProgramCarousel;