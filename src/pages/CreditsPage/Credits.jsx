import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import OurFusiteTeam from "./OurFusiteTeam";
import Designers from "./Designers";
import Developers from "./Developers";
const Credits = () => {
    return (
        <>
            <div className="overflow-x-hidden">
                <Navbar title="FUSITE TEAM" subtitle="Credits"/>
                <OurFusiteTeam></OurFusiteTeam>
                <Designers> </Designers>
                <Developers></Developers>
            </div>
            <Footer />
        </>

    );
}

export default Credits;