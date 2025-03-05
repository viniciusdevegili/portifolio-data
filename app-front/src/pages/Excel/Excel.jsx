import React, { useState } from "react";
import { useEffect } from "react";
import "./Excel.css";
import Header from "../../components/Header/Header";
import Contato from "../../components/Contato/Contato";

const Excel = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <>
    <Header />
    <section id="projetos" className="projetos-container">
      <div className="projetos">
      <div className="powerbi-logo">
        <img src="../src/assets/excel.png" alt="PowerBI" />
        <div className="projetos-text">
          <h2>Todos os Projetos</h2>
        </div>
        <div className="projetos-destaque">
          <div className="projeto1">
            <img src="../src/assets/dash-bi.png" alt="Dashboard Comercial" />
            <h3>Dashboard Comercial - PowerBI</h3>
            <a
              href="https://app.powerbi.com/view?r=eyJrIjoiMmY4NTFhNDMtNjhjOS00M2QxLWFhM2ItNDkxYzI0ZWUxYzI1IiwidCI6IjA5MTdmZTEwLTU2ZGItNDRiZi1iMWM1LTMxMDYxYWIyMWNmOSJ9"
              className="btn-vermais"
            >
              Ver Mais
            </a>
          </div>
          <div className="projeto2">
            <img src="../src/assets/dash-bi.png" alt="Dashboard Comercial" />
            <h3>Dashboard Comercial - PowerBI</h3>
            <a
              href="https://app.powerbi.com/view?r=eyJrIjoiMmY4NTFhNDMtNjhjOS00M2QxLWFhM2ItNDkxYzI0ZWUxYzI1IiwidCI6IjA5MTdmZTEwLTU2ZGItNDRiZi1iMWM1LTMxMDYxYWIyMWNmOSJ9"
              className="btn-vermais"
            >
              Ver Mais
            </a>
          </div>
          <div className="projeto3">
            <img src="../src/assets/dash-bi.png" alt="Dashboard Comercial" />
            <h3>Dashboard Comercial - PowerBI</h3>
            <a
              href="https://app.powerbi.com/view?r=eyJrIjoiMmY4NTFhNDMtNjhjOS00M2QxLWFhM2ItNDkxYzI0ZWUxYzI1IiwidCI6IjA5MTdmZTEwLTU2ZGItNDRiZi1iMWM1LTMxMDYxYWIyMWNmOSJ9"
              className="btn-vermais"
            >
              Ver Mais
            </a>
          </div>
          <div className="projeto4">
            <img src="../src/assets/dash-bi.png" alt="Dashboard Comercial" />
            <h3>Dashboard Comercial - PowerBI</h3>
            <a
              href="https://app.powerbi.com/view?r=eyJrIjoiMmY4NTFhNDMtNjhjOS00M2QxLWFhM2ItNDkxYzI0ZWUxYzI1IiwidCI6IjA5MTdmZTEwLTU2ZGItNDRiZi1iMWM1LTMxMDYxYWIyMWNmOSJ9"
              className="btn-vermais"
            >
              Ver Mais
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
    <Contato />
    </>
  );
}

export default Excel;
