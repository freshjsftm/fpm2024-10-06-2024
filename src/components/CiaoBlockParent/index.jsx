import React, { Component } from 'react';
import CiaoList from './CiaoList';
import SortedGroupCiaoList from './SortedGroupCiaoList';
import SelectedCiaoList from './SelectedCiaoList';

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

class CiaoBlockParent extends Component {
  constructor() {
    super();
    this.state = {
      users: USERS_FROM_DB.map((user) => ({
        ...user,
        isSelected: false,
      })),
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

  userSelected = (id) => {
    const { users } = this.state;
    this.setState({
      users: users.map((user) => ({
        ...user,
        isSelected: user.id === id ? !user.isSelected : user.isSelected,
      })),
    });
  };
  render() {
    const { users, isUpSortAge, isUpSortName } = this.state;
    return (
      <>
        <SortedGroupCiaoList
          isUpSortAge={isUpSortAge}
          isUpSortName={isUpSortName}
          sortUsersByName={this.sortUsersByName}
          sortUsersByAge={this.sortUsersByAge}
        />
        <CiaoList users={users} userSelected={this.userSelected} />
        <hr />
        <SelectedCiaoList users={users} />
      </>
    );
  }
}

export default CiaoBlockParent;
