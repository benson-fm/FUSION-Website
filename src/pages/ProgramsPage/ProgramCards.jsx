import ProgramCardTriangle from '../../assets/ProgramCardTriangle.png';

const ProgramCard  = ({title, backgroundImage}) => {
    return(
        <div className="relative text-white w-full h-[200px] px-8 py-8 text-center z-50"
         style={{ 
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <img src={ProgramCardTriangle} alt="Triangle" className="absolute bottom-0 left-0 w-12 h-12"
            />

            <div className="font-karla text-[24px] text-center font-bold leading-[28.06px] tracking-[0.12em] mt-24">{title}</div>
              
        </div>
    );
}

const ProgramCards = ({Programs}) => {
    let cards = []
    Programs.forEach((program, index) => {
        cards.push(
            <ProgramCard title={program.title} backgroundImage={program.backgroundImage}/>
        )
    });
    return(
        <div className="grid grid-cols-3 grid-rows-3 gap-16 py-5 px-80">
            {cards}
        </div>
    )
}

export default ProgramCards;