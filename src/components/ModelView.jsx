import { View } from "@react-three/drei";


export const ModelView = ({index, groupRef, gsapType, controlRef, setRotationState, size, item}
) => {
  return (
    <View
    index={index}
    id={gsapType}
    ref={groupRef}
     className={`border-2 border-red-500 w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
        

     
    </View>
  )
}

export default ModelView;
