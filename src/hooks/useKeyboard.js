import { useCallback, useEffect, useState } from "react"

const actionByKey = (key) => {
    const keyActionMap = {
        KeyW: 'moveForward',
        KeyS: 'moveBackward',
        KeyA: 'moveLeft',
        KeyD: 'moveRight',
        Space: 'jump',
        Digit1: 'dirt',
        Digit2: 'grass',
        Digit3: 'glass',
        Digit4: 'wood',
        Digit5: 'log',
    }

    return keyActionMap[key]
}

export const useKeyboard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        dirt: false,
        grass: false,
        glass: false,
        wood: false,
        log: false,
    })

    const handleKey = useCallback((e, press = true) => {
        const action = actionByKey(e.code)
        if(action){
            setActions((prev) => {
                return ({
                    ...prev,
                    [action]: press
                })
            })
        }
    }, [])

    useEffect(() => {
        document.addEventListener('keydown', (e) => handleKey(e))
        document.addEventListener('keyup', (e) => handleKey(e,false))
        return () => {
            document.removeEventListener('keydown', handleKey)
            document.removeEventListener('keyup', handleKey(false))
        }
    }, [handleKey])

    return actions
}