

import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Model3D from './Model3D';
import { ReactTyped as Typed } from 'react-typed';
import './Home.css';






const Home = () => {
  const [commitCount, setCommitCount] = useState(0);

  useEffect(() => {
    const fetchCommitCount = async () => {
      try {
        const username = 'JuanDavid2221'; // Tu nombre de usuario de GitHub
        const token = ''; // Tu token de acceso personal de GitHub

        const headers = {
          Authorization: `token ${token}`,
        };

        const response = await fetch(`https://api.github.com/users/${username}/repos`, { headers });
        if (!response.ok) {
          throw new Error('Error fetching repositories');
        }
        const repos = await response.json();

        let totalCommits = 0;

        for (const repo of repos) {
          if (repo.size > 0) { // Verificar si el repositorio no está vacío
            const commitsResponse = await fetch(repo.commits_url.replace('{/sha}', ''), { headers });
            if (!commitsResponse.ok) {
              console.error(`Error fetching commits for repo: ${repo.name}`);
              continue; // Saltar al siguiente repositorio si hay un error
            }
            const commits = await commitsResponse.json();
            totalCommits += commits.length;
          }
        }

        setCommitCount(totalCommits);
      } catch (error) {
        console.error('Error fetching commit count:', error);
      }
    };

    fetchCommitCount();
  }, []);

  return (
    <>
      <section className="home1" id="home">
        <div className="home">
          <div className="home-content">
            <h1>Hi, It's <span>Juan</span></h1>
            <h3 className="text-animation">
              I'm a <span>
                <Typed
                  strings={['Developer', 'Full Stack', 'Back End', 'Front End']}
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

              I am highly motivated by the ever-evolving nature of technology and strive to stay updated with the latest
              trends and best practices in web development. My goal is to design and develop seamless, efficient, and
              visually appealing user interfaces that enhance user experience. I thrive in dynamic environments where
              I can apply my creativity and problem-solving skills to build impactful digital solutions.
            </p>

            <div className="social-icons">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin-square'></i></a>
              <a href="https://github.com/JuanDavid2221" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
              <a href="mailto:juanmarucasta@gmail.com" target="_blank" rel="noopener noreferrer"><i className='bx bxl-gmail'></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a>
            </div>
            <div className="btn-group">
              <a href="#contact" className='btn'>Hire</a>
              <a href="/CV_Juan_David_Marulanda_ES.pdf" className='btn' download="CV_Juan_David_Marulanda.pdf">Contact</a>
              <a href="/CV_Juan_David_Marulanda_EN.pdf" className='btn1' download="CV_Juan_David_Marulanda_EN.pdf">CV</a>
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
        </div>
        
        <div className="experience-content">
          <div className="experience-item">
            <h3>1</h3>
            <p>Year of Experience</p>
          </div>
          <div className="experience-item">
            <h3>10</h3>
            <p>Projects Completed</p>
          </div>
          <div className="experience-item">
            <h3>5</h3>
            <p>Technologies Mastered</p>
          </div>
          <div className="experience-item">
            <h3>{commitCount}</h3>
            <p>Code Commits</p>
          </div>
        </div>
      </section>
     
      <section id="about">
        <h2>About</h2>
        <p>About content...</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <p>Projects content...</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Contact content...</p>
      </section>
    </>
  );
};

export default Home;