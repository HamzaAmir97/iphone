import { View } from "@react-three/drei";
import { PerspectiveCamera} from "@react-three/drei"
import Lights from "./Lights";




export const ModelView = ({index, groupRef, gsapType, controlRef, setRotationState, size, item}
) => {
  return (
    <View
    index={index}
    id={gsapType}
    ref={groupRef}
     className={`border-2 border-red-500 w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
        
{/* Ambient Light */}
<ambientLight intensity={0.3} />

<PerspectiveCamera makeDefault position={[0, 0, 4]} />
<Lights />
{/* <Suspense fallback={<div>Loading...</div>}>


</Suspense>
      */}
    </View>
  )
}

export default ModelView;
