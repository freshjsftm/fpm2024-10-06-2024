import React from 'react';
import WindowWork from '../../components/WindowWork';
import Tree from '../../components/Tree';

const HomePage = ({user}) => {
  return (<>
    <WindowWork />
    <Tree user={user}/>
    </>
  );
}

export default HomePage;
