import './ListaSuspensa.css'

export default function ListaSuspensa(props) {
    function aoDigitar(event) {
        props.aoAlterar(event.target.value)
    };

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.obrigatorio} onChange={aoDigitar}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}