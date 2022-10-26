
import './App.css';
import Condicional from './componentes/condicional';
import Contador from './componentes/contador';

function App() {
  return (
    <div className="App">
      <div className='big'> BarApp</div>
      <br/><br/><br/>
      <Contador/>
      <br/><br/><br/>
      <h1> <Condicional/> </h1>
    </div>
  );
}

export default App;
