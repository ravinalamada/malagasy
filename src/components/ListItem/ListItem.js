import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Link} from 'react-router-native';
import ActionButton from '../ActionButton/ActionButton';
import {Context} from '../../util/GlobalContext';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingTop: 17,
    paddingBottom: 17,
    paddingRight: 20,
  },
  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#111827',
  },
});

export default function ListItem({name}) {
  const {
    isLightMode,
    label,
    toogleLabel,
    handleActionButton,
    isWrong,
    isCorrect,
  } = useContext(Context);

  let pickedButtonLabel;

  if (isCorrect) {
    pickedButtonLabel = 'Correct';
  } else if (isWrong) {
    pickedButtonLabel = 'Wrong';
  } else {
    pickedButtonLabel = 'Pick';
  }

  return (
    <View style={style.container}>
      <Text style={(style.text, {color: isLightMode ? '#111827' : '#FFFFFF'})}>
        {name}
      </Text>
      {label ? (
        <Link
          to={`/${name}`}
          component={ActionButton}
          onPress={() => toogleLabel(name)}
          buttonLabel={'Learn'}
        />
      ) : (
        <ActionButton
          buttonLabel={pickedButtonLabel}
          onPress={() => handleActionButton(name)}
        />
      )}
    </View>
  );
}
