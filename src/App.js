import './App.css';
import Ciao from './components/Ciao';


function App() {
  return (
    <>
      <Ciao name="Fred" age={45} isMale={true}/>
      <Ciao name="Bred" age={51} isMale={true}/>
      <Ciao name="Anna" age={24} isMale={false}/>
    </>
  );
}

export default App;
