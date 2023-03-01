import { PointerLockControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useEffect } from "react"

export const FPV = () => {
    const { camera, gl, pointer } = useThree()

    useEffect(() => console.log(pointer))

    return (<PointerLockControls
        args={[camera, gl.domElement]}
        makeDefault={false}
    />)
}