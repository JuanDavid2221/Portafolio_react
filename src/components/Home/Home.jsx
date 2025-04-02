

import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Model3D from './Model3D';
import { ReactTyped as Typed } from 'react-typed';
import './Home.css';



const Home = () => {
  const [commitCount, setCommitCount] = useState(0);
  const [activeTab, setActiveTab] = useState('experience'); // Estado para controlar la pestaña activa

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const token = process.env.REACT_APP_GITHUB_TOKEN;
        console.log('Token:', token); // Verifica si el token se está cargando correctamente
    
        if (!token) {
          throw new Error('GitHub token is missing. Please check your .env file.');
        }
    
        // Define los intervalos de fechas (máximo 1 año por intervalo)
        const dateRanges = [
          { from: "2023-01-01T00:00:00Z", to: "2023-12-31T23:59:59Z" },
          { from: "2024-01-01T00:00:00Z", to: "2024-12-31T23:59:59Z" },
          { from: "2025-01-01T00:00:00Z", to: "2025-12-31T23:59:59Z" },
        ];
    
        let totalContributions = 0;
    
        for (const range of dateRanges) {
          const query = `
            query {
              user(login: "JuanDavid2221") {
                contributionsCollection(from: "${range.from}", to: "${range.to}") {
                  contributionCalendar {
                    totalContributions
                  }
                }
              }
            }
          `;
    
          const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
          });
    
          const data = await response.json();
          console.log('API Response:', data); // Verifica la respuesta completa de la API
    
          if (data.errors) {
            console.error('GraphQL Errors:', data.errors); // Muestra los errores de GraphQL
            throw new Error(data.errors.map(error => error.message).join(', '));
          }
    
          const contributions = data.data.user.contributionsCollection.contributionCalendar.totalContributions;
          totalContributions += contributions; // Suma las contribuciones de este intervalo
        }
    
        setCommitCount(totalContributions); // Actualiza el estado con el total de contribuciones
      } catch (error) {
        console.error('Error fetching contributions:', error);
      }
    };

    fetchContributions();
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
              trends and best practices in web development.
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
            <h3>8</h3>
            <p>Technologies Mastered</p>
          </div>
          <div className="experience-item">
            <h3>{commitCount}</h3>
            <p>Code Commits</p>
          </div>
        </div>
      </section>
     
      <section id="about">
  <div className="about-container">
    
    {/* Botones en columna */}
    <div className="about-buttons">
      <h1> Why hire me ?</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quam facilis nesciunt. Amet ducimus veniam voluptatem accusantium placeat maiores beatae obcaecati quidem. Facere voluptatibus voluptas enim natus dolores inventore cupiditate!</p>
      <button onClick={() => setActiveTab('experience')}>Experience</button>
      <button onClick={() => setActiveTab('education')}>Education</button>
      <button onClick={() => setActiveTab('tools')}>Tools</button>
      <button onClick={() => setActiveTab('about')}>About</button>
    </div>

    {/* Contenido dinámico */}
    <div className="about-content">
    {activeTab === 'experience' && (
  <div>
    <h3>My Experience</h3>
    <p>
      Durante mi tiempo en Red de Servicios del Quindío, trabajé en diversas áreas del desarrollo de software, 
      enfocándome en frontend y optimización de código.
    </p>

    {/* Contenedor de las tarjetas */}
    <div className="cards-container">
      <div className="card">
        <h4>Desarrollo Frontend</h4>
        <p><strong>Fecha: Enero 2023 - Marzo 2023</strong></p>
        <p>Implementé interfaces interactivas utilizando Angular, mejorando la experiencia de usuario.</p>
      </div>
      <div className="card">
        <h4>Optimización de Código</h4>
        <p><strong>Fecha: Abril 2023 - Junio 2023</strong></p>
        <p>Refactoricé código en TypeScript y CSS para mejorar el rendimiento y la mantenibilidad.</p>
      </div>
      <div className="card">
        <h4>Trabajo en Equipo</h4>
        <p><strong>Fecha: Julio 2023 - Septiembre 2023</strong></p>
        <p>Colaboré con desarrolladores y diseñadores para garantizar coherencia en el producto final.</p>
      </div>
      <div className="card">
        <h4>Gestión de Versiones</h4>
        <p><strong>Fecha: Octubre 2023 - Diciembre 2023</strong></p>
        <p>Utilicé Git y GitHub para el control de versiones y trabajo en equipo eficiente.</p>
      </div>
      <div className="card">
        <h4>Pruebas y Depuración</h4>
        <p><strong>Fecha: Enero 2024 - Marzo 2024</strong></p>
        <p>Realicé pruebas en la aplicación para detectar y corregir errores antes de la implementación.</p>
      </div>
      <div className="card">
        <h4>Aprendizaje Continuo</h4>
        <p><strong>Fecha: Abril 2024 - Presente</strong></p>
        <p>Me mantuve en constante aprendizaje para aplicar buenas prácticas en el desarrollo de software.</p>
      </div>
    </div>
  </div>
)}

      {activeTab === 'education' && (
        <div>
          <h3>My education</h3>
          <p>
      Durante mi tiempo en Red de Servicios del Quindío, trabajé en diversas áreas del desarrollo de software, 
      enfocándome en frontend y optimización de código.
         </p>

          <ul>
            <li>
              <strong>SENA</strong> - Software Analysis and Development Apprentice (2022 - Present)
            </li>
            <li>
              <strong>High School</strong> - Technical Degree in Systems (2018 - 2021)
            </li>
          </ul>
        </div>
      )}
      {activeTab === 'tools' && (
  <div>
    <h3>My Tools</h3>
    <p>
      Durante mi tiempo en Red de Servicios del Quindío, trabajé en diversas áreas del desarrollo de software, 
      enfocándome en frontend y optimización de código.
    </p>

    {/* Contenedor de las tarjetas de herramientas */}
    <div className="tools-container">
  <div className="tool-card">
    <i className="fab fa-react tool-icon tool-react"></i>
    <h4>React</h4>
  </div>
  <div className="tool-card">
    <i className="fab fa-angular tool-icon tool-angular"></i>
    <h4>Angular</h4>
  </div>
  <div className="tool-card">
    <i className="fab fa-node-js tool-icon tool-node"></i>
    <h4>Node.js</h4>
  </div>
  <div className="tool-card">
    <i className="fas fa-database tool-icon tool-mongodb"></i>
    <h4>MongoDB</h4>
  </div>
  <div className="tool-card">
    <i className="fab fa-git-alt tool-icon tool-git"></i>
    <h4>Git</h4>
  </div>
  <div className="tool-card">
    <i className="fab fa-github tool-icon tool-github"></i>
    <h4>GitHub</h4>
  </div>
  <div className="tool-card">
    <i className="fab fa-python tool-icon tool-python"></i>
    <h4>Python</h4>
  </div>
  <div className="tool-card">
    <i className="fab fa-docker tool-icon tool-docker"></i>
    <h4>Docker</h4>
  </div>
  <div className="tool-card">
    <i className="fab fa-aws tool-icon tool-aws"></i>
    <h4>AWS</h4>
  </div>
  <div className="tool-card">
    <i className="fab fa-html5 tool-icon tool-html"></i>
    <h4>HTML5</h4>
  </div>
  <div className="tool-card">
    <i className="fab fa-css3-alt tool-icon tool-css"></i>
    <h4>CSS3</h4>
  </div>
  <div className="tool-card">
    <i className="fab fa-js-square tool-icon tool-javascript"></i>
    <h4>JavaScript</h4>
  </div>
  <div className="tool-card">
    <i className="fab fa-bootstrap tool-icon tool-bootstrap"></i>
    <h4>Bootstrap</h4>
  </div>
  <div className="tool-card">
    <i className="fab fa-java tool-icon tool-java"></i>
    <h4>Java</h4>
  </div>
  <div className="tool-card">
    <i className="fab fa-vuejs tool-icon tool-vue"></i>
    <h4>Vue.js</h4>
  </div>
  <div className="tool-card">
    <i className="fab fa-php tool-icon tool-php"></i>
    <h4>PHP</h4>
  </div>
  <div className="tool-card">
    <i className="fas fa-server tool-icon tool-express"></i>
    <h4>Express</h4>
  </div>
  <div className="tool-card">
    <img src="assets/img/figma.png" alt="Figma" className="tool-icon tool-figma" />
    <h4>Figma</h4>
  </div>
  <div className="tool-card">
    <i className="fab fa-laravel tool-icon tool-laravel"></i>
    <h4>Laravel</h4>
  </div>
  <div className="tool-card">
    <i className="fas fa-database tool-icon tool-dbeaver"></i>
    <h4>DBeaver</h4>
  </div>
  <div className="tool-card">
    <i className="fas fa-envelope tool-icon tool-postman"></i>
    <h4>Postman</h4>
  </div>
  <div className="tool-card">
    <i className="fab fa-microsoft tool-icon tool-azure"></i>
    <h4>Azure</h4>
  </div>
  <div className="tool-card">
    <i className="fas fa-database tool-icon tool-mysqlworkbench"></i>
    <h4>MySQL Workbench</h4>
  </div>
</div>
  </div>
)}
      {activeTab === 'about' && (
        <div>
          <h3>My about</h3>
          <p>
            Passionate about creating innovative and useful technology solutions. I specialize in frontend development
            and enjoy continuous learning and tackling new challenges.
          </p>
        </div>
      )}
    </div>
  </div>
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