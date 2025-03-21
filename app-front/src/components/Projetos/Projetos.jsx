import React from "react";
import "./Projetos.css";
import dashBi from "../../assets/dash-bi.png";
import bankSql from "../../assets/bank-sql.png";

function Projetos() {
  return (
    <section id="projetos" className="projetos-container">
      <div className="projetos">
        <div className="projetos-text">
          <h2>Projetos em Destaque</h2>
        </div>
        <div className="projetos-destaque">
          <div className="projeto1">
          <img src={dashBi} alt="Dashboard Comercial" />
            <h3>Dashboard Comercial - PowerBI</h3>
            <a href="https://app.powerbi.com/view?r=eyJrIjoiMmY4NTFhNDMtNjhjOS00M2QxLWFhM2ItNDkxYzI0ZWUxYzI1IiwidCI6IjA5MTdmZTEwLTU2ZGItNDRiZi1iMWM1LTMxMDYxYWIyMWNmOSJ9" className="btn-vermais">
              Ver Mais
            </a>
          </div>
          <div className="projeto2">
          <img src={bankSql} alt="Análise de Acionistas do Banco" />
            <h3>Análise de Acionistas do Banco - SQL</h3>
            <a href="https://github.com/viniciusdevegili/bank-project-sql" className="btn-vermais">
              Ver Mais
            </a>
          </div>
          <div className="projeto3">
          <img src={dashBi} alt="Dashboard Comercial" />
            <h3>Dashboard Comercial</h3>
            <a href="https://app.powerbi.com/view?r=eyJrIjoiMmY4NTFhNDMtNjhjOS00M2QxLWFhM2ItNDkxYzI0ZWUxYzI1IiwidCI6IjA5MTdmZTEwLTU2ZGItNDRiZi1iMWM1LTMxMDYxYWIyMWNmOSJ9" className="btn-vermais">
              Ver Mais
            </a>
          </div>
          <div className="projeto4">
          <img src={dashBi} alt="Dashboard Comercial" />
            <h3>Dashboard Comercial</h3>
            <a href="https://app.powerbi.com/view?r=eyJrIjoiMmY4NTFhNDMtNjhjOS00M2QxLWFhM2ItNDkxYzI0ZWUxYzI1IiwidCI6IjA5MTdmZTEwLTU2ZGItNDRiZi1iMWM1LTMxMDYxYWIyMWNmOSJ9" className="btn-vermais">
              Ver Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projetos;