import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer";
import FEPBackground from "../../../images/FEPBackground.png";
import TheFEPProject from "./TheFEPProject";
import OurProcess from "./OurProcess";
import EngineeringProcess from "./EngineeringProcess";
import OurCollaborators from "./OurCollaborators";
import PastProjects from "./OurPastProjects";

const FEPPage = () => {
    return (
        <>
            <div className="overflow-x-hidden">
                <Navbar bg={FEPBackground} title="ENGINEERING" subtitle="PROJECTS"/>
                <TheFEPProject></TheFEPProject>
                <OurProcess></OurProcess>
                <EngineeringProcess></EngineeringProcess>
                <OurCollaborators></OurCollaborators>
                <PastProjects></PastProjects>
                <Footer />
            </div>
        </>

    );
}

export default FEPPage;