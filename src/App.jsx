import { Canvas } from '@react-three/fiber'
import { BakeShadows, OrbitControls, Stage } from '@react-three/drei'
import Shoe from './Shoe'
import FlyingObject from './FlyingObject'

function App() {

  return (
    <div id="canvas-container" style={{
      width: '100vw',
      height: '100vh',
    }}>
      <Canvas shadows camera={{ position: [0, 0, 150], fov: 40 }}>
      <Stage environment="city" intensity={0.6}>
        <FlyingObject>
          <Shoe color="hotpink" position={[0, 0, 0]} />
        </FlyingObject>    
      </Stage>
      <BakeShadows />
      <OrbitControls makeDefault />
    </Canvas>
    </div>
  )
}

export default App
