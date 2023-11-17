import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {
  const times = [
    {nome:'Programação', corDestaque: '#57c278', corFundo: '#d9f7e9'},
    {nome:'Front-End', corDestaque:'#82cffa', corFundo:'#e8f8ff'},
    {nome:'Data Science', corDestaque:'#a6d157', corFundo:'#F0F8E2'},
    {nome:'DevOps', corDestaque:'#d06b69', corFundo:'#fde7e8'},
    {nome:'UX e Design', corDestaque:'#db6ebf', corFundo:'#fae9f5'},
    {nome:'Mobile', corDestaque:'#ffba05', corFundo:'#fff5d9'},
    {nome:'Inovação e Gestão', corDestaque:'#ff8a29', corFundo:'#ffeedf'}
  ]
  const [colaboradores, setColaboradores] = useState([])

  function aoAddNvColaborador(colaborador) {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoCadastrarColab={colaborador => aoAddNvColaborador(colaborador)} />
      {times.map(time => <Time key={time.nome} nome={time.nome} corDestaque={time.corDestaque} corFundo={time.corFundo} />)}
    </div>
  );
}

export default App;
