import './App.css';
import Button from './components/Button';
import Ciao from './components/CiaoBlockParent/Ciao';

function App() {
  return (
    <>
      <Button content="string" />
      <Ciao
        user={{ id: 24, name: 'Max', age: 33, isMale: true, isSelected: false }}
      />
    </>
  );
}

export default App;
