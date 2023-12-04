import './Card.css'
import { IoClose } from "react-icons/io5";

export default function Card({colaborador, cor, aoDeletar}) {
    return (
        <div className='card-wrapper'>
            <IoClose
                className='deletar'
                onClick={() => {aoDeletar(colaborador.id)}}
            />
            
            <article className='card'>
                <img alt={colaborador.nome} src={colaborador.imagem} />
                <div className='text-container' style={{borderTopColor: cor}}>
                    <h4>{colaborador.nome}</h4>
                    <p>{colaborador.cargo}</p>
                </div>
            </article>
        </div>
    )
}
