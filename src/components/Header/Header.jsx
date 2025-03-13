import React from 'react';
import './Header.css'; // Importar los estilos
import 'boxicons/css/boxicons.min.css'; // Importar iconos de Boxicons

const Header = () => {
  return (
    <header className="header">
      <a href="#home" className="logo">Juan<span> Marulanda</span></a>
      <i className='bx bx-menu' id="menu"></i>
      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#education">Education</a>
        <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
