import Footer from "../components/Footer";
import MeetTheTeam from "../components/MeetTheTeam";
import Executive from "../components/Executive";
import Appointed from "../components/Appointed";
import Navbar from "../components/Navbar";
import BoardPic from "../assets/Board.png";

const Board = () => {
    return (
        <>
            <div className="overflow-x-hidden">
                <Navbar bg={BoardPic} title="BOARD" subtitle="'24 - '25"/>
                <MeetTheTeam />
                <Executive />
                <Appointed className='pt-[20px]'/>
            </div>
            <Footer />
        </>

    );
}

export default Board;