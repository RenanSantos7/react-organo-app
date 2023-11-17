import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

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

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')

    function aoSalvar(event) {
        event.preventDefault();
        console.log('Tá bom, Tá bom!')
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
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
                />

                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}