import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const aoAdicionar = (colaborador) => {
    
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores)
  }
  return (
    <div className="App">
      <Banner />
      <Formulario aoCadastrar={colaborador => aoAdicionar(colaborador)} />
      <Time nome="Programação"/>
      <Time nome="Frontend"/>
      <Time nome="Data Science"/>
      <Time nome="DevOps"/>

    </div>
  );
}

export default App;
