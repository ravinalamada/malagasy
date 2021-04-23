import React from 'react';
import {StyleSheet, TouchableHighlight, Text, Icon, View} from 'react-native';

function changeButtonColor(buttonLabel) {
  let textColor;

    if(buttonLabel === 'Learn' || buttonLabel === "Pick") {
        textColor = '#06B6D4'
    }
    else if(buttonLabel === 'Wrong') {
        textColor = '#D4068E'
    }
    else if (buttonLabel === 'Right') {
        textColor= '#06D440'
    }
   return textColor;
}

const styles = StyleSheet.create({
        buttonText: {
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: 16,
            lineHeight: 19,
        },
    })
    
export default function actionButton ({onPress, buttonLabel, Icon}) {

    return (
          <TouchableHighlight onPress={onPress}>
              <Text style={styles.buttonText, {color: changeButtonColor(buttonLabel)}}>
                {buttonLabel} {Icon}
              </Text>
          </TouchableHighlight>
    )
}