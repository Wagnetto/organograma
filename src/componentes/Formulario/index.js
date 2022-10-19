import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";

import "./Formulario.css";

const Formulario = (props) => {
  

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState('');

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoCadastrar({
      nome, 
      cargo,
      imagem,
      time
    })
    console.log("Form foi submetido =>", nome, cargo, imagem, time);
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  };
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Fill the data to create a card</h2>
        <CampoTexto
          obrigatorio={true}
          label="Name"
          placeholder="a name"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Role"
          placeholder="a role"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto 
          label="Image" 
          placeholder="an image address" 
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />

        <ListaSuspensa 
          obrigatorio={true} 
          label="Team" 
          itens={props.times}
          valor={time} 
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>Create Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
