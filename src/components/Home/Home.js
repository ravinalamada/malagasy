import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import ToolButtom from '../ToolButton/ToolButton';
import SwitcherButton from '../SwitcherButtton/SwitcherButton';
import CurrentList from '../CurrentList';
import {Context} from '../../util/GlobalContext';

const style = StyleSheet.create({
  container: {
    marginTop: 35,
    marginLeft: 23,
    marginBottom: 66,
    marginRight: 23,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const Home = () => {
  const {toogleLang, toogleMode} = useContext(Context);

  return (
    <View style={style.container}>
      <View style={style.buttonContainer}>
        <ToolButtom buttonLabel={'add'} />
        <SwitcherButton onPress={toogleLang} />
        <ToolButtom buttonLabel={'seen'} />
        <ToolButtom buttonLabel={'learnt'} />
        <ToolButtom buttonLabel={'mode'} onPress={toogleMode} />
      </View>
      <CurrentList />
    </View>
  );
};

export default Home;
