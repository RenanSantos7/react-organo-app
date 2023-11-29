import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Time from './components/Time/Time';
import Rodape from './components/Rodape/Rodape';

export default function App() {
  const times = [
    {nome:'Programação', corDestaque: '#57c278', corFundo: '#d9f7e9'},
    {nome:'Front-End', corDestaque:'#82cffa', corFundo:'#e8f8ff'},
    {nome:'Data Science', corDestaque:'#a6d157', corFundo:'#F0F8E2'},
    {nome:'DevOps', corDestaque:'#d06b69', corFundo:'#fde7e8'},
    {nome:'UX e Design', corDestaque:'#db6ebf', corFundo:'#fae9f5'},
    {nome:'Mobile', corDestaque:'#ffba05', corFundo:'#fff5d9'},
    {nome:'Inovação e Gestão', corDestaque:'#ff8a29', corFundo:'#ffeedf'}
  ]

  let timesNomes = times.map(item => `${item.nome}`)
  timesNomes= ['', ...timesNomes]
 
  const colaboradoresOriginais = [
    {
      id: '0',
      nome: 'Monica Hillman',
      cargo: 'Desenvolvedora Front-End e Instrutora na Alura',
      imagem: 'https://github.com/monicahillman.png',
      time: 'Front-End'
    },
    {
      id: '1',
      nome: 'Juliana Amoasei',
      cargo: 'Desenvolvedora de Software e Instrutora na Alura',
      imagem: 'https://github.com/JulianaAmoasei.png',
      time: 'Programação'
    },
    {
      id: '2',
      nome: 'Guilherme Lima',
      cargo: 'Desenvolvedora Front-End e Instrutora na Alura',
      imagem: 'https://github.com/guilhermeonrails.png',
      time: 'Front-End'
    },
    {
      id: '3',
      nome: 'Vinicios Neves',
      cargo: 'Instrutor na Alura',
      imagem: 'https://github.com/viniciosneves.png',
      time: 'DevOps'
    },
    {
      id: '4',
      nome: 'Paulo Silveira',
      cargo: 'Hipster e CEO da Alura',
      imagem:  'https://github.com/Alura.png',
      time: 'Inovação e Gestão'
    },
    {
      id: '5',
      nome: 'Luiz Fernando Ribeiro',
      cargo: 'Instrutor na Alura',
      imagem:  'https://github.com/lfrprazeres.png',
      time: 'Programação'
    },
    {
      id: '6',
      nome: 'Isadora Cardoso',
      cargo: 'Instrutor na Alura',
      imagem:  'https://cdn2.gnarususercontent.com.br/1/1159677/d270e454-a78c-415e-9f1b-dd237137100a.jpg',
      time: 'UX e Design'
    },
  ]

  const [colaboradores, setColaboradores] = useState(colaboradoresOriginais)

  function aoAddNvColaborador(colaborador) {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador() {
    
  }

  return (
    <div className="App">
      <Banner />
    
      <Formulario
        aoCadastrarColab={colaborador => aoAddNvColaborador(colaborador)}
        timesNomes = {timesNomes}
      />
    
      {times.map(time =>
        <Time
          key={time.nome}
          nome={time.nome}
          corDestaque={time.corDestaque}
          corFundo={time.corFundo}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
        />
      )}

      <Rodape />
    </div>
  );
}
