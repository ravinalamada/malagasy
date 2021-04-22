
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import PhraseTextarea from './PhraseTextarea';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { color } from '@storybook/addon-knobs';

function HandleInputText() {
  const [text, setText] = useState('');

  return (
    <>
      <PhraseTextarea 
        placeHolderText= {'word here'}
        multiline={true}
        numberOfLines={3}
        inputValue={"I am read only"}
        inputEditable={false} 
        />
        <PhraseTextarea 
          placeHolderText= {'Inter here'}
          multiline={true}
          numberOfLines={3}
          inputValue={text}
          inputEditable={true}
          onChangeText={setText}
       />
    </>
  )
}

storiesOf('PhraseTextarea', module)
  .addDecorator(getnewStory => <View>{getnewStory()}</View>)
  .add('controlledInputTextAndUncontrolledInputText', () => <HandleInputText />)

