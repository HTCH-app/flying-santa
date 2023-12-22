import { Canvas } from '@react-three/fiber'
import { BakeShadows, OrbitControls, Stage } from '@react-three/drei'
import FlyingObject from './FlyingObject'
import Santa from './Santa'

const scale = 0.5
function App() {

  return (
    <div id="canvas-container" style={{
      width: '100vw',
      height: '100vh',
    }}>
      <Canvas shadows camera={{ position: [0, 0, 150], fov: 40 }}>
      <Stage environment="city" intensity={0.6}>
        <FlyingObject>
          <Santa scale={scale} />
        </FlyingObject>    
      </Stage>
      <BakeShadows />
      <OrbitControls makeDefault />
    </Canvas>
    </div>
  )
}

export default App
