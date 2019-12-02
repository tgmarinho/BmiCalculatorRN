import './config/ReactotronConfig';
import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#090B22" />
      <Routes />
    </>
  );
};

export default App;
