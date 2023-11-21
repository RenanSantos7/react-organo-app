import './Rodape.css'
import facebookLogo from './fb.png'
import instaLogo from './ig.png'
import twLogo from './tw.png'
import logo from './logo.png'

export default function Rodape(props) {
    return (
        <footer className='footer'>
            <div className='container'>
                <ul>
                    <li><a href='https://facebook.com'><img src={facebookLogo} alt='facebook'/></a></li>
                    <li><a href='https://instagram.com'><img src={instaLogo} alt='instagram'/></a></li>
                    <li><a href='https://twitter.com'><img src={twLogo} alt='facebook'/></a></li>
                </ul>
    
                <a href='#'><img title='Clique para voltar ao início' className='logo' src={logo} alt='Organo Logo' /></a>
    
                <p className='texto'>Desenvolvido por Renan Santos na Alura</p>
            </div>
        </footer>
    )
}
