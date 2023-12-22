import React, { useRef } from 'react';
import { Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';

export default function FlyingObject({ children, bankStrength = 0.1 }) {
  const meshRef = useRef();
  const prevTangent = useRef(new Vector3());

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Circular trajectory
    const x = Math.sin(t) * 2;
    const y = Math.cos(t * 2) / 2 + 1;
    const z = Math.cos(t) * 2;

    // Update position
    meshRef.current.position.set(x, y, z);

    // Determine the tangent to the circle at the current position
    const tangent = new Vector3(Math.cos(t), -Math.sin(t * 2) / 4, -Math.sin(t)).normalize();

    // Calculate the normal (banking axis)
    const normal = new Vector3(1, 0, 0);

    // Calculate the binormal
    const binormal = new Vector3().crossVectors(tangent, normal).normalize();

    // Calculate the angle between the previous and current tangent vectors
    const angle = Math.acos(prevTangent.current.dot(tangent));

    // Determine the direction of the banking
    const direction = Math.sign(prevTangent.current.cross(tangent).dot(normal));

    // Model's assumed forward direction (adjust this as needed)
    const modelForward = new Vector3(-1, 0, 0); // Change this to match your model's forward direction

    // Set the quaternion of the mesh to align with the tangent and model's forward direction
    meshRef.current.quaternion.setFromUnitVectors(modelForward, tangent);

    // Apply the banking rotation around the binormal axis
    meshRef.current.rotateOnAxis(binormal, angle * direction * bankStrength);

    // Update the previous tangent
    prevTangent.current.copy(tangent);
  });

  return <group ref={meshRef}>{children}</group>;
}
