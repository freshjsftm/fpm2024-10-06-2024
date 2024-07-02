import React from 'react';
import CardUser from '../CardUser';

const WrapperCard = ({user}) => {
  return (
    <div>
      WrapperCard
      <CardUser user={user}/>
    </div>
  );
}

export default WrapperCard;
