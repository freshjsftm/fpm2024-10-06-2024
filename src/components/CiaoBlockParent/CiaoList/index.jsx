import React, { Component } from 'react';
import Ciao from '../Ciao';

class CiaoList extends Component {
  mapUsers = (user) => (
    <Ciao key={user.id} user={user} 
    userSelected={this.props.userSelected} />
  );

  render() {
    const { users } = this.props;
    return (
      <>
        <section>{users.map(this.mapUsers)}</section>
      </>
    );
  }
}

export default CiaoList;
