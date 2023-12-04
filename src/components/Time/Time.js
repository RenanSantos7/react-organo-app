import './Time.css'
import Card from '../Card/Card'
import hexToRgba from 'hex-to-rgba';

export default function Time({ nome, cor, colaboradores, aoDeletar, mudaCor }) {

    if (colaboradores.length <= 0) {
        return null
    }

    return (
        <section className='time' style={{ backgroundColor: hexToRgba(cor, 0.2), backgroundImage: 'url(/images/fundo.png)' }}>
            <div className='color-input-wrapper'>
                <input
                    type='color'
                    className='input-cor'
                    value={cor}
                    onChange={evt => {
                        mudaCor(evt.target.value, nome)
                    }}
                />
            </div>

            <h2>{nome}</h2>
            <div className='linha-horizontal' style={{ backgroundColor: cor }}></div>

            <div className='cards'>
                {colaboradores.map((colaborador, indice) =>
                    <Card
                        key={indice}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem || 'https://github.com/Alura.png'}
                        cor={cor}
                        aoDeletar={aoDeletar}
                    />
                )}
            </div>
        </section>
    )
}
