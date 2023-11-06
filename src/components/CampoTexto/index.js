import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholderMod = `${props.placeholder}...`

    let valor = 'Guilherme Silveira';
    function aoDigitar(event) {
        valor = event.target.value
        console.log(valor)
    };

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitar} type='text' placeholder={placeholderMod} required={props.obrigatorio} />
        </div>
    )
}

export default CampoTexto
