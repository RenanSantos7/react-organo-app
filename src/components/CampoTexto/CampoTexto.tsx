import './CampoTexto.css'

interface CampoTextoProps {
    aoAlterar: (valor: string) => void
    label: string
    valor: string
    placeholder: string
    obrigatorio?: boolean
}

export default function CampoTexto({aoAlterar, label, placeholder, valor, obrigatorio = false}: CampoTextoProps) {
    const placeholderMod = `${placeholder}...`
    
    function aoDigitar(event: React.ChangeEvent<HTMLInputElement>) {
        aoAlterar(event.target.value)
    }
    
    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input
                type='text'
                value={valor}
                onChange={aoDigitar}
                placeholder={placeholderMod}
                required={obrigatorio} />
        </div>
    )
}
