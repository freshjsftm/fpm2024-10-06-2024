import React, { Component } from 'react';

class Ciao extends Component {
  constructor() {
    super();
    this.state = {
      isHi: true,
    };
  }
  handlerStateIsHi = () => {
    const { isHi } = this.state;
    this.setState({ isHi: !isHi });
  };
  handlerClickSelect = () => {
    const {
      user: { id } ,
      userSelected,
    } = this.props;
    userSelected(id);
  };
  render() {
    const { isHi } = this.state;
    const {
      user: { name, age, isMale, isSelected },
    } = this.props;
    const colorBG = isSelected ? 'aqua' : '#eee';
    return (
      <article
        onClick={this.handlerClickSelect}
        style={{ backgroundColor: colorBG }}
      >
        <h2>
          {isHi ? 'Hi' : 'Bye'}, {name}! ({age})
        </h2>
        <button onClick={this.handlerStateIsHi}>switch</button>
        <p>gender: {isMale ? 'male' : 'female'} </p>
      </article>
    );
  }
}

export default Ciao;
