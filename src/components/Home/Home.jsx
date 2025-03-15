import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Model3D from './Model3D';
import { ReactTyped as Typed } from 'react-typed';
import './Home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, It's <span>Juan</span></h1>
        <h3 className="text-animation">
          I'm a <span>
            <Typed
              strings={['Developer','Full Stack', 'Back End', 'Front End']}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </span>
        </h3>
        <p>
          Software Analysis and Development apprentice at SENA, passionate about creating innovative and useful
          technology solutions. I specialize in frontend development with Angular and enjoy continuous learning
          and tackling new challenges.
        </p>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/juan-david-marulanda-0b438a346/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin-square'></i></a>
          <a href="https://github.com/JuanDavid2221" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
          <a href="mailto:juanmarucasta@gmail.com"><i className='bx bxl-gmail'></i></a>
          <a href="https://instagram.com/jmarulandad" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a>
        </div>
        <div className="btn-group">
          <a href="#" className='btn'>Hire</a>
          <a href="#contact" className='btn'>Contact</a>
        </div>
      </div>

      <div className="home-img">
        <Canvas style={{ background: '#090909', width: '100%', height: '100%' }} camera={{ position: [0, 5, 20], fov: 65 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={2} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <directionalLight position={[-10, -10, -5]} intensity={2} />
            <pointLight position={[0, 10, 0]} intensity={2} />
            <Model3D />
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Home;