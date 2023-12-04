import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Time from './components/Time/Time';
import Rodape from './components/Rodape/Rodape';

export default function App() {
  const [times, setTimes] = useState([
    {nome:'Programação', cor: '#57c278'},
    {nome:'Front-End', cor:'#82cffa'},
    {nome:'Data Science', cor:'#a6d157'},
    {nome:'DevOps', cor:'#d06b69'},
    {nome:'UX e Design', cor:'#db6ebf'},
    {nome:'Mobile', cor:'#ffba05'},
    {nome:'Inovação e Gestão', cor:'#ff8a29'}
  ])

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

  function addNvColaborador(colaborador) {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador() {
    console.log('Deletei')
  }

  function mudaCorTime(cor, nome) {
    setTimes(times.map(time => {
      if(time.nome === nome) {
        time.cor = cor;
      }
      return time;
    }));
  }

  return (
    <div className="App">
      <Banner />
    
      <Formulario
        aoCadastrarColab={colaborador => addNvColaborador(colaborador)}
        timesNomes = {timesNomes}
      />

      <section className='times'>
        <h1>Minha Organização</h1>
        <div className='linha-horizontal'></div>
      
        {times.map(time =>
          <Time
            key={time.nome}
            nome={time.nome}
            cor={time.cor}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
            mudaCor={mudaCorTime}
          />
        )}
      </section>

      <Rodape />
    </div>
  );
}
