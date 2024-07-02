import React from 'react';
import WrapperCard from '../WrapperCard';

const Child = ({user}) => {
  return (
    <div>
      <h2>child</h2>
      <WrapperCard user={user}/>
    </div>
  );
}

export default Child;
