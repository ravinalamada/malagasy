import { color } from '@storybook/addon-knobs';
import React from 'react';
import {StyleSheet, TouchableHighlight, Text,} from 'react-native';
import {styles} from '../ActionButton/ActionButton';

const buttonStyle = StyleSheet.create({
    enabledButton: {
      width: 90,
      height: 40,  
      backgroundColor: '#06B6D4',
      color: '#FFFFFF',
      borderRadius: 30,
      paddingLeft: 27,
      paddingRight: 27,
      paddingTop: 11,
      paddingBottom: 10,
    },
    disabledButton: {
        width: 90,
        height: 40,
        backgroundColor: 'white',
        borderColor:  '#06B6D4',
        borderWidth: 1,
        borderStyle: 'solid',
        color: '#06B6D4',
        borderRadius: 30,
        paddingLeft: 27,
        paddingRight: 27,
        paddingTop: 11,
        paddingBottom: 10,
    }
})
export default function nextButton({children, onPress, disabled}) {
    return (
    <TouchableHighlight 
    style={styles.buttonText, 
           disabled ? buttonStyle.disabledButton : buttonStyle.enabledButton
    } 
    onPress={onPress}
    disabled={disabled}
    >{children}</TouchableHighlight>
    )
}