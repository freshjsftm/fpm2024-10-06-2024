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
  render() {
    const { isHi } = this.state;
    const { id, name, age, isMale, isSelected, userSelected } = this.props;
    const colorBG = isSelected ? 'aqua':'#eee';
    return (
      <article onClick={()=>{userSelected(id)}} style={{backgroundColor:colorBG}}>
        <h2>{isHi ? 'Hi' : 'Bye'}, {name}! ({age})</h2>
        <button onClick={this.handlerStateIsHi}>switch</button>
        <p>gender: {isMale ? 'male' : 'female'} </p>
      </article>
    );
  }
}

export default Ciao;
