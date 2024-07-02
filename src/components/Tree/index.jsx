import React from 'react';
import Parent from './Parent';

const Tree = ({user}) => {
  return (
    <div>
      <h2>child</h2>
      <Parent user={user}/>
    </div>
  );
}

export default Tree;