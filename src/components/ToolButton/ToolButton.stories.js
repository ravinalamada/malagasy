
import React from 'react';
import { StyleSheet, View} from 'react-native';
import { storiesOf } from '@storybook/react-native';
import ToolButton from './ToolButton' ;

const style = StyleSheet.create({
  container: {
    margin: 20,
  }
})

storiesOf('ToolButton', module)
  .addDecorator(story => <View style={style.container}>{story()}</View>)
  .add('add button', () => (
    <ToolButton onPress={() => alert('add')} buttonLabel={'add'} />
        
  ))
  .add('seen button', () => (
    <ToolButton onPress={() => alert('seen')} buttonLabel={'seen'} />
    
  ))
  .add('learnt button', () => (
    <ToolButton onPress={() => alert('learnt')} buttonLabel={'learnt'} />
    
  ))
  .add('backward button', () => (
    <ToolButton onPress={() => alert('Go back')} buttonLabel={'back'} />
        
  ))
  .add('mode button', () => (
    <ToolButton onPress={() => alert('mode')} buttonLabel={'mode'} />
  ))
