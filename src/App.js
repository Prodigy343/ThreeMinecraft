import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics, usePlane } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { Player } from './components/Player'
import { FPV } from './components/FPV'
import { Vector3 } from 'three'
import { Cubes } from './components/Cubes'
import { useRef, useEffect } from 'react'


function App() {
  const pointerLockRef = useRef(null)
  function Plane(props) {
    const [ref] = usePlane(() => ({ mass: 0, ...props }), useRef())
    return (
      <mesh ref={ref} onClick={onClick} receiveShadow>
        <planeGeometry args={[3, 3]} />
        <meshStandardMaterial wireframe wireframeLinewidth={0.5} />
      </mesh>
    )
  }

  function onClick(e){
    console.log(e)
  }

  const mouse = useRef(new Vector3)

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
      <Canvas>
        <Sky sunPosition={[100,100,20]} />
        <ambientLight intensity={0.5} />
        <FPV mouseRef={mouse} />
        <Physics>
          <Plane rotation={[-Math.PI / 2, 0, 0]} />
          <Ground />
          <Player />
          <Cubes />
        </Physics>
      </Canvas>
      <div className='absolute centered cursor'>+</div>
    </>
  );
}

export default App;
