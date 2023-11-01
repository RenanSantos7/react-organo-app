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

    function aoSalvar(event) {
        event.preventDefault();
        console.log('Tá bom, Tá bom!')
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o cardo do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o cargo" />
                <CampoTexto label="Imagem" placeholder="Cole a URL da imagem" />
                <ListaSuspensa obrigatorio={true} label="Times" itens={times} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}