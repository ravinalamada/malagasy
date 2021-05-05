import React, {useContext} from 'react';
import {StyleSheet, TouchableHighlight, View, Text} from 'react-native';
import SwitcherIcon from '../assets/Icons/switcher-icon.svg';
import {Context} from '../../util/GlobalContext';
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
    marginEnd: 10,
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

export default function ({onPress, lang}) {
  const {isEn} = useContext(Context);
  return (
    <TouchableHighlight onPress={onPress}>
      {isEn || lang ? (
        <View style={styles.button}>
          <Text style={styles.text}>EN</Text>
          <SwitcherIcon />
          <Text style={styles.text}>MA</Text>
        </View>
      ) : (
        <View style={styles.button}>
          <Text style={styles.text}>MA</Text>
          <SwitcherIcon />
          <Text style={styles.text}>EN</Text>
        </View>
      )}
    </TouchableHighlight>
  );
}
