import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

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

    return(
        <section className="formulario">
            <form>
            <h2>Preencha os dados para criar o cardo do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite o nome" />
                <CampoTexto label="Cargo" placeholder="Digite o cargo" />
                <CampoTexto label="Imagem" placeholder="Cole a URL da imagem" />
                <ListaSuspensa label="Times" itens={times} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}