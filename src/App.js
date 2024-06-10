import './App.css';
import Button from './components/Button';
import Heading from './components/Heading';

function App() {
  return (
    <>
      <Heading />
      <Button content="new button 1 content" number="12" />
      <Button content="new button 2 content" number="56" />
      <Button content="new button 3 content" number="77" />
    </>
  );
}

export default App;
