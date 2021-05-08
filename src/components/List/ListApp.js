import React, {useContext} from 'react';
import {View} from 'react-native';
import ListItemApp from '../ListItem/ListItemApp';
import {Context} from '../../util/GlobalContext';

export default function List({name}) {
  const {isLightMode} = useContext(Context);
  return (
    <View style={{backgroundColor: isLightMode ? '#FFFFFF' : '#111827'}}>
      <ListItemApp name={name} />
    </View>
  );
}
