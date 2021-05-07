import React, {useContext, useRef} from 'react';
import {View} from 'react-native';
import ListItem, {style} from '../ListItem/ListItem';
import ActionButton from '../ActionButton/ActionButton';
import {Context} from '../../util/GlobalContext';

export default function LearningScreen({name}) {
  const {isLightMode} = useContext(Context);

  return (
    <View
      style={{
        backgroundColor: isLightMode ? '#FFFFFF' : '#111827',
      }}>
      <ListItem name={name} />
    </View>
  );
}
