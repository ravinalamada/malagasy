import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CurrentListItem from '../CurrentListItem';
import ListItem from '../ListItem/ListItem';
import {styles} from '../ToolButton/ToolButton';

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    borderColor: '#E5E5E5',
    borderStyle: 'solid',
    borderStartWidth: 1,
    borderEndWidth: 1,
    paddingLeft: 16,
    paddingRight: 20,
  },
  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#111827',
    paddingTop: 17,
    paddingBottom: 17,
  },
});

export default function List({name}) {
  return (
    <View style={style.container}>
      <ListItem style={style.text} name={name} />
    </View>
  );
}
