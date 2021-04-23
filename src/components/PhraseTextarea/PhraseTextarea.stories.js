
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

function Edit() {
  const [text, setText] = useState('');
  return (
    <PhraseTextarea
      phrase={text}
      editable={true}
      onChange={input => setText(input)}
    />
  );
}
storiesOf('PhraseTextarea', module)
  .addDecorator(story => <View style={style.container}>{story()}</View>)
  .add('editable input', () => <Edit />)
  .add('not editable phrase', () => (
    <PhraseTextarea phrase={'a word word'} editable={false} />
  ))
  .add('not editable and longer', () => (
    <PhraseTextarea
      phrase={
        'Longer phrase Longer phrase Longer phrase Longer phrase Longer phrase'
      }
      editable={false}
    />
  ));
