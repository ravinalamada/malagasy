import React from 'react';
import {StyleSheet, TouchableHighlight, Text, Icon, View} from 'react-native';

export default function actionButton ({onPress, buttonLabel, Icon}) {
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

    const styles = StyleSheet.create({
        buttonText: {
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: 16,
            lineHeight: 19,
            color: textColor,
        },
    })

    return (
          <TouchableHighlight onPress={onPress}>
              <Text style={styles.buttonText}>
                {buttonLabel} {Icon}
              </Text>
          </TouchableHighlight>
    )
}