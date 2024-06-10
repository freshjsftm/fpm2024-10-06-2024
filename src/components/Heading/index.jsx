import React from 'react';
import './style.css';
import Button from '../Button';


const Heading = () => {
  return (
    <h1 title="qwerty" className="heading">
      Hi!
      <Button content="!!!" number="000"/>
      <em className="inside">Qwerty</em>
    </h1>
  );
};

export default Heading;
