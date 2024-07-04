import React from 'react';
import { WithTheme } from '../../components/HOCs';
import WindowWork from '../../components/WindowWork';
import Tree from '../../components/Tree';
import CONSTANTS from '../../constants';
const { THEME } = CONSTANTS;

const HomePage = ({ theme }) => {
  const isLight = theme === THEME.LIGHT;
  const styles = {
    backgroundColor: isLight ? 'white' : 'black',
    color: isLight ? 'black' : 'white',
  };
  return (
    <div style={styles}>
      <WindowWork />
      <Tree />
    </div>
  );
};

export default WithTheme(HomePage);
