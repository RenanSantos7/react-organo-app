import './ListaSuspensa.css'

interface ListaSuspensaProps {
    aoAlterar: (valor: string) => void
    obrigatorio: boolean
    label: string
    itens: string[]
    valor: string
}

export default function ListaSuspensa({aoAlterar, itens, label, obrigatorio, valor} : ListaSuspensaProps) {
    function aoDigitar(event: React.ChangeEvent<HTMLSelectElement>) {
        aoAlterar(event.target.value)
    };

    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select
                title={label}
                required={obrigatorio}
                onChange={aoDigitar}
                value={valor}
            >
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}