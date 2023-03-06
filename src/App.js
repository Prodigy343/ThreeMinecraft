import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { Player } from './components/Player'
import { FPV } from './components/FPV'
import { Cubes } from './components/Cubes'
import { useRef, useEffect } from 'react'
import { Vector3 } from 'three'
import { TextureSelector } from './components/TextureSelector'

function App() {
  const mouse = useRef(new Vector3())

  useEffect(() => {
    const onMouseMove = (evt) => {
        mouse.current.x = (evt.clientX / window.innerWidth) * 2 - 1; 
        mouse.current.y = - (evt.clientY / window.innerHeight) * 2 + 1;
    }
    window.addEventListener('mousemove', onMouseMove, false ); 
    return () => window.removeEventListener('mousemove', onMouseMove )
    
  }, [])

  return (
    <>
      <Canvas
        raycaster={{
          computeOffsets: (_, { size: { width, height } }) => {
            return ({
              offsetX: width / 2,
              offsetY: height / 2
            })
          }
        }}
      >
        <Sky sunPosition={[100,100,20]} />
        <ambientLight intensity={0.5} />
        <FPV mouseRef={mouse} />
        <Physics>
          <Ground />
          <Player />
          <Cubes />
        </Physics>
      </Canvas>
      <div className='absolute centered cursor'>+</div>
      <TextureSelector />
    </>
  );
}

export default App;
