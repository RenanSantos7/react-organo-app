import './CampoTexto.css'

interface CampoTextoProps {
    aoAlterar: (valor: string) => void
    label: string
    valor: string
    placeholder: string
    obrigatorio?: boolean
    tipo?: 'text' | 'password' | 'date' | 'email' | 'number'
}

export default function CampoTexto({
    aoAlterar,
    label,
    placeholder,
    valor,
    obrigatorio = false,
    tipo = 'text'
}: CampoTextoProps) {
    const placeholderMod = `${placeholder}...`
    
    function aoDigitar(event: React.ChangeEvent<HTMLInputElement>) {
        aoAlterar(event.target.value)
    }
    
    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input
                type={tipo}
                value={valor}
                onChange={aoDigitar}
                placeholder={placeholderMod}
                required={obrigatorio} />
        </div>
    )
}
