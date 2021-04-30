import React from 'react';
import {NativeRouter, Route, Link} from 'react-router-native';
import Home from './src/components/Home/Home';
import Test from './src/components/Test';

import {GlobalContextProvider} from './src/util/GlobalContext';
const App = () => {
  return (
    <GlobalContextProvider>
      <NativeRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/:name" component={Test} />
      </NativeRouter>
    </GlobalContextProvider>
  );
};

export default App;
