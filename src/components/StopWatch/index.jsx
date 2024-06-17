import React, { Component } from 'react';

class StopWatch extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
    };
    this.identificator = null;
    // this.start(); // не можна в контрукторі викликати метод який встановлює новий стан!!!
    console.log('constructor');
  }
  start = () => {
    this.identificator = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  };
  stop = () => {
    clearInterval(this.identificator);
    this.identificator = null;
  }
// викликається ОДИН раз після першого рендера!!!!
  componentDidMount(){
    this.start(); // місце для виклику функцій, які встановлюють новий стан при монтуванні компонента
    console.log('componentDidMount');
  }
// викликається кожен раз після другого і більше рендера!!!!
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  // викликається перед розмонтуванням(знищенням) компонента
  componentWillUnmount(){
    this.stop();
    console.log('componentWillUnmount');
  }

  render() {
    const { time } = this.state;
    // this.start();  // не можна викликати метод який встановлює новий стан через те, що це приводить до рекурсивного виклику!!!!
    console.log('render');
    return (
      <article>
        <h2>{time}</h2>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button>reset</button>
      </article>
    );
  }
}

export default StopWatch;
