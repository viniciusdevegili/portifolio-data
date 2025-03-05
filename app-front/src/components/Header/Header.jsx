import React from "react";
import { Link, useLocation } from "react-router-dom"; 

import "./Header.css";

const Header = () => {
  const location = useLocation();

  const handleNavigation = (sectionId) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`; 
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">
          <h1>Portfólio</h1>
        </Link>
        <ul className="nav-links">
          <li><Link to="/" onClick={() => handleNavigation("sobre")}>Sobre</Link></li>
          <li><Link to="/" onClick={() => handleNavigation("formacao")}>Formação</Link></li>
          <li><Link to="/" onClick={() => handleNavigation("habilidades")}>Habilidades</Link></li>
          <li><Link to="/" onClick={() => handleNavigation("projetos")}>Projetos</Link></li>
          <li><Link to="/" onClick={() => handleNavigation("contatos")}>Contatos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
