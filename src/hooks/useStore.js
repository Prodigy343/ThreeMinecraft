import { nanoid } from 'nanoid'
import create from 'zustand'

export const useStore = create((set) => ({
    texture: 'dirt',
    cubes: [{
        key: nanoid(),
        pos: [10,0.5,10],
        texture: 'dirt'
    },
    {
        key: nanoid(),
        pos: [11,0.5,11],
        texture: 'wood'
    }],
    addCube: (x,y,z) => {
        set((prev) => ({
            ...prev,
            cubes: [
                ...prev.cubes,
                {
                    key: nanoid(),
                    pos: [x,y,z],
                    texture: prev.texture
                }
            ]

        }))
    },
    removeCube: () => {},
    setTexture: () => {},
    saveWorld: () => {},
    resetWorld: () => {},
}))