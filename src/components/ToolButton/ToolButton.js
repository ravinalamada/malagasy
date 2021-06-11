import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import {Link} from 'react-router-native';
import AddIcon from '../assets/Icons/add-icon.svg';
import ModeIcon from '../assets/Icons/mode-icon.svg';
import LearntIcon from '../assets/Icons/learnt-icon.svg';
import BackIcon from '../assets/Icons/back-icon.svg';
import SeenIcon from '../assets/Icons/seen-icon.svg';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#06B6D4',
    width: 40,
    height: 40,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 13,
    marginEnd: 10,
  },
  Icon: {
    width: 14,
    height: 14,
  },
});

function changeButtonIcons(buttonLabel) {
  // You don't need to declare button, just return the component directly like: return <BackIcon ...>
  let Button;
  if (buttonLabel === 'mode') {
    return (Button = <ModeIcon style={styles.Icon} />);
  } else if (buttonLabel === 'back') {
    return (Button = <BackIcon style={styles.Icon} />);
  } else if (buttonLabel === 'seen') {
    return (Button = <SeenIcon style={styles.Icon} />);
  } else if (buttonLabel === 'learnt') {
    return (Button = <LearntIcon style={styles.Icon} />);
  } else if (buttonLabel === 'add') {
    return (Button = <AddIcon style={styles.Icon} />);
  }
  return Button;
}
// That many if statments are not elegant, this is something I learned in my bootcamp: Declare an object with all the possiblilities annd then access the respective property:
// const Icon = {
//   back: () => <BackIcon style={styles.Icon} />,
//   seen: () => <SeenIcon style={styles.Icon} />,
// };
// Access it with: Icon.buttonLabel
//You might not evewn need the arrow functions.

export default function actionButton({onPress, buttonLabel}) {
  return (
    <TouchableHighlight onPress={onPress} style={styles.container}>
      {changeButtonIcons(buttonLabel)}
    </TouchableHighlight>
  );
}
