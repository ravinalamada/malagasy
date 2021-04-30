import React, {useContext} from 'react';
import {View} from 'react-native';
// import {Context} from '../../util/GlobalContext';
import ListItem from '../ListItem/ListItem';
// import ToolButtom from '../ToolButton/ToolButton';
// import {style} from '../Home/Home';
// import SwitcherButton from '../SwitcherButtton/SwitcherButton';

export default function LearningScreen({name}) {
  //   const {isLightMode, toogleLang, toogleMode} = useContext(Context);

  return (
    <View>
      <ListItem name={name} />
    </View>
  );
}
