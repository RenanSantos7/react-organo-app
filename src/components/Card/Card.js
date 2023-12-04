import './Card.css'
import { IoClose } from "react-icons/io5";

export default function Card({nome, imagem, cargo, cor, aoDeletar}) {
    return (
        <div className='card-wrapper'>
            <IoClose className='deletar' onClick={aoDeletar} />
            <article className='card'>
                <img alt={nome} src={imagem} />
                <div className='text-container' style={{borderTopColor:cor}}>
                    <h4>{nome}</h4>
                    <p>{cargo}</p>
                </div>
            </article>
        </div>
    )
}
