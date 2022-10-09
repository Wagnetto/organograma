import "./Time.css";

const Time = (props) => {
  return (
    <section
      className="time"
      style={{
        backgroundColor: props.corDeFundo,
      }}
    >
      <h3 style={{ borderColor: props.corDestaque }}>{props.nome}</h3>
    </section>
  );
};

export default Time;
