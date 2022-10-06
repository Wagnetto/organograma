import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";

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
    </div>
  );
}

export default App;
