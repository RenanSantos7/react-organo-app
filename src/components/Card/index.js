import './Card.css'

export default function Card(props) {
    return (
        <article className='card'>
            <img alt='foto do colaborador' src={props.imagem} />
            <div className='text-container'>
                <h4>{props.nome}</h4>
                <p>{props.cargo}</p>
            </div>
        </article>
    )
}
