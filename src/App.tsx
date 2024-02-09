import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Time from './components/Time/Time';
import Rodape from './components/Rodape/Rodape';
import { IColaborador } from './tipos/IColaborador';
import { ITime } from './tipos/ITime';

export default function App() {
  const [times, setTimes] = useState([
    {nome:'Programação', cor: '#57c278', id: uuidv4()},
    {nome:'Front-End', cor:'#82cffa', id: uuidv4()},
    {nome:'Data Science', cor:'#a6d157', id: uuidv4()},
    {nome:'DevOps', cor:'#d06b69', id: uuidv4()},
    {nome:'UX e Design', cor:'#db6ebf', id: uuidv4()},
    {nome:'Mobile', cor:'#ffba05', id: uuidv4()},
    {nome:'Inovação e Gestão', cor:'#ff8a29', id: uuidv4()}
  ])

  let timesNomes = times.map(item => `${item.nome}`)
  timesNomes= ['', ...timesNomes]
 
  const colaboradoresOriginais = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Monica Hillman',
      cargo: 'Desenvolvedora Front-End e Instrutora na Alura',
      imagem: 'https://github.com/monicahillman.png',
      time: 'Front-End'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Rafa Ballerini',
      cargo: 'Desenvolvedora de software, instrutora e criadora de conteúdo',
      imagem: 'https://github.com/rafaballerini.png',
      time: 'Data Science'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Juliana Amoasei',
      cargo: 'Desenvolvedora de Software e Instrutora na Alura',
      imagem: 'https://github.com/JulianaAmoasei.png',
      time: 'Programação'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Guilherme Lima',
      cargo: 'Desenvolvedora Front-End e Instrutora na Alura',
      imagem: 'https://github.com/guilhermeonrails.png',
      time: 'Front-End'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Vinicios Neves',
      cargo: 'Instrutor na Alura',
      imagem: 'https://github.com/viniciosneves.png',
      time: 'DevOps'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Paulo Silveira',
      cargo: 'Hipster e CEO da Alura',
      imagem:  'https://github.com/Alura.png',
      time: 'Inovação e Gestão'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Luiz Fernando Ribeiro',
      cargo: 'Instrutor na Alura',
      imagem:  'https://github.com/lfrprazeres.png',
      time: 'Programação'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Isadora Cardoso',
      cargo: 'Instrutor na Alura',
      imagem:  'https://cdn2.gnarususercontent.com.br/1/1159677/d270e454-a78c-415e-9f1b-dd237137100a.jpg',
      time: 'UX e Design'
    },
  ]

  const [colaboradores, setColaboradores] = useState<IColaborador[]>(colaboradoresOriginais)

  function addNovoColaborador(colaborador: IColaborador) {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(id: string | undefined) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudaCorTime(cor: string, id: string | undefined) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime: ITime) {
    setTimes([...times, {...novoTime, id:uuidv4()}])
  }

  function resolverFavorito(id: string | undefined) {
    setColaboradores(colaboradores.map(
      colaborador => {
        if (colaborador.id === id) {
          colaborador.favorito = !colaborador.favorito
        }

        return colaborador
      }
    ))
  }

  return (
    <div className="App">
      <Banner enderecoImagem='/images/HeaderHeader_total.png' />
    
      <Formulario
        cadastrarTime={cadastrarTime}
        aoCadastrarColab={colaborador => addNovoColaborador(colaborador)}
        timesNomes = {timesNomes}
      />

      <section className='times'>
        <h1>Minha Organização</h1>
        <div className='linha-horizontal'></div>
      
        {times.map(time =>
          <Time
            key={time.id}
            time={time}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
            mudaCor={mudaCorTime}
            aoFavoritar={resolverFavorito}
          />
        )}
      </section>

      <Rodape />
    </div>
  );
}
