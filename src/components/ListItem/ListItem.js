import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ActionButton from '../ActionButton/ActionButton';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 3,
    borderColor: '#E5E5E5',
    borderStyle: 'solid',
    borderWidth: 1,
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
  return (
    <View style={style.container}>
      <Text style={style.text}>{name}</Text>
      <ActionButton
        buttonLabel={name === 'Food' || name === 'Sakafo' ? 'Pick' : 'Learn'}
      />
    </View>
  );
}
