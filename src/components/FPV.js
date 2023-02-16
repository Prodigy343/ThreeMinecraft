import { PointerLockControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useEffect, useState, useRef } from "react"
import { Vector3 } from "three"

export const FPV = ({mouseRef}) => {
    const { camera, gl } = useThree()
    const [locked, setLocked] = useState(false)
    const controlsRef = useRef(null)

    const change = () => {
        //console.log("change")
        //console.log(controlsRef)
    }

    useEffect(() => {
        console.log(controlsRef)
        controlsRef.current.addEventListener('unlock', () => {
            setLocked(false)
        })
        controlsRef.current.addEventListener('lock', () => {
            setLocked(true)
        })
    }, [controlsRef])

    useEffect(() => {
        console.log(locked)
        if(locked){
            console.log(mouseRef)
            camera.lookAt(mouseRef.current.x,mouseRef.current.y,mouseRef.current.z)
        }
    }, [locked])

    return (<PointerLockControls
        ref={controlsRef}
        args={[camera, gl.domElement]}
        onChange={change}
    />)
}