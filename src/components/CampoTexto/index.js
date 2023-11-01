import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholderMod = `${props.placeholder}...`
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input type='text' placeholder={placeholderMod} required={props.obrigatorio} />
        </div>
    )
}

export default CampoTexto
