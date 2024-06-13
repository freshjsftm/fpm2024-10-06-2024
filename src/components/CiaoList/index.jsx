import React, { Component } from 'react';
import Ciao from '../Ciao';

class CiaoList extends Component {
  constructor() {
    super();
    this.state = {
      users: [
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
      ],
      isUpSortAge: true,
      isUpSortName: true,
    };
  }

  sortUsersByName = () => {
    const { users, isUpSortName } = this.state;
    this.setState({
      users: users.toSorted((userA, userB) => {
        const nameA = userA.name.toUpperCase(); // ignore upper and lowercase
        const nameB = userB.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return isUpSortName?-1:1;
        }
        if (nameA > nameB) {
          return isUpSortName?1:-1;
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

  mapUsers = ({ id, name, age, isMale }) => (
    <Ciao key={id} name={name} age={age} isMale={isMale} />
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
