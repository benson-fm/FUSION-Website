import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import OurFusiteTeam from "./OurFusiteTeam";
import Designers from "./Designers";
import Developers from "./Developers";
import CreditsBackground from "../../images/CreditsBackground.jpg";

const Credits = () => {
    return (
        <>
            <div className="overflow-x-hidden">
                <Navbar bg={CreditsBackground} title="FUSITE TEAM" subtitle="Credits"/>
                <OurFusiteTeam></OurFusiteTeam>
                <Designers> </Designers>
                <Developers></Developers>
            </div>
            <Footer />
        </>

    );
}

export default Credits;