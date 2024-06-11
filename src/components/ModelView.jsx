import { View } from "@react-three/drei";


export const ModelView = ({index,groupRef,groupType,gsapRef,
    controlRef, setRotationSize, size,item}
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
