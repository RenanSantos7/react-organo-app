import './Formulario.css';
import CampoTexto from '../CampoTexto';

function Formulario () {
    return(
        <section className="formulario">
            <form>
            <h2>Preencha os dados para criar o cardo do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite o nome" />
                <CampoTexto label="Cargo" placeholder="Digite o cargo" />
                <CampoTexto label="Imagem" placeholder="Cole a URL da imagem" />
            </form>
        </section>
    )
}

export default Formulario