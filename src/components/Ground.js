import { usePlane } from '@react-three/cannon'
import { groundTexture } from '../images/textures'
import { useStore } from '../hooks/useStore'

export const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI/2,0,0], position: [0,-0.5,0]
    }))
    const [addCube] = useStore((state) => [state.addCube])

    groundTexture.repeat.set(100,100)

    const groundClick = (e) => {
        e.stopPropagation()
        //console.log("groundClick")
        //console.log(e.point)
        const [x,y,z] = Object.values(e.point).map(value => value)
        //console.log(x,y,z)
        addCube(Math.round(x),Math.ceil(y),Math.round(z))
    }

    return (
        <mesh onClick={groundClick} ref={ref}>
            <planeBufferGeometry attach='geometry' args={[100,100]} />
            <meshStandardMaterial attach='material' map={groundTexture} />
        </mesh>
    )
}