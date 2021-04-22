
import React, {useState} from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import PhraseTextarea from './PhraseTextarea';


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
  .add('controlledAndUncontrolledInputText', () => <HandleInputText />)

