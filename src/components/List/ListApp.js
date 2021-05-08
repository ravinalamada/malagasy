import React, {useContext} from 'react';
import {View} from 'react-native';
import ListItemApp from '../ListItem/ListItemApp';
import {styles} from './List';
import {Context} from '../../util/GlobalContext';

export default function List({name}) {
  const {isLightMode} = useContext(Context);
  return (
    <View
      style={
        (styles.container,
        {backgroundColor: isLightMode ? '#FFFFFF' : '#111827'})
      }>
      <View>
        <ListItemApp name={name} />
      </View>
    </View>
  );
}
