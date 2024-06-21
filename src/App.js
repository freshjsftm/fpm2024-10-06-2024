import './App.css';
import Button from './components/Button';
import Ciao from './components/CiaoBlockParent/Ciao';

function App() {
  return (
    <>
      <Button content="string"/>
      <Ciao user={{}} userSelected={() => {}} />
    </>
  );
}

export default App;
