import React from 'react';
import './Formacao.css';
import formacao from "../../assets/formacao.png";

function Formacao() {
  return (
    <section id="formacao" className="formacao-container">
    <div className="formacao">
      <div className="formacao-title">
        <h2>Formação</h2>
      </div>
      <div className="formacao-img">
        <img src={formacao} alt="Formacao" />
      </div>
    </div>
    </section>
  );
}

export default Formacao;