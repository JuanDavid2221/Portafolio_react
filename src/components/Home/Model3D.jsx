import React from 'react';
import { useGLTF } from '@react-three/drei';

const Model3D = () => {
  const { scene } = useGLTF('/assets/img/peppa.glb');

  return (
    <>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight intensity={0.8} position={[10, 10, 10]} />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={0.70} castShadow shadow-mapSize={1024} />
      <directionalLight position={[0, 10, 0]} intensity={1.5} />
      <directionalLight position={[0, 20, 0]} intensity={2} /> {/* Luz fuerte en la parte superior */}
      <primitive object={scene} scale={2} position={[2, -2, 0]} rotation={[0, Math.PI + Math.PI / 2, 0]} /> {/* Ajustar posición y rotación */}
    </>
  );
};

export default Model3D;