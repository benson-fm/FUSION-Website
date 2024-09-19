import FEP_Pic from '../images/FEP_Pic.png';
import lead from '../images/lead.png';
import mech from '../images/mech.png';
import software from '../images/software.png';
import dev from '../images/dev.png';
import design from '../images/design.png';
import red_dot from '../images/red_dot.png';
import quotation from '../images/quotation.png';


{/* 
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Karla:wght@400;700&display=swap');

.font-inter {
    font-family: 'Inter', sans-serif;
}

.font-karla {
    font-family: 'Karla', sans-serif;
}

*/}

const Project = () => {
    return (
        <div className="flex flex-col">
            {/* Yellow section */}
            
            
            {/* Voices of Success */}
            <section className="bg-white w-full h-[824px] flex flex-col items-center justify-start">
                <div className="flex flex-col items-center justify-start">
                    <div className="w-[356px] h-[47px] mt-[115px] text-center">
                        <h1 className="text-[40px] font-karla font-bold">
                            <span className="text-black">Voices of </span>
                            <span className="text-yellow-500">Success</span>
                        </h1>                        
                    </div>

                    <div className="w-[482px] h-[64px] mt-[20px] text-center">
                        <p className="text-black">Still not convinced? Read the reviews of the various engineers, 
                        <br></br>
                        scientists, and designers who participated in our projects! </p>
                    </div>

                    <div className="flex flex-row w-[1307px] h-[364px] mt-[63px] space-x-[55px]">
                        <div className="bg-white w-[399px] h-[364px] rounded-tr-[64px] rounded-bl-[64px]">
                            <div className="ml-[42px]">
                                <img src={quotation} className="w-[70px] h-[47px] mt-[35px] object-cover"/>
                                <p className="w-[314px] h-[140px] text-black text-[14px] mt-[19px]">“When I started at 
                                UC Irvine, I lacked a strong cultural identity and knowledge of my field. Joining FEP 
                                boosted my confidence in my cultural identity and inspired me to learn, surrounded by 
                                people with similar experiences. If you seek growth, immerse yourself in the FEP community!”</p>
                                <div className="flex flex-row w-[314px] h-[55px] space-x-[102px] mt-[26px]">
                                    <img src={red_dot} className="w-[55px] h-[55px]  object-cover"/>
                                    <div className="w-[157px] h-[42px] mt-[6.5px] text-black text-right">
                                        <p>FirstName LastName</p>
                                        <p>Position</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white w-[399px] h-[364px] rounded-tr-[64px] rounded-bl-[64px]">
                            <div className="ml-[42px]">
                                <img src={quotation} className="w-[70px] h-[47px] mt-[35px] object-cover"/>
                                <p className="w-[314px] h-[129px] text-black text-[19px] mt-[19px]">“Lorem ipsum 
                                dolor sit amet, consectetur asim adipiscing elit, sed do eiusmod tempor ut labore 
                                et dolore magna.”</p>
                                <div className="flex flex-row w-[314px] h-[55px] space-x-[102px] mt-[37px]">
                                    <img src={red_dot} className="w-[55px] h-[55px]  object-cover"/>
                                    <div className="w-[157px] h-[42px] mt-[6.5px] text-black text-right">
                                        <p>FirstName LastName</p>
                                        <p>Position</p>
                                    </div>
                                </div>                                
                            </div>
                        </div>

                        <div className="bg-white w-[399px] h-[364px] rounded-tr-[64px] rounded-bl-[64px]">
                            <div className="ml-[42px]">
                                <img src={quotation} className="w-[70px] h-[47px] mt-[35px] object-cover"/>
                                <p className="w-[314px] h-[129px] text-black text-[19px] mt-[19px]">“Lorem ipsum 
                                dolor sit amet, consectetur asim adipiscing elit, sed do eiusmod tempor ut labore 
                                et dolore magna.”</p>
                                <div className="flex flex-row w-[314px] h-[55px] space-x-[102px] mt-[37px]">
                                    <img src={red_dot} className="w-[55px] h-[55px]  object-cover"/>
                                    <div className="w-[157px] h-[42px] mt-[6.5px] text-black text-right">
                                        <p>FirstName LastName</p>
                                        <p>Position</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Project;
