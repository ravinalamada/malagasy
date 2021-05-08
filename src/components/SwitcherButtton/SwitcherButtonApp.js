import React, {useContext} from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import SwitcherIcon from '../assets/Icons/switcher-icon.svg';
import {styles} from './SwitcherButton';
import {Context} from '../../util/GlobalContext';

export default function () {
  const {isEn} = useContext(Context);
  return (
    <TouchableHighlight>
      {isEn ? (
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
