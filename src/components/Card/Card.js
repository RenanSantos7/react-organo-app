import './Card.css'

export default function Card(props) {
    return (
        <article className='card'>
            <img alt='foto do colaborador' src={props.imagem || 'https://github.com/RenanSantos7.png'} />
            <div className='text-container' style={{borderTopColor:props.corDestaque}}>
                <h4>{props.nome || 'Renan Santos'}</h4>
                <p>{props.cargo || 'Aluno na Alura'}</p>
            </div>
        </article>
    )
}
