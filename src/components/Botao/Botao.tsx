import './Botao.css'
import { ReactElement } from 'react'

interface BotaoProps {
    children: ReactElement | string
}

export default function Botao(props: BotaoProps) {
    return (
        <button className='botao'>
            {props.children}
        </button>
    )
}
