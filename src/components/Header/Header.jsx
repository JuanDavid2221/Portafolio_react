import React, { useEffect } from 'react';
import './Header.css'; // Importar los estilos
import 'boxicons/css/boxicons.min.css'; // Importar iconos de Boxicons

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const header = document.querySelector('.header');
      const navLinks = document.querySelectorAll('.navbar a');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.getAttribute('id');
        }
      });

      if (currentSection) {
        header.className = `header ${currentSection}`;
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
          }
        });
      } else {
        header.className = 'header home'; // Asegurarse de que la clase "home" se aplique correctamente
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes('home')) {
            link.classList.add('active');
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    // Aquí puedes agregar la lógica para cambiar el idioma de la página
    console.log(`Idioma seleccionado: ${selectedLanguage}`);
  };

  return (
    <header className="header home">
      <a href="#home" className="logo">Juan<span> Marulanda</span></a>
      <i className='bx bx-menu' id="menu"></i>
      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#about">Education</a>
        <a href="#projects">Services</a>
        <a href="#contact">Contact</a>
        <select className="language-select" onChange={handleLanguageChange}>
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
      </nav>
    </header>
  );
};

export default Header;