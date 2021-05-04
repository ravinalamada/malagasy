import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ActionButton from '../ActionButton/ActionButton';
import {Context} from '../../util/GlobalContext';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingTop: 17,
    paddingBottom: 17,
    paddingRight: 20,
  },
  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#111827',
  },
});

export default function ListItem({name}) {
  const {isLightMode} = useContext(Context);

  return (
    <View>
      <Text style={(style.text, {color: isLightMode ? '#111827' : '#FFFFFF'})}>
        {name}
      </Text>
    </View>
  );
}
