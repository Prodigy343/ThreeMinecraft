import { useStore } from '../hooks/useStore'
import { Cube } from './Cube'

export const Cubes = () => {
    const [cubes] = useStore((state) => [
        state.cubes
    ])
    console.log(cubes)
    return cubes.map(props => {
        return <Cube {...props} />
    })
}