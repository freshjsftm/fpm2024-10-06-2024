import React from 'react';
import UsersLoader from '../components/UsersLoader';
import { WithTheme } from '../components/HOCs';
import CONSTANTS from '../constants';
const { THEME } = CONSTANTS;

const UsersLoaderPage = ({ theme }) => {
  const isLight = theme === THEME.LIGHT;
  const styles = {
    backgroundColor: isLight ? 'white' : 'black',
    color: isLight ? 'black' : 'white',
  };
  return (
    <div style={styles}>
      <UsersLoader />
    </div>
  );
};

export default WithTheme(UsersLoaderPage);
