import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ActionButton from '../ActionButton/ActionButton';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 3,
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

export default function List({name}) {
  return (
    <View style={style.container}>
      <Text style={style.text}>{name}</Text>
      <ActionButton buttonLabel={'Learn'} onPress={() => alert(name)} />
    </View>
  );
}
