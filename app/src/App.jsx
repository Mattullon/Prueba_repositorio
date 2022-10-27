
import './App.css';
import Condicional from './componentes/condicional';
import Contador from './componentes/contador';

function App() {
  return (
    <div className="App">
      <div className='big'> BarApp</div>
      <br/><br/><br/>
      <Contador/>
      <line></line>
      <Condicional/>
    </div>
  );
}

export default App;
