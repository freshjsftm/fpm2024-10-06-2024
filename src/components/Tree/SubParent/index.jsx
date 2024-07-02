import React from 'react';
import Child from '../Child';

const SubParent = ({user}) => {
  return (
    <div>
      <h2>child</h2>
      <Child user={user}/>
    </div>
  );
}

export default SubParent;