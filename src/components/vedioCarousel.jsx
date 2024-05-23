import React from 'react'
import { highlightslides } from '../utils'

const VideoCarousel = () => {
  return (
    <div className="flex items-center">
      VideoCarousel
      {highlightslides.map((list, index) => (
        <div key={list.id} id="slider" className="sm:pr-20 pr-10">   
          <div className="video-carousel_container">
            
          <div className="video-carousel_item">
            <div className="video-carousel_item_img">
              <img src={list.image} alt={list.title} />
            </div>
          </div>
                
          </div>
        </div>
      ))}


    </div>
  )
}

export default VideoCarousel;
