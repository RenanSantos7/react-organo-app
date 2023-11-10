import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react'

export default function Formulario() {
    const times = [
        '',
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Inovação e Gestão'
    ]

    // 'useState' gera um array com dois valores
    // [valor, setValor] separa esse array e atribui cada
    // um desses valores a uma dessas variáveis
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    function aoSalvar(event) {
        event.preventDefault();
        console.log('Form foi submetido: ', nome, cargo, imagem, time)
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o cardo do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome"
                    valor={nome}
                    aoAlterar = {valor => setNome(valor)}
                />
                
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite o cargo"
                    valor={cargo}
                    aoAlterar = {valor => setCargo(valor)}
                />

                <CampoTexto
                    label="Imagem"
                    placeholder="Cole a URL da imagem"
                    valor={imagem}
                    aoAlterar = {valor => setImagem(valor)}
                />
                
                <ListaSuspensa
                    obrigatorio={true}
                    label="Times"
                    itens={times}
                    valor={time}
                    aoAlterar = {valor => setTime(valor)}
                />

                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}