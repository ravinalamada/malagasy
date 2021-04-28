import React from 'react';
import {StyleSheet, View} from 'react-native';
import ListItem from '../ListItem/ListItem';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 3,
  },
});

export default function List({name}) {
  return (
    <View style={style.container}>
      <ListItem name={name} />
    </View>
  );
}
