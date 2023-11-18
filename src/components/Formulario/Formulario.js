import './Formulario.css';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Botao from '../Botao/Botao';
import { useState } from 'react'

export default function Formulario(props) {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    function aoSalvar(event) {
        event.preventDefault();
        props.aoCadastrarColab({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })
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
                    itens={props.timesNomes}
                    valor={time}
                    aoAlterar = {valor => setTime(valor)}
                />

                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}