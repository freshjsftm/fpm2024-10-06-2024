import React from 'react';
import { ThemeContext } from '../../contexts';
import WindowWork from '../../components/WindowWork';
import Tree from '../../components/Tree';
import CONSTANTS from '../../constants';
const { THEME } = CONSTANTS;

const HomePage = () => {
  const renderHomePage = ([theme]) => {
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
  return <ThemeContext.Consumer>{renderHomePage}</ThemeContext.Consumer>;
};

export default HomePage;
