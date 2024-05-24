import React from 'react'
import {hightlightsSlides} from '../constants'

const VideoCarousel = () => {
  return (
    <div className="flex items-center">
      VideoCarousel
      {hightlightsSlides.map((list, index) => (
        <div key={list.id} id="slider" className="sm:pr-20 pr-10">   
          <div className="video-carousel_container">

          <div className="w-full h-full flex-center
            bg-black rounded-3xl overflow-hidden ">
           <video >
            <source src={list.video} type="video/mp4" />
         
         
          </video>


          </div>
                
          </div>
        </div>
      ))}


    </div>
  )
}

export default VideoCarousel;
