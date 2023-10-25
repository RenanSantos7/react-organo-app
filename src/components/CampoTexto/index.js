import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholderMod = `${props.placeholder}...`
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input type='text' placeholder={placeholderMod} />
        </div>
    )
}

export default CampoTexto
