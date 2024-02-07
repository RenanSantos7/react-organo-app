import './Banner.css'

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}

export default function Banner({enderecoImagem, textoAlternativo}:BannerProps) {
    return (
        <header className="banner">
            {/* <img src="images\HeaderHeader_total.png" alt="banner principal da página" /> */}
            <img src={enderecoImagem} alt={textoAlternativo} />
        </header>
    )
}
