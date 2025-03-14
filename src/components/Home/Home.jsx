import { Canvas } from '@react-three/fiber';
import './Home.css';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Model3D from './Model3D';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, It's <span>Juan</span></h1>
        <h3 className="text-animation">I'm a <span></span></h3>
        <p>
          Software Analysis and Development apprentice at SENA, passionate about creating innovative and useful
          technology solutions. I specialize in frontend development with Angular and enjoy continuous learning
          and tackling new challenges.
        </p>

        <div className="social-icons">
          <a href="https://www.linkedin.com"><i className='bx bxl-linkedin-square'></i></a>
          <a href="https://github.com"><i className='bx bxl-github'></i></a>
          <a href="https://wa.me/"><i className='bx bxl-whatsapp'></i></a>
          <a href="mailto:juanmarucasta@gmail.com"><i className='bx bxl-gmail'></i></a>
          <a href="https://instagram.com"><i className='bx bxl-instagram'></i></a>
        </div>
        <div className="btn-group">
          <a href="#" className='btn'>Hire</a>
          <a href="#contact" className='btn'>Contact</a>
        </div>
      </div>

      <div className="home-img">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={1} />
            <OrbitControls />
            <Model3D />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Home;
