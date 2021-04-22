
import React, {useState} from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import PhraseTextarea from './PhraseTextarea';


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
  .addDecorator(getnewStory => <View>{getnewStory()}</View>)
  .add('controlledInputText', () => <HandleControlledInput />)
  .add('uncontrolledInputText', () => <HandleUncontrolledInput />)
