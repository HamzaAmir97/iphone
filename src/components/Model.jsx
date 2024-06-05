import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { ModelView } from "./ModelView";
import {yellowImg} from "../utils";
import { useState, useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";





const Model = () => {


const [size, setSize] = useState("small");
const [model, setModel] = useState({
    title: "iphone 15 pro in Natural Titanum",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    image: yellowImg,

});

// camera control for model view
  
const cameraControlSmall = useRef();
const cameraControlLarge = useRef();


//model v
const small = useRef(new THREE.Group());
const large = useRef(new THREE.Group());


//rotation
const [smallRotation, setSmallRotation] = useState(0);
const [largeRotation, setLargeRotation] = useState(0);










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

               <ModelView 
               index={1}
                gruopRef={small}
                gropuType="view1"
                controlRef={cameraControlSmall}
                setRotationState={setSmallRotation}
                item={Model}
                size={size}
               />
              <ModelView 
               index={2}
                gruopRef={large}
                gropuType="view2"
                controlRef={cameraControlLarge}
                setRotationState={setLargeRotation}
                item={Model}
                size={size}
               />

              
            <Canvas
              className="w-full h-full"
              style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: 'hidden'
              }}
              eventSource={document.getElementById('root')}
            >
              <View.Port />
            </Canvas>

        <div className="mx-auto w-ful">

         <p className="text-sm font-light
         text-center mb-5">{model.title}</p>
        <div className="flex-center">

        <ul className="color-container">
                {models.map((item, i) => (
                  <li key={i} className="w-6 h-6 rounded-full mx-2 cursor-pointer" style={{ backgroundColor: item.color[0] }} onClick={() => setModel(item)} />
                ))}
              </ul>

        </div>




        </div>
        </div>
        
        
        
        
        
        
        
        
        </div>
        
        </div>



    </section>
  )
}

export default Model;
