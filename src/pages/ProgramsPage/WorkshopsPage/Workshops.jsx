import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import WorkshopsBackground from "../../../images/WorkshopsBackground.png";
import JoinWorkshops from "./JoinWorkshops.jsx";
import CheckOut from "./CheckOut.jsx";

const Workshops = () => {
    return(
        <>
        <Navbar title="WORKSHOPS" subtitle="PROGRAMS" bg={WorkshopsBackground}/>
        <JoinWorkshops></JoinWorkshops>
        <CheckOut></CheckOut>
        <Footer></Footer>
        </>

    )
}

export default Workshops