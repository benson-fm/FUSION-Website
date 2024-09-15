import VibrantCommunity from './VibrantCommunity';
import EngineeringExcellence from './EngineeringExcellence';
import TomorrowsLeaders from "./TomorrowsLeaders";
import OurStorySection from './OurStorySection';
import JoinFusionBlock from './JoinFusionBlock';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import bgImage from "../../assets/HomeHeroImage.png"

const Home = () => {
    return (
        <div className="home w-full mx-auto text-center overflow-x-hidden">
            <Navbar id='navbar-home-section' bg={bgImage} title="FUSION" subtitle="Fostering Unity and Success In Our Network" homeNav={true}/>
            {/*Our Story*/}
            <OurStorySection></OurStorySection>
            {/*Orange and White Info Block*/}
            <EngineeringExcellence></EngineeringExcellence>
            {/*Gray Info Block*/}
            <VibrantCommunity></VibrantCommunity>
            {/*Orange and White Info Block*/}
            <TomorrowsLeaders></TomorrowsLeaders>
            {/*Join Fusion Block*/}
            <JoinFusionBlock></JoinFusionBlock>
            <Footer />
        </div>
    );
}

export default Home;