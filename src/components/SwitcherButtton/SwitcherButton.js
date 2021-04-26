import React from 'react';
import {StyleSheet, TouchableHighlight, View, Text} from 'react-native';
import SwitcherIcon from '../assets/Icons/switcher-icon.svg';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#06B6D4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 90,
    height: 40,
    paddingTop: 11,
    paddingLeft: 9.88,
    paddingRight: 8.67,
    paddingBottom: 11.22,
    borderRadius: 30,
  },
  Icon: {
    width: 16.93,
    height: 13.33,
  },
  text: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 16,
    color: '#FFFFFF',
  },
});

export default function ({onPress}) {
  return (
    <TouchableHighlight>
      <View style={styles.button}>
        <Text onPress={onPress} style={styles.text}>
          EN
        </Text>
        <SwitcherIcon />
        <Text onPress={onPress} style={styles.text}>
          MA
        </Text>
      </View>
    </TouchableHighlight>
  );
}
