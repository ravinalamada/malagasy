import React, {useContext, useRef} from 'react';
import {View} from 'react-native';
import ListItem, {style} from '../ListItem/ListItem';
import ActionButton from '../ActionButton/ActionButton';
import {Context} from '../../util/GlobalContext';

export default function LearningScreen({name, onRowPress}) {
  const {isLightMode, phrasesArr} = useContext(Context);
  // var btn = 'Pick';
  // let Button = btnRef.current;
  const btnRef = useRef(null);
  const correctAnswer = phrasesArr.answers.name.en;

  function handleBtns() {
    let btn = btnRef.current;
    if (correctAnswer !== name) {
      btn = 'Correct';
      console.log(btn);
    }

    return btn;
  }

  return (
    <View
      style={{
        backgroundColor: isLightMode ? '#FFFFFF' : '#111827',
      }}>
      <View style={style.container}>
        <ListItem name={name} />
        <ActionButton buttonLabel={'Pick'} onPress={handleBtns} />
      </View>
    </View>
  );
}
