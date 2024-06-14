import React, { Component } from 'react';

class SortedGroupCiaoList extends Component {
  render() {
    const { isUpSortAge, isUpSortName, sortUsersByName, sortUsersByAge } =
      this.props;
    return (
      <div>
        SortedGroupCiaoList
        <button onClick={sortUsersByName}>
          sort {isUpSortName ? 'Up' : 'Down'} by name
        </button>
        <button onClick={sortUsersByAge}>
          sort {isUpSortAge ? 'Up' : 'Down'} by age
        </button>
      </div>
    );
  }
}

export default SortedGroupCiaoList;
