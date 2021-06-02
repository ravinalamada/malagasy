import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Link} from 'react-router-native';
import ToolButtom from '../ToolButton/ToolButton';
import SwitcherButton from '../SwitcherButtton/SwitcherButton';
import CurrentList from '../List/CurrentList';
import {Context} from '../../util/GlobalContext';

export const homeStyle = StyleSheet.create({
  darkModeContainer: {
    backgroundColor: '#1F232C',
    paddingTop: 35,
    paddingLeft: 23,
    paddingRight: 23,
    height: '100%',
  },
  lightModeContainer: {
    backgroundColor: '#F9F9F9',
    paddingTop: 35,
    paddingLeft: 23,
    paddingRight: 23,
    height: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 56,
  },
});
// This should be in a separate screens folder, not the components
const Home = () => {
  const {isLightMode, toogleLang, toogleMode} = useContext(Context);

  return (
    <Link to="/">
      <View
        style={
          isLightMode
            ? homeStyle.lightModeContainer
            : homeStyle.darkModeContainer
        }>
        <View style={homeStyle.buttonContainer}>
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
