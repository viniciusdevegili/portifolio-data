import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./Habilidades.css";
import { Link } from "react-router-dom";
import powerbi from "../../assets/powerbi.png";
import excel from "../../assets/excel.png";
import python from "../../assets/python.png";
import sql from "../../assets/sql.png";

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
            <img src={powerbi} alt="PowerBI" />
            <button
              onClick={() => abrirModal("Power BI")}
              className="botao-conhecimentos"
            >
              Conhecimentos
            </button>
            <Link to="/powerbi" className="botao-projetos">
              Ver Projetos
            </Link>
          </div>
          <div className="card2">
            <img src={excel} alt="Excel" />
            <button
              onClick={() => abrirModal("Excel")}
              className="botao-conhecimentos"
            >
              Conhecimentos
            </button>
            <Link to="/excel" className="botao-projetos">
              Ver Projetos
            </Link>
          </div>
          <div className="card3">
            <img src={python} alt="Python" />
            <button
              onClick={() => abrirModal("Python")}
              className="botao-conhecimentos"
            >
              Conhecimentos
            </button>
            <Link to="/python" className="botao-projetos">
              Ver Projetos
            </Link>
          </div>
          <div className="card4">
            <img src={sql} alt="SQL" />
            <button
              onClick={() => abrirModal("SQL")}
              className="botao-conhecimentos"
            >
              Conhecimentos
            </button>
            <Link to="/sql" className="botao-projetos">
              Ver Projetos
            </Link>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalAberto !== null}
        onClose={fecharModal}
        title={modalAberto}
      >
        {modalAberto === "Power BI" && (
          <ul>
            <li>Funções DAX (SUMX, CALCULATE, FILTER, RELATED, etc.)</li>
            <li>Modelagem de Dados (Relacionamento)</li>
            <li>Parâmetros e Medidas</li>
            <li>
              Visualizações (Gráficos Avançados, KPI's, Dashboards Interativos)
            </li>
          </ul>
        )}
        {modalAberto === "Excel" && (
          <ul>
            <li>Tabelas Dinâmicas</li>
            <li>Funções Avançadas (ÍNDICE, CORRESP, PROCV, SOMASES)</li>
            <li>
              Dashboards Interativos (Gráficos Dinâmicos, Segmentação de Dados)
            </li>
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
