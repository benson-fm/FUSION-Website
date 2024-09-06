import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer";
import FEPBackground from "../../../images/FEPBackground.png";
import TheFEPProject from "./TheFEPProject";
import OurProcess from "./OurProcess";
import DevelopmentProcess from "./DevelopmentProcess";
import OurCollaborators from "./OurCollaborators";

const FEPPage = () => {
    return (
        <>
            <div className="overflow-x-hidden">
                <Navbar bg={FEPBackground} title="ENGINEERING" subtitle="PROJECTS"/>
                <TheFEPProject></TheFEPProject>
                <OurProcess></OurProcess>
                <DevelopmentProcess></DevelopmentProcess>
                <OurCollaborators></OurCollaborators>
                <Footer />
            </div>
        </>

    );
}

export default FEPPage;