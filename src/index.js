import './config/ReactotronConfig';
import React from 'react';
import {StatusBar} from 'react-native';
import CodePush from 'react-native-code-push';
import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#090B22" />
      <Routes />
    </>
  );
};

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
