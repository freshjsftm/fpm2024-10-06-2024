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
      //додати властивість для напрямку сортування за іменем
    };
  }

  //додати функцію для  сортування за іменем
  sortUsersByName = () => {}

  sortUsersByAge = () => {
    const { users, isUpSortAge } = this.state;
    // поверхнева копія використовується для об'єктів першого порядку
    // об'єкти першого порядку - це такі об'єкти значеннями властивостей яких є примітиви
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
    const { users, isUpSortAge } = this.state;
    return (
      <>
      додати кнопку для сортування за іменем
        <button onClick={this.sortUsersByAge}>
          sort {isUpSortAge ? 'Up' : 'Down'} by age{' '}
        </button>
        <section>{users.map(this.mapUsers)}</section>
      </>
    );
  }
}

export default CiaoList;
