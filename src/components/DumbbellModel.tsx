"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function DumbbellModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  // Target rotations for mouse interaction
  const targetRotationX = useRef(0);
  const targetRotationY = useRef(0);

  useFrame((state) => {
    if (!groupRef.current) return;

    const t = state.clock.getElapsedTime();

    // 1. Gentle floating motion (y-axis translation)
    groupRef.current.position.y = Math.sin(t * 1.5) * 0.15;

    // 2. Slow constant idle rotation on the Y and Z axes
    const idleRotationY = t * 0.15;
    const idleRotationZ = Math.sin(t * 0.5) * 0.1;

    // 3. Mouse interaction (tilts and looks slightly at cursor)
    // Map pointer coordinates (-1 to 1) to subtle rotation ranges
    targetRotationX.current = pointer.y * 0.4;
    targetRotationY.current = pointer.x * 0.5;

    // 4. Smoothly interpolate (lerp) current rotation to target for high-inertia premium feel
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotationX.current,
      0.05
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      idleRotationY + targetRotationY.current,
      0.05
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      idleRotationZ,
      0.05
    );
  });

  // Matte Black Steel plate material settings
  const plateMaterialProps = {
    color: "#181818",
    roughness: 0.45,
    metalness: 0.9,
    bumpScale: 0.05,
  };

  // Knurled Steel center bar material settings
  const barMaterialProps = {
    color: "#777777",
    roughness: 0.35,
    metalness: 0.95,
  };

  // Accent Gold ring/collars material settings
  const goldMaterialProps = {
    color: "#F4B400",
    roughness: 0.25,
    metalness: 0.9,
  };

  return (
    <group ref={groupRef} scale={[1, 1, 1]}>
      {/* 1. CENTRAL HANDLE BAR */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.16, 0.16, 4.4, 32]} />
        <meshStandardMaterial {...barMaterialProps} />
      </mesh>

      {/* 2. INNER COLLARS (Gold Rings) - Positioned symmetrically on left/right ends of handle */}
      {/* Left Collar */}
      <mesh position={[-1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.22, 0.22, 0.1, 32]} />
        <meshStandardMaterial {...goldMaterialProps} />
      </mesh>
      {/* Right Collar */}
      <mesh position={[1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.22, 0.22, 0.1, 32]} />
        <meshStandardMaterial {...goldMaterialProps} />
      </mesh>

      {/* 3. WEIGHT PLATES (LEFT STACK) */}
      {/* Inner Large Plate */}
      <mesh position={[-1.4, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.9, 0.9, 0.3, 32]} />
        <meshStandardMaterial {...plateMaterialProps} />
      </mesh>
      {/* Middle Medium Plate */}
      <mesh position={[-1.75, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.8, 0.8, 0.3, 32]} />
        <meshStandardMaterial {...plateMaterialProps} />
      </mesh>
      {/* Outer Small Plate */}
      <mesh position={[-2.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.7, 0.7, 0.3, 32]} />
        <meshStandardMaterial {...plateMaterialProps} />
      </mesh>

      {/* 4. WEIGHT PLATES (RIGHT STACK) */}
      {/* Inner Large Plate */}
      <mesh position={[1.4, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.9, 0.9, 0.3, 32]} />
        <meshStandardMaterial {...plateMaterialProps} />
      </mesh>
      {/* Middle Medium Plate */}
      <mesh position={[1.75, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.8, 0.8, 0.3, 32]} />
        <meshStandardMaterial {...plateMaterialProps} />
      </mesh>
      {/* Outer Small Plate */}
      <mesh position={[2.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.7, 0.7, 0.3, 32]} />
        <meshStandardMaterial {...plateMaterialProps} />
      </mesh>

      {/* 5. OUTER LOCK CAPS (End caps of bar) */}
      {/* Left Cap */}
      <mesh position={[-2.28, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.18, 0.18, 0.08, 32]} />
        <meshStandardMaterial {...goldMaterialProps} />
      </mesh>
      {/* Right Cap */}
      <mesh position={[2.28, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.18, 0.18, 0.08, 32]} />
        <meshStandardMaterial {...goldMaterialProps} />
      </mesh>

      {/* 6. SUBTLE BEVELED HIGHLIGHT RINGS ON PLATES (Gold Torus elements for visual excellence) */}
      {/* Left outer gold rim details */}
      <mesh position={[-1.4, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.88, 0.02, 16, 64]} />
        <meshStandardMaterial {...goldMaterialProps} roughness={0.1} />
      </mesh>
      <mesh position={[-1.75, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.78, 0.02, 16, 64]} />
        <meshStandardMaterial {...goldMaterialProps} roughness={0.1} />
      </mesh>

      {/* Right outer gold rim details */}
      <mesh position={[1.4, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.88, 0.02, 16, 64]} />
        <meshStandardMaterial {...goldMaterialProps} roughness={0.1} />
      </mesh>
      <mesh position={[1.75, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.78, 0.02, 16, 64]} />
        <meshStandardMaterial {...goldMaterialProps} roughness={0.1} />
      </mesh>
    </group>
  );
}
