import React from 'react';
import {NativeRouter, Route} from 'react-router-native';
import Home from './src/components/Home/Home';
import CurrentLearningList from './src/components/LearningScreen/CurrentLearningScreenList';
import {GlobalContextProvider} from './src/util/GlobalContext';

const App = () => {
  return (
    <GlobalContextProvider>
      <NativeRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/:catName" component={CurrentLearningList} />
      </NativeRouter>
    </GlobalContextProvider>
  );
};

export default App;
