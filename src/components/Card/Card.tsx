import './Card.css'
import { IoClose } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IColaborador } from '../../tipos/IColaborador';

interface CardProps {
    colaborador: IColaborador
    cor: string
    aoDeletar: (id:string | undefined) => void
    aoFavoritar: (id: string | undefined) => void
}

export default function Card({ colaborador, cor, aoDeletar, aoFavoritar }: CardProps) {
    function favoritar() {
        aoFavoritar(colaborador.id)
    }
    
    const propsFavorito = {
        size: '25px',
        className: 'botao-favoritar',
        onClick: favoritar
    }

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
                    <div className='favoritar'>
                        {colaborador.favorito
                            ? <FaHeart {...propsFavorito} color='red' />
                            : <FaRegHeart {...propsFavorito} />
                        }
                    </div>
                </div>
            </article>
        </div>
    )
}
