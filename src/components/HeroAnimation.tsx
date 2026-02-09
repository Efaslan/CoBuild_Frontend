import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Text, Stars } from '@react-three/drei';

// Tek bir Gezegeni temsil eden parça
const CodePlanet = ({ position, color, label }: { position: [number, number, number], color: string, label: string }) => {
  // DÜZELTME 1: (null) eklendi
  const meshRef = useRef<any>(null);
  const [hovered, setHover] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group position={position}>
      <Sphere
        ref={meshRef}
        args={[1, 32, 32]}
        scale={hovered ? 1.2 : 1}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <MeshDistortMaterial color={color} distort={0.4} speed={2} />
      </Sphere>
      <Text position={[0, 1.4, 0]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
        {label}
      </Text>
    </group>
  );
};

// Gezinen Büyüteç
const MagnifyingGlass = () => {
  // DÜZELTME 2: (null) eklendi
  const ref = useRef<any>(null);
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
        ref.current.position.x = Math.sin(t * 0.5) * 3;
        ref.current.position.z = Math.cos(t * 0.5) * 3;
        ref.current.position.y = Math.sin(t) * 1;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshBasicMaterial color="orange" wireframe />
      <pointLight color="orange" intensity={5} distance={4} />
    </mesh>
  );
};

// Ana Bileşen
export default function HeroAnimation() {
  return (
    <Canvas camera={{ position: [0, 0, 7] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Gezegenler */}
      <group>
        <CodePlanet position={[-2.5, 0, 0]} color="#61dafb" label="React" />
        <CodePlanet position={[2.5, 0, 0]} color="#42b883" label="Vue" />
        <CodePlanet position={[0, 2, -1]} color="#3178c6" label="TS" />
        <CodePlanet position={[0, -2, 1]} color="#c026d3" label="Figma" />
      </group>

      <MagnifyingGlass />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Fare ile döndürme kontrolü */}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}