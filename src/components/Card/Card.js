import './Card.css'

export default function Card({nome, imagem, cargo, corDestaque}) {
    return (
        <article className='card'>
            <img alt={nome} src={imagem} />
            <div className='text-container' style={{borderTopColor:corDestaque}}>
                <h4>{nome}</h4>
                <p>{cargo}</p>
            </div>
        </article>
    )
}
