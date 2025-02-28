import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./Habilidades.css";

function Habilidades() {
  const [modalAberto, setModalAberto] = useState(null);

  const abrirModal = (habilidade) => {
    setModalAberto(habilidade);
  };

  const fecharModal = () => {
    setModalAberto(null);
  };

  return (
    <section id="habilidades" className="habilidades-container">
      <div className="habilidades">
        <div className="habilidades-text">
          <h2>Habilidades</h2>
        </div>
        <div className="card-container">
          <div className="card1">
            <img src="../src/assets/powerbi.png" alt="Power BI" />
            <button onClick={() => abrirModal("Power BI")} className="botao-conhecimentos">
              Conhecimentos
            </button>
            <a href="#projetos" className="botao-projetos">
              Ver Projetos
            </a>
          </div>
          <div className="card2">
            <img src="../src/assets/excel.png" alt="Excel" />
            <button onClick={() => abrirModal("Excel")} className="botao-conhecimentos">
              Conhecimentos
            </button>
            <a href="#projetos" className="botao-projetos">
              Ver Projetos
            </a>
          </div>
          <div className="card3">
            <img src="../src/assets/python.png" alt="Python" />
            <button onClick={() => abrirModal("Python")} className="botao-conhecimentos">
              Conhecimentos
            </button>
            <a href="#projetos" className="botao-projetos">
              Ver Projetos
            </a>
          </div>
          <div className="card4">
            <img src="../src/assets/sql.png" alt="SQL" />
            <button onClick={() => abrirModal("SQL")} className="botao-conhecimentos">
              Conhecimentos
            </button>
            <a href="#projetos" className="botao-projetos">
              Ver Projetos
            </a>
          </div>
        </div>
      </div>

      <Modal isOpen={modalAberto !== null} onClose={fecharModal} title={modalAberto}>
        {modalAberto === "Power BI" && (
          <ul>
            <li>Funções DAX (SUMX, CALCULATE, FILTER, RELATED, etc.)</li>
            <li>Modelagem de Dados (Relacionamento)</li>
            <li>Parâmetros e Medidas</li>
            <li>Visualizações (Gráficos Avançados, KPI's, Dashboards Interativos)</li>
          </ul>
        )}
        {modalAberto === "Excel" && (
          <ul>
            <li>Tabelas Dinâmicas</li>
            <li>Funções Avançadas (ÍNDICE, CORRESP, PROCV, SOMASES)</li>
            <li>Dashboards Interativos (Gráficos Dinâmicos, Segmentação de Dados)</li>
            <li>PowerQuery no Excel </li>
          </ul>
        )}
        {modalAberto === "Python" && (
          <ul>
            <li>Manipulação de Dados com Pandas</li>
            <li>Análise Estatística com NumPy</li>
            <li>Visualização com Matplotlib e Seaborn</li>
            <li>ETL com Python (Extração de Dados, Transformação e Carga)</li>
          </ul>
        )}
        {modalAberto === "SQL" && (
          <ul>
            <li>Consultas Avançadas (JOINs, Subqueries, Window Functions)</li>
            <li>Manipulação de Dados (INSERT, UPDATE, DELETE)</li>
            <li>Modelagem de Banco de Dados (Normalização, Índices, Chaves)</li>
          </ul>
        )}
      </Modal>
    </section>
  );
}

export default Habilidades;
