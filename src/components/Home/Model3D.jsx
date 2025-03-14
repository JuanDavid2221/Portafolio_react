import { useGLTF } from '@react-three/drei';

const Model3D = () => {
  const gltf = useGLTF('/assets/img/pc3d.glb');

  return (
    <primitive 
      object={gltf.scene} 
      scale={5} // Aumenta el tamaño aquí
      position={[0, 0, 0]} // Mueve el modelo hacia abajo
    />
  );
};

export default Model3D;
