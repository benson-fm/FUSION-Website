import TestimonialQuote from "../assets/TestimonialQuote.png"

const Testimonial = ({Name, Position, Quote, Image, Mirrored = false, Color = "#FFFFFF" }) => {
        return(
            <div className={"flex h-80 w-2/3 mx-72 " + (Mirrored ? "flex-row " : "flex-row-reverse ") + "bg-[" + Color + "]"}>
                <div className="basis-3 bg-[#FFA523]"></div>
                <img className="basis-1/4 object-cover overflow-hidden" src={Image}/>
                <div className="flex-col basis-3/4 p-12 space-y-4">
                    <img src={TestimonialQuote}/>
                    <div className="text-[1rem] font-medium font-karla leading-6 text-black">{Quote}</div>
                    <div className="text-xl font-semibold text-black">
                        {Name}
                        <div className="text-slate-400 font-normal text-l">
                            {Position}
                        </div>
                    </div>
                </div>
            </div>
        );
    
};

export default Testimonial;