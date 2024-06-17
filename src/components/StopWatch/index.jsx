import React, { Component } from 'react';

class StopWatch extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };
    this.identificator = null;
  }

  tick = () => {
    //const { time } = this.state;
    // state inmutable!!! copy for state
    //const copyTime = new Date(time.valueOf());
    //copyTime.setSeconds(copyTime.getSeconds() + 1);
    // виклик setState нижче рядком НЕ гарантує негайну зміну стану!!!
    //this.setState({ time: copyTime });
    
    // виклик setState нижче рядком гарантовано запуститься після застосування оновлення
    this.setState((state, props) => {
      const { time } = state;
      const copyTime = new Date(time.valueOf());
      copyTime.setSeconds(copyTime.getSeconds() + 1);
      return { time: copyTime };
    });
  };
  start = () => {
    if (this.identificator === null) {
      this.identificator = setInterval(this.tick, 1000);
    }
  };
  stop = () => {
    clearInterval(this.identificator);
    this.identificator = null;
  };
  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
  };

  componentDidMount() {
    this.start();
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    this.stop();
  }

  render() {
    const { time } = this.state;

    return (
      <article>
        <h2>{time.toLocaleTimeString('en-GB')}</h2>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.reset}>reset</button>
      </article>
    );
  }
}

export default StopWatch;
