
import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import ActionButton from './ActionButton';

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 19,
    marginRight: 20,
  }
})

storiesOf('ActionButton', module)
  .addDecorator(story => <View style={style.container}>{story()}</View>)
  .add('Learn button', () => (
    <ActionButton onPress={() => alert('Learn')} buttonLabel={'Learn'} Icon={'Icon'} />
        
  ))
  .add('Pick button', () => (
    <ActionButton onPress={() => alert('Pick')} buttonLabel={'Pick'} Icon={'Icon'} />
    
  ))
  .add('Wrong button', () => (
    <ActionButton onPress={() => alert('Wrong')} buttonLabel={'Wrong'} Icon={'Icon'} />
        
  ))
  .add('Right button', () => (
    <ActionButton onPress={() => alert('Right')} buttonLabel={'Right'} Icon={'Icon'} />
  ))
