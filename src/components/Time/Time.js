import Card from '../Card/Card'
import './Time.css'

export default function Time(props) {

    if (props.colaboradores.length > 0) {
        return null
    }

    return (
        <section className='time' style={{ backgroundColor: props.corFundo }}>
            <h3>{props.nome}</h3>
            <div className='linha-horizontal' style={{ backgroundColor: props.corDestaque }}></div>
            <div className='cards'>
                {props.colaboradores.map(colaborador =>
                    <Card
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem || 'https://github.com/Alura.png'}
                        corDestaque={props.corDestaque}
                        aoDeletar={props.aoDeletar}
                    />
                )}
            </div>
        </section>
    )
}
