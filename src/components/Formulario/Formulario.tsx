import './Formulario.css';
import CampoTexto from '../CampoTexto/CampoTexto';
import CampoCor from '../CampoCor/CampoCor';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Botao from '../Botao/Botao';
import { useState } from 'react'
import { IColaborador } from '../../tipos/IColaborador';
import { ITime } from '../../tipos/ITime';

interface FormularioProps {
    aoCadastrarColab: (colaborador: IColaborador) => void
    cadastrarTime: (time: ITime) => void
    timesNomes: string[]
}

export default function Formulario({aoCadastrarColab, cadastrarTime, timesNomes}:FormularioProps) {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('#6278F2')
    const [mensagemTime, setMensagemTime] = useState('')


    function aoSalvar(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        aoCadastrarColab({
            nome: nome,
            cargo: cargo,
            imagem: imagem || 'https://github.com/alura.png',
            time: time
        })

        // Limpar os campos após o envio do formulário
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        setMensagemTime('')
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
                    aoAlterar={valor => setImagem(valor)}
                />
                
                <ListaSuspensa
                    obrigatorio={true}
                    label="Times"
                    itens={timesNomes}
                    valor={time}
                    aoAlterar = {valor => setTime(valor)}
                />

                <Botao>Criar Card</Botao>
            </form>

            <form onSubmit={evt => {
                evt.preventDefault()
                cadastrarTime({ nome: nomeTime, cor: corTime })
                
                setNomeTime('')
                setCorTime('#6278F2')
                setMensagemTime('Time criado!')
            }}>
            <h2>Preencha os dados para criar um novo time</h2>
                <CampoTexto
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o nome do novo time"
                    valor={nomeTime}
                    aoAlterar = {valor => setNomeTime(valor)}
                />
                
                <CampoCor
                    obrigatorio
                    label="Cor"
                    valor={corTime}
                    aoAlterar = {valor => setCorTime(valor)}
                />
                <span className='mensagem-time-criado'>{mensagemTime}</span>
                <Botao>Criar Time</Botao>
            </form>
        </section>
    )
}