import './Time.css'
import Card from '../Card/Card'
import hexToRgba from 'hex-to-rgba';

export default function Time({ time, colaboradores, aoDeletar, mudaCor }) {

    if (colaboradores.length <= 0) {
        return null
    }

    return (
        <section className='time' style={{ backgroundColor: hexToRgba(time.cor, 0.2), backgroundImage: 'url(/images/fundo.png)' }}>
            <div className='color-input-wrapper'>
                <input
                    type='color'
                    className='input-cor'
                    value={time.cor}
                    onChange={evt => {
                        mudaCor(evt.target.value, time.id)
                    }}
                />
            </div>

            <h2>{time.nome}</h2>
            <div className='linha-horizontal' style={{ backgroundColor: time.cor }}></div>

            <div className='cards'>
                {colaboradores.map((colaborador, indice) =>
                    <Card
                        key={indice}
                        colaborador={colaborador}
                        cor={time.cor}
                        aoDeletar={aoDeletar}
                    />
                )}
            </div>
        </section>
    )
}
