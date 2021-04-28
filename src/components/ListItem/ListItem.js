import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ActionButton, {styles} from '../ActionButton/ActionButton';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
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
        buttonLabel={name === 'Food' ? 'Learn' : 'Pick'}
        onPress={() => alert(name)}
      />
    </View>
  );
}
