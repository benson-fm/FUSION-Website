import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer";
import FIPBackground from "../../../images/FIPBackground.png";
import TheFIPProject from "./TheFIPProject";

const FIPPage = () => {
    return (
        <>
            <div className="overflow-x-hidden">
                <Navbar bg={FIPBackground} title="COMPUTER SCIENCE" subtitle="PROJECTS"/>
                <TheFIPProject></TheFIPProject>
                <Footer />
            </div>
        </>

    );
}

export default FIPPage;