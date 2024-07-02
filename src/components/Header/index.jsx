import React from 'react';
import Menu from '../Menu';
import { UserContext } from '../../contexts';

const Header = () => {
  return (
    <UserContext.Consumer>
      {({ava}) => {
        return (
          <header>
            <Menu />
            <img src={ava} alt="ava" width={50} />
          </header>
        );
      }}
    </UserContext.Consumer>
  );
};

export default Header;
