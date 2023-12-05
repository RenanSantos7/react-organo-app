import './CamporCor.css'

export default function CamporCor({ obrigatorio, label, valor, aoAlterar }) {
    function aoEscolher(event) {
        aoAlterar(event.target.value)
    }

    return (
        <div className="campo-cor">
            <label>{label}</label>
            <div className='color-input-wrapper'>
                <input className='input-cor' value={valor} onChange={aoEscolher} type='color' required={obrigatorio} />
            </div>
        </div>
    )
}
