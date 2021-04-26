import React from 'react';
import {StyleSheet, TouchableHighlight, Text, Image, View, Button} from 'react-native';
// import AddIcon from '../assets/Icons/add-icon.svg'
import ModeIcon from '../assets/Icons/sun-icon.svg';
// import LearntIcon from '../assets/Icons/learnt-icon.svg'
// import BackIcon from '../assets/Icons/back-arr.svg';
// import SeenIcon from '../assets/Icons/seen-icon.svg';

export const styles = StyleSheet.create({
        container: {
            flexDirection:'row',
            justifyContent: 'center',
            alignItems:'center',
        },
        Icon: {
            width:16,
            height:16,
            marginLeft: 10,
        }
    })

function changeButtonIcons(buttonLabel) {
    let Button;
    if(buttonLabel === 'mode') {
        return (Button =<ModeIcon style={styles.Icon} />)
    }
    // else if(buttonLabel === 'back') {
    //     return (Button= <BackIcon style={styles.Icon} />)
    // }
    // else if (buttonLabel === 'seen') {
    //     return (Button = <SeenIcon style={styles.Icon} />)
    // }
    // else if (buttonLabel === 'learnt') {
    //     return (Button = <LearntIcon style={styles.Icon} />)
    // }
    // else if (buttonLabel === 'add') {
    //     return (Button = <AddIcon style={styles.Icon} />)
    // }
    return Button;
}
    
export default function actionButton ({onPress, buttonLabel}) {

    return (
          <TouchableHighlight onPress={onPress}>
              {changeButtonIcons(buttonLabel)}
          </TouchableHighlight>
    )
}