import { View } from "@react-three/drei";
import { PerspectiveCamera} from "@react-three/drei"
import Lights from "./Lights";
import { Suspense } from "react";
import IPhone from './IPhone';
import { OrbitControls } from "@react-three/drei";
import * as THREE from 'three';

export const ModelView = ({index, groupRef, gsapType, controlRef, setRotationState, size, item}
) => {
  return (
    <View
    index={index}
    id={gsapType}
    ref={groupRef}
     className={` w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
        
{/* Ambient Light */}
<ambientLight intensity={0.3} />

<PerspectiveCamera makeDefault position={[0, 0, 4]} />
<Lights />

<OrbitControls 
  makeDefault
  ref={controlRef}
  enableZoom={false}
  enablePan={false}
  rotateSpeed={0.4}
  target={new THREE.Vector3(0,0,0)}
  onEnded={() =>
     setRotationState(controlRef.current.getAzimuthalAngle())}
/ >

<group ref={groupRef}  name={`${index ===1} ? ' small' : 'large`}
    
    
    
    >
<Suspense fallback={<div>Loading...</div>}>
  <IPhone
  
   scale={index === 1 ? [15,15,15] : [17,17,17]}
   item={item}
   size={size}
  
  />

</Suspense>

</group>
     <OrbitControls />
    </View>
  )
}

export default ModelView;
