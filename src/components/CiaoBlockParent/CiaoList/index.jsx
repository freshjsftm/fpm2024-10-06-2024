import React from 'react';
import Ciao from '../Ciao';

function CiaoList({ users, userSelectedState }) {
  
  const userSelected = (id) => {
    const newUsers = users.map((user) => ({
      ...user,
      isSelected: user.id === id ? !user.isSelected : user.isSelected,
    }));
    userSelectedState(newUsers);
  };

  const mapUsers = (user) => (
    <Ciao key={user.id} user={user} userSelected={userSelected} />
  );

  return <section>{users.map(mapUsers)}</section>;
}

export default CiaoList;
