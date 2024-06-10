import { View } from "@react-three/drei";
import React from 'react'

export const ModelView = ({index,groupRef,groupType,gsapRef,
    setRotation, setRotationSize, size,item}
) => {
  return (
    <View
    index={index}
    id={gsapType}
    ref={groupRef}
    className="border-2 border-red-500"
    >ModelView
        <mesh>
            <boxGeometry/>
            <meshStandardMaterial/>
        </mesh>
    </View>
  )
}

export default ModelView;
