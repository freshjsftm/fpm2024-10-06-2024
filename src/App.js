import './App.css';
import Heading from './components/Heading';
import StopWatch from './components/StopWatch';
import StopWatchTimeOut from './components/StopWatchTimeOut';

function App() {
  return (
    <>
      <StopWatch />
      <Heading />
      <StopWatchTimeOut />
    </>
  );
}

export default App;
