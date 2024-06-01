import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { ModelView } from "./ModelView";
import {yellowImg} from "../utils";
import { useState, useRef } from "react";
import * as THREE from "three";
export const Model = () => {

const [size, setSize] = useState("small");
const [Model, setModel] = useState({
    title: "iphone 15 pro in Natural Titanum",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    image: yellowImg,

});

// camera control for model view
  
const cameraControlSmall = useRef();
const cameraControlLarge = useRef();
const small = useref(newTHREE.Grouo());


  useGSAP(() => {
  gsap.to('#heading', {
         
         opacity: 1, y: 0, delay: 0.5,
          
      })

        }, [])


  return (
    <section className='common-padding'>
    <div className='screen-max-width'>
    
        <h1 id='heading' className='section-heading'>
         Take colser look.
        </h1>
        <div className='flex flex-col  items-center mt-5'>
        <div className=' w-full h-[75vh] md:h-[90vh] overflow-hidden relative'>

               <ModelView/>


        </div>
        </div>
        
        
        
        
        
        
        
        
        
        
        </div>



    </section>
  )
}

export default Model;
