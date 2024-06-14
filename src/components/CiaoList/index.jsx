import React, { Component } from 'react';
import Ciao from '../Ciao';

const USERS_FROM_DB = [
  {
    id: 6,
    name: 'Fred',
    age: 45,
    isMale: true,
  },
  {
    id: 2,
    name: 'Bred',
    age: 51,
    isMale: true,
  },
  {
    id: 23,
    name: 'Anna',
    age: 24,
    isMale: false,
  },
];

class CiaoList extends Component {
  constructor() {
    super();
    this.state = {
      users: USERS_FROM_DB.map((user) => ({ ...user, isSelected: false })),
      isUpSortAge: true,
      isUpSortName: true,
    };
  }

  sortUsersByName = () => {
    const { users, isUpSortName } = this.state;
    this.setState({
      users: users.toSorted((userA, userB) => {
        const nameA = userA.name.toUpperCase();
        const nameB = userB.name.toUpperCase();
        if (nameA < nameB) {
          return isUpSortName ? -1 : 1;
        }
        if (nameA > nameB) {
          return isUpSortName ? 1 : -1;
        }
        return 0;
      }),
      isUpSortName: !isUpSortName,
    });
  };

  sortUsersByAge = () => {
    const { users, isUpSortAge } = this.state;
    this.setState({
      users: users.toSorted((userA, userB) =>
        isUpSortAge ? userA.age - userB.age : userB.age - userA.age
      ),
      isUpSortAge: !isUpSortAge,
    });
  };
  //батьківський елемент описує механізм через який дочірній елемент зможе змінити стан батьківського
  userSelected = (id) => {
    const { users } = this.state;
    this.setState({
      users: users.map((user) => ({
        ...user,
        isSelected: user.id === id ? !user.isSelected : user.isSelected,
      })),
    });
  };

  mapUsers = (user) => (
    <Ciao key={user.id} user={user} userSelected={this.userSelected} />
  );

  render() {
    const { users, isUpSortAge, isUpSortName } = this.state;
    return (
      <>
        <button onClick={this.sortUsersByName}>
          sort {isUpSortName ? 'Up' : 'Down'} by name
        </button>
        <button onClick={this.sortUsersByAge}>
          sort {isUpSortAge ? 'Up' : 'Down'} by age
        </button>
        <section>{users.map(this.mapUsers)}</section>
      </>
    );
  }
}

export default CiaoList;
