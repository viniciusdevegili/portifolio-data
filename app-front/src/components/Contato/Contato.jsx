import React from "react";
import "./Contato.css";

function Contato() {
  return (
    <section id="contatos" className="contatos-container">
      <h2>Contatos</h2>
      <div className="contatos-lista">
        <div className="contato-item">
          <i className="fas fa-envelope"></i> 
          <p>Email</p>
          <a href="mailto:viniciusdevegili@hotmail.com">viniciusdevegili@hotmail.com</a>
        </div>
        <div className="contato-item">
          <i className="fas fa-phone"></i> 
          <p>Telefone</p>
          <a href="tel:+5547997839970">(47) 99783-9970</a>
        </div>
        <div className="contato-item">
          <i className="fab fa-linkedin"></i> 
          <p>Linkedin</p>
          <a href="https://www.linkedin.com/in/vinicius-devegili/" target="_blank" rel="noopener noreferrer">
            @viniciusdevegili
          </a>
        </div>
        <div className="contato-item">
          <i className="fab fa-github"></i>
          <p>Github</p>
          <a href="https://github.com/viniciusdevegili" target="_blank" rel="noopener noreferrer">
            @viniciusdevegili
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contato;
