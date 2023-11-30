import './Time.css'
import Card from '../Card/Card'

export default function Time({nome, corDestaque, corFundo, colaboradores, aoDeletar, mudaCor}) {

    if (colaboradores.length <= 0) {
        return null
    }

    return (
        <section className='time' style={{ backgroundColor: corFundo }}>
            <div className='color-input-wrapper'>
                <input
                    type='color'
                    className='input-cor'
                    value={corDestaque}
                    onChange={evt => {
                        mudaCor(evt.target.value, nome)
                    }}
                />
            </div>

            <h2>{nome}</h2>
            <div className='linha-horizontal' style={{ backgroundColor: corDestaque }}></div>
            
            <div className='cards'>
                {colaboradores.map((colaborador, indice) =>
                    <Card
                        key={indice}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem || 'https://github.com/Alura.png'}
                        corDestaque={corDestaque}
                        aoDeletar={aoDeletar}
                    />
                )}
            </div>
        </section>
    )
}
