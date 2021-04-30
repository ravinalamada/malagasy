import React from 'react';
import {NativeRouter, Route, Link} from 'react-router-native';
import Home from './src/components/Home/Home';
import DisplayLearningScreen from './src/components/LearningScreen/DisplayLearningScreen';
import LearningScreen from './src/components/LearningScreen/LearningScreen';
import {GlobalContextProvider} from './src/util/GlobalContext';
const App = () => {
  return (
    <GlobalContextProvider>
      <NativeRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/:catName" component={DisplayLearningScreen} />
      </NativeRouter>
    </GlobalContextProvider>
  );
};

export default App;
