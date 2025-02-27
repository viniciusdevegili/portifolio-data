import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo">Portfólio</h1>
        <ul className="nav-links">
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#formacao">Formação</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contatos">Contatos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
