import React from 'react';
import SubParent from '../SubParent';

const Parent = ({user}) => {
  return (
    <div>
      <h2>child</h2>
      <SubParent user={user}/>
    </div>
  );
}

export default Parent;