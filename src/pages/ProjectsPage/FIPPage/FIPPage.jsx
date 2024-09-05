import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer";
import FIPBackground from "../../../images/FIPBackground.png";
import TheFIPProject from "./TheFIPProject";
import OurProcess from "./OurProcess";
import DevelopmentProcess from "./DevelopmentProcess";
const FIPPage = () => {
    return (
        <>
            <div className="overflow-x-hidden">
                <Navbar bg={FIPBackground} title="COMPUTER SCIENCE" subtitle="PROJECTS"/>
                <TheFIPProject></TheFIPProject>
                <OurProcess></OurProcess>
                <DevelopmentProcess></DevelopmentProcess>
                <Footer />
            </div>
        </>

    );
}

export default FIPPage;