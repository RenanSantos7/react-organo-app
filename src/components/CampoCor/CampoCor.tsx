import './CamporCor.css'

interface CampoCorProps {
    obrigatorio: boolean
    label: string
    valor: string
    aoAlterar: (valor: string) => void
}

export default function CamporCor({ obrigatorio = false, label, valor, aoAlterar }: CampoCorProps) {
    function aoEscolher(event: React.ChangeEvent<HTMLInputElement>) {
        aoAlterar(event.target.value)
    }

    return (
        <div className="campo-cor">
            <label>{label}</label>
            <div className='color-input-wrapper'>
                <input
                    type='color'
                    required={obrigatorio}
                    className='input-cor'
                    value={valor}
                    onChange={aoEscolher}
                />
            </div>
        </div>
    )
}
