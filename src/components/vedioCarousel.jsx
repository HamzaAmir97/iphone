
import {hightlightsSlides} from '../constants'
import { useEffect, useState, useRef } from 'react';
const VideoCarousel = () => {

   const vedioRef = useRef([null]);
   const vediospanRef = useRef([null]);
   const vediodivRef = useRef([null]);

   const [vedioIndex, setVedio] = useState({
 isEnd: false,
 startPlay: false,
 veddioId: 0,
 isLastVedio: false,
 isPlaying: false,
 


   });
const [isEnd, startPlay, veddioId, isLastVedio, isPlaying] = video;
   
useEffect(() => {

 const currentProgress = 0;
 let span = videoSpanRef.current;

}, [videoIdstartPlay])

  return (
    <div className="flex items-center">
      {hightlightsSlides.map((list, index) => (
        <div key={list.id} id="slider" className="sm:pr-20 pr-10">   
          <div className="video-carousel_container">

          <div className="w-full h-full flex-center
            bg-black rounded-3xl overflow-hidden ">
           <video id="video" playsInline={true}
            preload='auto' muted >
            <source src={list.video} type="video/mp4" />
         
         
          </video>
          </div>
                
           <div className="absolute top-12 left-[5%] z-10">
            {list.textLists.map((text, index) => (
              <p key={text} className="md:text-2xl text-xl font-medium">
                 {text}   </p>
            ))}
           </div>


          </div>
        </div>
      ))}


    </div>
  )
}

export default VideoCarousel;
