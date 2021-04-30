import React, {useContext} from 'react';
import {View} from 'react-native';
import {NativeRouter} from 'react-router-native';
import {Context} from '../../util/GlobalContext';
import CurrentLearningScreen from './CurrentLearningScreenList';
import ToolButtom from '../ToolButton/ToolButton';
import {style} from '../Home/Home';
import SwitcherButton from '../SwitcherButtton/SwitcherButton';

export default function DisplayLearningScreen() {
  const {isLightMode, toogleLang, toogleMode, handlePress} = useContext(
    Context,
  );

  return (
    <View
      style={isLightMode ? style.lightModeContainer : style.darkModeContainer}>
      <View style={style.buttonContainer}>
        <ToolButtom buttonLabel={'back'} />
        <ToolButtom buttonLabel={'mode'} onPress={toogleMode} />
        <SwitcherButton onPress={toogleLang} />
      </View>
      <CurrentLearningScreen />
    </View>
  );
}
