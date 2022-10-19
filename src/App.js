import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";

function App() {
  const times = [
    {
      nome: "Road Riders",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Mountain Bikers",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff",
    },
    {
      nome: "Team Sprint",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2",
    },
    {
      nome: "BMX Freestyle",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8",
    },
    {
      nome: "Time Trial",
      corPrimaria: "#db6ebf",
      corSecundaria: "#fae9f5",
    },
    {
      nome: "Gravel",
      corPrimaria: "#ffba05",
      corSecundaria: "#fff5d9",
    },
    {
      nome: "Fixed Gear",
      corPrimaria: "#ff8a29",
      corSecundaria: "#ffeedf",
    },
  ];
  const [colaboradores, setColaboradores] = useState([]);
  const aoAdicionar = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoCadastrar={(colaborador) => aoAdicionar(colaborador)}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corDestaque={time.corPrimaria}
          corDeFundo={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
