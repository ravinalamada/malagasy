import React, {useContext} from 'react';
import {View} from 'react-native';
import ListItem from '../ListItem/ListItem';
import {Context} from '../../util/GlobalContext';

export default function LearningScreen({name, onRowPress}) {
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
