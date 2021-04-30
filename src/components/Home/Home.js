import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Link} from 'react-router-native';
import ToolButtom from '../ToolButton/ToolButton';
import SwitcherButton from '../SwitcherButtton/SwitcherButton';
import CurrentList from '../CurrentList';
import {Context} from '../../util/GlobalContext';

const style = StyleSheet.create({
  darkModeContainer: {
    backgroundColor: '#1F232C',
    paddingTop: 35,
    paddingLeft: 23,
    paddingRight: 23,
  },
  lightModeContainer: {
    backgroundColor: '#F9F9F9',
    paddingTop: 35,
    paddingLeft: 23,
    paddingRight: 23,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const Home = () => {
  const {isLightMode, toogleLang, toogleMode} = useContext(Context);

  return (
    <Link to="/">
      <View
        style={
          isLightMode ? style.lightModeContainer : style.darkModeContainer
        }>
        <View style={style.buttonContainer}>
          <ToolButtom buttonLabel={'add'} />
          <SwitcherButton onPress={toogleLang} />
          <ToolButtom buttonLabel={'seen'} />
          <ToolButtom buttonLabel={'learnt'} />
          <ToolButtom buttonLabel={'mode'} onPress={toogleMode} />
        </View>
        <CurrentList />
      </View>
    </Link>
  );
};

export default Home;
