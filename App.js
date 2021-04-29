import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './src/components/Home/Home';
import {GlobalContextProvider} from './src/util/GlobalContext';
import {Context} from './src/util/GlobalContext';

const App = () => {
  const {isEn} = useContext(Context);

  return (
    <GlobalContextProvider>
      <Home style={{backgroundColor: isEn ? '#F9F9F9' : '#1F232C'}} />
    </GlobalContextProvider>
  );
};

export default App;
