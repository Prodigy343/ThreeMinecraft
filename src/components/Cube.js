import { useBox } from "@react-three/cannon"
import { useStore } from '../hooks/useStore'
import * as textures from '../images/textures'

export const Cube = ({ pos: position, texture }) => {
    const [ref] = useBox(() => ({
        type: 'Static',
        position
    }))
    const [addCube, removeCube] = useStore((state) => [state.addCube, state.removeCube])

    const activeTexture = textures[texture + 'Texture']

    const cubeClick = (e) => {
        e.stopPropagation()
        const clickedFace = Math.floor(e.faceIndex)
        console.log(clickedFace)
    }
    

    return (
        <mesh onPointerDown={console.log} onClick={cubeClick} ref={ref}>
            <boxBufferGeometry attach='geometry' />
            <meshStandardMaterial map={activeTexture} />
        </mesh>
    )
}
