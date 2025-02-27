import React from "react";
import "./Habilidades.css";

function Habilidades() {
  return (
    <section id="habilidades" className="habilidades-container">
      <div className="habilidades">
        <div className="habilidades-text">
          <h2>Habilidades</h2>
        </div>
        <div className="card-container">
          <div className="card1">
            <img src="../src/assets/powerbi.png" alt="Formacao" />
            <a href="#Conhecimentos" className="botao-conhecimentos">
              Conhecimentos
            </a>
            <a href="#projetos" className="botao-projetos">
              Ver Projetos
            </a>
          </div>
          <div className="card2">
            <img src="../src/assets/excel.png" alt="Formacao" />
            <a href="#Conhecimentos" className="botao-conhecimentos">
              Conhecimentos
            </a>
            <a href="#projetos" className="botao-projetos">
              Ver Projetos
            </a>
          </div>
          <div className="card3">
            <img src="../src/assets/python.png" alt="Formacao" />
            <a href="#Conhecimentos" className="botao-conhecimentos">
              Conhecimentos
            </a>
            <a href="#projetos" className="botao-projetos">
              Ver Projetos
            </a>
          </div>
          <div className="card4">
            <img src="../src/assets/sql.png" alt="Formacao" />
            <a href="#Conhecimentos" className="botao-conhecimentos">
              Conhecimentos
            </a>
            <a href="#projetos" className="botao-projetos">
              Ver Projetos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
