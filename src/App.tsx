import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Time from './components/Time/Time';
import Rodape from './components/Rodape/Rodape';
import { IColaborador } from './tipos/IColaborador';
import { ITime } from './tipos/ITime';
import { colaboradoresOriginais } from './data/colaboradoresOriginais';
import { timesOriginais } from './data/times';

export default function App() {
  const [times, setTimes] = useState(timesOriginais)

  let timesNomes = times.map(item => `${item.nome}`)
  timesNomes= ['', ...timesNomes]
 
  const [colaboradores, setColaboradores] = useState(colaboradoresOriginais)

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
