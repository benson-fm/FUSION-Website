{/*  */}
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import fufit_navbar from "../assets/fufit_navbar.png"

export function FuFit() {    
    return (
        <div className="flex flex-col">
            <Navbar title="FUSION FIT" subtitle="PROGRAMS" bg={fufit_navbar} />
            <div className="w-full h-[540px] bg-white flex justify-center items-center">
                <div className="w-[58%] h-1/2 text-center">
                    <div className="font-semibold text-5xl">
                        <span className="text-black">Embrace your</span> <span className="text-[#FFA523]">Inner Athelete</span>
                    </div>
                    <hr className="w-48 h-1 mx-auto bg-[#FAC80A] border-0 rounded my-10"/>
                    <div className="h-1/2 flex justify-center items-center">
                        <p className="text-black text-center">
                        FUSION's athletic programs aim to build a strong community, enhance physical well-being, and support mental 
                        health through a range of recreational and organized activities. By providing opportunities for exercise, we 
                        encourage our members to stay active and healthy. Our organized sports activities foster teamwork and camaraderie, 
                        while our workshops offer a supportive space for relaxation and emotional well-being. Together, these programs 
                        ensure that our members have the resources they need to thrive both physically and mentally.
                        </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default FuFit;
