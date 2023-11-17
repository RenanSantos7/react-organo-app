import './CampoTexto.css'

export default function CampoTexto(props) {
    const placeholderMod = `${props.placeholder}...`
    function aoDigitar(event) {
        props.aoAlterar(event.target.value)
    };
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} type='text' placeholder={placeholderMod} required={props.obrigatorio} />
        </div>
    )
}
