import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Contato.css"; 

function Contato() {
  return (
    <section id="contato" className="contato">
      <h2>Entre em Contato</h2>
      <p>Fique à vontade para me chamar nas redes sociais ou enviar um e-mail!</p>

      <div className="contato-links">
        <a href="mailto:seuemail@email.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope /> E-mail
        </a>
        <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://instagram.com/seuusuario" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Instagram
        </a>
      </div>

      <form className="contato-form">
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu e-mail" required />
        <textarea placeholder="Sua mensagem" rows="4" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contato;
