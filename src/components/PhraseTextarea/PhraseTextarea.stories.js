
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import PhraseTextarea from './PhraseTextarea';

const style = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 37,
    marginLeft: 23,
    marginRight: 23,
  }
})

function HandleUncontrolledInput() {

  return (
      <PhraseTextarea 
        multiline={true}
        numberOfLines={3}
        inputValue={"roa ambin'ny folo"}
        inputEditable={false} 
        />
  )
}

function HandleControlledInput () {
    const [text, setText] = useState('');

  return (
        <PhraseTextarea 
          placeHolderText= {'Enter here'}
          multiline={true}
          numberOfLines={3}
          inputValue={text}
          inputEditable={true}
          onChangeText={setText}
       />
  )
}

storiesOf('PhraseTextarea', module)
  .addDecorator(getnewStory => <View style={style.container}>{getnewStory()}</View>)
  .add('controlledInputText', () => <HandleControlledInput />)
  .add('uncontrolledInputText', () => <HandleUncontrolledInput />)
