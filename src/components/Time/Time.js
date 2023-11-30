import Card from '../Card/Card'
import './Time.css'

export default function Time(props) {

    if (props.colaboradores.length <= 0) {
        return null
    }

    return (
        <section className='time' style={{ backgroundColor: props.corFundo }}>
            <div className='color-input-wrapper'>
                <input type='color' className='input-cor' value={props.corDestaque} />
            </div>
            <h2>{props.nome}</h2>
            <div className='linha-horizontal' style={{ backgroundColor: props.corDestaque }}></div>
            <div className='cards'>
                {props.colaboradores.map((colaborador, index) =>
                    <Card
                        key={index}
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
