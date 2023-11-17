import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  function aoAddNvColaborador(colaborador) {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoCadastrarColab={colaborador => aoAddNvColaborador(colaborador)} />
    </div>
  );
}

export default App;
