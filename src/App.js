import { Component } from 'react';
import './App.css';
import StopWatch from './components/StopWatch';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }
  render() {
    const { isVisible } = this.state;
    return (
      <>
        <button
          onClick={() => {
            this.setState({ isVisible: !isVisible });
          }}
        >
          switch {isVisible ? 'hidden' : 'visible'}
        </button>
        {isVisible && <StopWatch />}
      </>
    );
  }
}

export default App;
