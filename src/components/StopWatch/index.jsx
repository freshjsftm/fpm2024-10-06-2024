import React, { Component } from 'react';
import styles from './StopWatch.module.css';

class StopWatch extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };
    this.identificator = null;
  }

  tick = () => {
    this.setState((state, props) => {
      const { time } = state; //12
      const copyTime = new Date(time.valueOf()); //12
      copyTime.setSeconds(copyTime.getSeconds() + 1); //12+1
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
      <article className={styles.container}>
        <h2 className={styles.heading}>{time.toLocaleTimeString('en-GB')}</h2>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.reset}>reset</button>
      </article>
    );
  }
}

export default StopWatch;
