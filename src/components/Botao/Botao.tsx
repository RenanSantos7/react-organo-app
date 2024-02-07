import './Botao.css'
import { ReactElement } from 'react'

interface BotaoProps {
    children: ReactElement
}

export default function Botao(props: BotaoProps) {
    return (
        <button className='botao'>
            {props.children}
        </button>
    )
}
