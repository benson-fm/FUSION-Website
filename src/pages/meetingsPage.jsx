import React, { useState } from 'react';
import PlaceholderPic from '../assets/placeholderPic.png';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ViewMoreButtonVector from "../assets/ViewMoreButtonVector.svg"
import HalfGear from "../assets/HalfGear.svg"
import MeetingsBG from "../assets/MeetingsBG.png"
import MeetingsCarouselPic1 from "../assets/MeetingsCarouselPic1.png"
import MeetingsCarouselPic2 from "../assets/MeetingsCarouselPic2.png"
import MeetingsCarouselPic3 from "../assets/MeetingsCarouselPic3.png"
import MeetingsCarouselPic4 from "../assets/MeetingsCarouselPic4.png"
import MeetingsCarouselPic5 from "../assets/MeetingsCarouselPic5.png"
import MeetingsCarouselPic6 from "../assets/MeetingsCarouselPic6.png"
import MeetingsCarouselBackground from "../assets/MeetingsCarouselBackground.png"

const Meetings = {
  "Fall":
    [{key:"a" ,title:"Meeting Title", date:"XX/XX/XX", pillar:"PILLAR",
    description:"FUSION meetings provide an excellent chance for engineers, Filipinos, and UCI students to connect in a friendly and inclusive setting. Currently, we don't have any meetings ready to showcase, but please check back soon to join in on the fun.",
    image:PlaceholderPic},
    {key:"b" ,title:"Meeting Title", date:"XX/XX/XX", pillar:"PILLAR",
    description:"FUSION meetings provide an excellent chance for engineers, Filipinos, and UCI students to connect in a friendly and inclusive setting. Currently, we don't have any meetings ready to showcase, but please check back soon to join in on the fun.",
    image:PlaceholderPic}],

  "Winter":[{key:"a" ,title:"Meeting Title", date:"XX/XX/XX", pillar:"PILLAR",
    description:"FUSION meetings provide an excellent chance for engineers, Filipinos, and UCI students to connect in a friendly and inclusive setting. Currently, we don't have any meetings ready to showcase, but please check back soon to join in on the fun.",
    image:PlaceholderPic}],

  "Spring":[{key:"a" ,title:"Meeting Title", date:"XX/XX/XX", pillar:"PILLAR",
    description:"FUSION meetings provide an excellent chance for engineers, Filipinos, and UCI students to connect in a friendly and inclusive setting. Currently, we don't have any meetings ready to showcase, but please check back soon to join in on the fun.",
    image:PlaceholderPic},
    {key:"b" ,title:"Meeting Title", date:"XX/XX/XX", pillar:"PILLAR",
    description:"FUSION meetings provide an excellent chance for engineers, Filipinos, and UCI students to connect in a friendly and inclusive setting. Currently, we don't have any meetings ready to showcase, but please check back soon to join in on the fun.",
    image:PlaceholderPic},
    {key:"a" ,title:"Meeting Title", date:"XX/XX/XX", pillar:"PILLAR",
      description:"FUSION meetings provide an excellent chance for engineers, Filipinos, and UCI students to connect in a friendly and inclusive setting. Currently, we don't have any meetings ready to showcase, but please check back soon to join in on the fun.",
      image:PlaceholderPic},
      {key:"b" ,title:"Meeting Title", date:"XX/XX/XX", pillar:"PILLAR",
      description:"FUSION meetings provide an excellent chance for engineers, Filipinos, and UCI students to connect in a friendly and inclusive setting. Currently, we don't have any meetings ready to showcase, but please check back soon to join in on the fun.",
      image:PlaceholderPic}]};


function Meeting({title, pillar, date, description, image}){
  return(
    <div className="flex items-center justify-between">
      <img src={image} alt="Placeholder Picture" className="w-1/2 h-auto object-cover" style={{ borderLeftColor: '#FFA523', borderLeftWidth: '36px', borderStyle: 'solid' }}/>

      <div className="w-1/2 ml-10 space-y-4 ">
        <h1 className="font-karla text-black text-[48px] text-left text-4xl font-bold tracking-[0.05em]">
          {title}
        </h1>

        <div className='flex flex-row py-4'>
          <h2 className="font-karla text-[24px] text-center font-bold leading-[28.06px] tracking-[0.12em]" style={{color: '#FFA523'}}>
            {pillar}
          </h2>
          <h1 className="font-karla text-[24px] text-center font-bold leading-[28.06px] tracking-[0.12em] ml-20" style={{color: '#7D7D7D'}}>
                  {date}
          </h1>
        </div>

        <p className="font-inter text-base leading-7 text-left">
          {description}
        </p>
      </div>
    </div>
  );
}

export function MeetingsPage() {
  const [activeQuarter, setQuarter] = useState("Fall")

  function QuarterButton({Quarter}){
    if(Quarter === activeQuarter){
      return(<button className="bg-[#fac80a] uppercase hover:bg-yellow-500 text-black font-bold py-2 px-6" onClick={()=>{setQuarter(Quarter)}}>{Quarter}</button>);
    } else {
      return(<button className="bg-[#F4F4F4] uppercase hover:bg-gray-200 text-[#7D7D7D] font-bold py-2 px-6" onClick={()=>{setQuarter(Quarter)}}>{Quarter}</button>);
    }
  }

  function RenderMeetings({MeetingList}){
  
    return(
      <div className="relative overflow-hidden px-72 space-y-24 my-52 bg-white">
        <img src={HalfGear} className="absolute right-0"/>
        <div className="flex flex-row justify-between items-center">
          <div>
            <p className="font-[#7D7D7D] text-xl font-semibold">
              &gt;&gt; ‘24 -‘25
            </p>
            <p className="text-5xl font-semibold">
              {activeQuarter} Quarter Meetings
            </p>
          </div>
          <div>
            <QuarterButton Quarter="Fall" />
            <QuarterButton Quarter="Winter" />
            <QuarterButton Quarter="Spring" />
          </div>
        </div>
        <ul className="space-y-28">
          {MeetingList[activeQuarter].map((meeting) => (<Meeting title={meeting.title} pillar={meeting.pillar} date={meeting.date} description={meeting.description} image={meeting.image}/>))}
        </ul>
        <div className="flex flex-row justify-between items-center">
            <button className="bg-black text-white font-inter text-xl font-semibold leading-[35px] tracking-widest text-left px-4 py-2 flex items-center justify-between">
              <span>VIEW MORE</span>
              <img src={ViewMoreButtonVector} alt="> arrow" className="ml-2 w-3 h-5" />
            </button>
            <div>
              <QuarterButton Quarter="Fall" />
              <QuarterButton Quarter="Winter" />
              <QuarterButton Quarter="Spring" />
            </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      <Navbar title="MEETINGS" subtitle="WEDNESDAYS 7-9 PM" bg={MeetingsBG}/>
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white">
                <div className="max-w-[1088px] w-full flex flex-col justify-center items-center gap-10 mt-40">
                    <h1 className="font-karla text-[24px] text-center font-bold leading-[28.06px] tracking-[0.12em]" style={{color: '#7D7D7D'}}>
                        CHECK OUT FUSION
                    </h1>
                    <h1 className="font-karla text-black text-[48px] text-center text-4xl font-bold tracking-[0.05em] mt-10">
                        General Meetings
                    </h1>
                    <p className="text-center font-inter text-base leading-7 px-24" style={{color: '#3C3C3C'}}>
                      Each week, FUSION holds general meetings where members can engage with Filipinx culture and enhance 
                      their engineering skills in an enjoyable and accessible way. Join us on Wednesdays from 7-9 PM in the 
                      Dr. White Room at the Cross Cultural Center (CCC). Everyone, regardless of major or background, is welcome 
                      to participate and have a great time!
                    </p>
                </div>
            </div>
      <div className="relative w-full h-auto">
              <img src={MeetingsCarouselBackground} alt="Meetings Carousel Background" className="w-full h-auto object-cover"/>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="carousel flex overflow-x-auto">
                  <div className="carousel-item flex-shrink-0">
                    <img
                      src={MeetingsCarouselPic1}
                      alt="MeetingsCarouselPic1"
                      className="w-full h-auto object-cover"
                    />
                  </div> 
<div className="carousel-item flex-shrink-0">
                    <img
                      src={MeetingsCarouselPic2}
                      alt="MeetingsCarouselPic2"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="carousel-item flex-shrink-0">
                    <img
                      src={MeetingsCarouselPic3}
                      alt="MeetingsCarouselPic3"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="carousel-item flex-shrink-0">
                    <img
                      src={MeetingsCarouselPic4}
                      alt="MeetingsCarouselPic4"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="carousel-item flex-shrink-0">
                    <img
                      src={MeetingsCarouselPic5}
                      alt="MeetingsCarouselPic5"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="carousel-item flex-shrink-0">
                    <img
                      src={MeetingsCarouselPic6}
                      alt="MeetingsCarouselPic6"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
      <RenderMeetings MeetingList={Meetings}/>
      <Footer/>
    </div>
  );
}