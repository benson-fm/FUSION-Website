import GrayBlock from './GrayBlock';
import OrangeWhiteBlock from './OrangeWhiteBlock';
import OurStorySection from './OurStorySection';
import JoinFusionBlock from './JoinFusionBlock';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import joinImage from '../../assets/joinbackground.png';
import bgImage from "../../assets/HomeHeroImage.png"
const Home = () => {
    return (
        <div className="home w-full mx-auto text-center overflow-x-hidden">
            <Navbar bg={bgImage} title="FUSION" subtitle="Fostering Unity and Success In Our Network" homeNav={true}/>
            {/*Our Story*/}
            <OurStorySection></OurStorySection>
            {/*Orange and White Info Block*/}
            <OrangeWhiteBlock></OrangeWhiteBlock>
            {/*Gray Info Block*/}
            <GrayBlock></GrayBlock>
            {/*Orange and White Info Block*/}
            <OrangeWhiteBlock></OrangeWhiteBlock>
            {/*Join Fusion Block*/}
            <JoinFusionBlock></JoinFusionBlock>
            <Footer />
        </div>
    );
}

export default Home;