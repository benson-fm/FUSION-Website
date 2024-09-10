import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer";
import FIPBackground from "../../../images/FIPBackground.png";
import TheFIPProject from "./TheFIPProject";
import OurProcess from "./OurProcess";
import DevelopmentProcess from "./DevelopmentProcess";
import OurCollaborators from "./OurCollaborators";
const FIPPage = () => {
    return (
        <>
            <div className="overflow-x-hidden">
                <Navbar bg={FIPBackground} title="COMPUTER SCIENCE" subtitle="PROJECTS"/>
                <TheFIPProject></TheFIPProject>
                <OurProcess></OurProcess>
                <DevelopmentProcess></DevelopmentProcess>
                <OurCollaborators></OurCollaborators>
                <Footer />
            </div>
        </>

    );
}

export default FIPPage;