import React from 'react';
import {StyleSheet, TouchableHighlight, Text, Image, View, Button} from 'react-native';
import BlueArr from '../assets/Icons/blue-arr.svg';
import CorrectIcon from '../assets/Icons/correct-icon.svg';
import WrongIcon from '../assets/Icons/wrong-icon.svg'


const styles = StyleSheet.create({
        container: {
            flexDirection:'row',
            justifyContent: 'center',
            alignItems:'center',
        },
        buttonText: {
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: 16,
            lineHeight: 19,
        },
        Icon: {
            width:16,
            height:16,
            marginLeft: 10,
        }
    })

function changeButtonColorAndIcons(buttonLabel) {
    let Button;
    if(buttonLabel === 'Learn' || buttonLabel === "Pick") {
        return (
        Button = <View style={styles.container}>
                        <Text style={styles.buttonText, {color: '#06B6D4'}}>
                            {buttonLabel} 
                        </Text>
                        <BlueArr style={styles.Icon} />
                    </View> 
                )
    }
    else if(buttonLabel === 'Wrong') {
        return (
            Button= <View style={styles.container}>
                        <Text style={styles.buttonText, {color: '#D4068E'}}>
                            {buttonLabel} 
                        </Text>
                        <WrongIcon style={styles.Icon} />
                    </View> 
        
        )

    }
    else if (buttonLabel === 'Correct') {
        return (
            Button = <View style={styles.container}>
                        <Text style={styles.buttonText, {color: '#06D440'}}>
                            {buttonLabel} 
                        </Text>
                        <CorrectIcon style={styles.Icon} />
                    </View> 
        )

    }
    return Button;
}
    
export default function actionButton ({onPress, buttonLabel}) {

    return (
          <TouchableHighlight onPress={onPress}>
              {changeButtonColorAndIcons(buttonLabel)}
          </TouchableHighlight>
    )
}