import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `Blabla... ${props.placeholder}...`;
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto;