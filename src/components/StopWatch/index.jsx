import React, { Component } from 'react';

class StopWatch extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
    };
    this.identificator = null;
  }

  tick = () => {
    this.setState({ time: this.state.time + 1 });
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
    this.setState({ time: 0 });
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
        <h2>{time}</h2>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.reset}>reset</button>
      </article>
    );
  }
}

export default StopWatch;
