import React from 'react';
import {StyleSheet, TouchableHighlight, Text} from 'react-native';
import {styles} from '../ActionButton/ActionButton';

export const buttonStyle = StyleSheet.create({
  enabledButton: {
    width: 90,
    height: 40,
    backgroundColor: '#06B6D4',
    borderRadius: 30,
    paddingTop: 11,
    paddingBottom: 10,
    marginTop: 66,
  },
  disabledButton: {
    width: 90,
    height: 40,
    backgroundColor: 'white',
    borderColor: '#06B6D4',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 30,
    paddingTop: 11,
    paddingBottom: 10,
  },
  enabledText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  disabledText: {
    textAlign: 'center',
    color: '#06B6D4',
  },
});
export default function nextButton({buttonLabel, onPress, disabled}) {
  return (
    <TouchableHighlight
      style={disabled ? buttonStyle.disabledButton : buttonStyle.enabledButton}
      disabled={disabled}
      onPress={onPress}>
      <Text
        style={
          (styles.buttonText,
          disabled ? buttonStyle.disabledText : buttonStyle.enabledText)
        }>
        {buttonLabel}
      </Text>
    </TouchableHighlight>
  );
}
