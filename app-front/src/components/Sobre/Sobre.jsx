import "./Sobre.css";
import bankSql from "../../assets/profile-photo.png";

function Sobre() {
  return (
    <section id="sobre" className="sobre-container">
      <div className="sobre-content">
        <div className="about-me">
          <p>Quem sou</p>
          <h1>Vinicius Devegili</h1>
          <h2>Analista de Dados</h2>
          <div className="botoes">
            <a href="./public/cv.pdf" download className="botao">
              📄 Download CV
            </a>
            <a href="#contatos" className="botao botao-contato">
              ✉️ Entrar em Contato
            </a>
          </div>
        </div>
        <div className="about-me-describe">
          <h2>Sobre Mim</h2>
          <p>
            Olá! Meu nome é Vinicius Devegili e sou Analista de Dados apaixonado
            por transformar dados em insights valiosos. Ao longo da minha
            jornada, desenvolvi habilidades técnicas e analíticas que me
            permitem trabalhar com ferramentas como Power BI, Excel, Python e
            SQL para resolver problemas complexos e otimizar processos de tomada
            de decisão. Meu interesse por dados surgiu durante a faculdade e se
            solidificou com cursos de análise de dados e programação. Desde
            então, venho aprimorando meu conhecimento e experiência para ajudar
            empresas a entenderem suas métricas e aprimorarem suas estratégias
            de negócio com base em dados sólidos.
          </p>
        </div>
      </div>
      <div className="sobre-imagem">
        <img src={profile-photo} alt="Vinicius" />
      </div>
    </section>
  );
}

export default Sobre;
