import Header from "../../components/Header/Header";
import Sobre from "../../components/Sobre/Sobre";
import Formacao from "../../components/Formacao/Formacao";
import Habilidades from "../../components/Habilidades/Habilidades";
import Projetos from "../../components/Projetos/Projetos";
import Contato from "../../components/Contato/Contato";

function Home() {
  return (
    <div>
      <Header /> 
      <Sobre />
      <Formacao />
      <Habilidades />
      <Projetos />
      <Contato />
    </div>
  );
}

export default Home;
