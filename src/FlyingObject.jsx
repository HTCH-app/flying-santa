import React, { useRef } from 'react'
import { Vector3 } from 'three'
import { useFrame } from '@react-three/fiber'

export default function FlyingObject({ children }) {
  const meshRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    // Circular trajectory
    const x = Math.sin(t) * 2
    const y = Math.cos(t * 2) / 2 + 1
    const z = Math.cos(t) * 2

    // Update position
    meshRef.current.position.set(x, y, z)

    // Determine the tangent to the circle at the current position
    const tangent = new Vector3(Math.cos(t), 0, -Math.sin(t))

    // Align the cube's forward vector (assuming Z-forward in this case) with the tangent
    // This makes the cube face the direction it's moving
    meshRef.current.quaternion.setFromUnitVectors(new Vector3(1, 0, 0), tangent.normalize())

    // Additional rotation to always face 'up'
    // meshRef.current.rotateOnAxis(new Vector3(1, 0, 0), Math.PI / 2)
  })

  return <group ref={meshRef}>{children}</group>
}
