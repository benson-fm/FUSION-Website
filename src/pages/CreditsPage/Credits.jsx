import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import OurFusiteTeam from "./OurFusiteTeam";

const Credits = () => {
    return (
        <>
            <div className="overflow-x-hidden">
                <Navbar title="FUSITE TEAM" subtitle="Credits"/>
                <OurFusiteTeam></OurFusiteTeam>
            </div>
            <Footer />
        </>

    );
}

export default Credits;