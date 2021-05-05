import React, {useContext, useRef} from 'react';
import {View} from 'react-native';
import ListItem, {style} from '../ListItem/ListItem';
import ActionButton from '../ActionButton/ActionButton';
import {Context} from '../../util/GlobalContext';

export default function LearningScreen({name, onRowPress}) {
  const {
    isLightMode,
    phrasesArr,
    handleActionButton,
    isWrong,
    isCorrect,
  } = useContext(Context);

  let label;

  if (isCorrect) {
    label = 'Correct';
  } else if (isWrong) {
    label = 'Wrong';
  } else {
    label = 'Pick';
  }

  return (
    <View
      style={{
        backgroundColor: isLightMode ? '#FFFFFF' : '#111827',
      }}>
      <View style={style.container}>
        <ListItem name={name} />
        <ActionButton
          buttonLabel={label}
          onPress={() => handleActionButton(name)}
        />
      </View>
    </View>
  );
}
