import './App.css';
import Ciao from './components/Ciao';

function App() {
  return (
    <>
      <Ciao name="Fred" age={45} isMale />
      <Ciao name="Bred" age={51} isMale />
      <Ciao name="Anna" age={24} />
    </>
  );
}

export default App;
